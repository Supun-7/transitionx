'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'

// ── Brand color palette (two-color identity) ─────────────────────────────────
const C_CYAN     = 0x22d3ee
const C_MAGENTA  = 0xe056c1
const C_LAVENDER = 0xca8cd3

// ── Night palette (dark, brand-lit) ───────────────────────────────────────────
const N_MOON     = 0x9fb4ff   // cool moonlight
const N_SKY_TOP  = 0x030409   // near-black zenith
const N_SKY_MID  = 0x07060f   // deep indigo band
const N_SKY_LOW  = 0x100a1e   // faint violet horizon

// ── World & chunk constants ──────────────────────────────────────────────────
// 8 pre-built static chunks that recycle instantly via position offset.
// Every chunk is city; greenery is placed along the sidewalks.
const CHUNK_COUNT = 8
const CHUNK_W     = 36
const TOTAL_WORLD_LEN = CHUNK_COUNT * CHUNK_W // 288 units

// ── Seeded random generator ──────────────────────────────────────────────────
function rngOf(seed: number) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

// ── Shared Materials (Zero GPU re-compilation during runtime) ─────────────────
// Everything is tinted into the brand's two-colour identity:
// cyan-leaning foliage/glass, magenta-leaning mass and warm bark.
const M = {
  // Jungle
  trunk:    new THREE.MeshStandardMaterial({ color: 0x4a3220, roughness: 0.92, metalness: 0.05 }),
  leafDark: new THREE.MeshStandardMaterial({ color: 0x1b3b45, roughness: 0.78, metalness: 0.04 }),
  leafCyan: new THREE.MeshStandardMaterial({ color: 0x2b8296, emissive: 0x0d3a45, emissiveIntensity: 0.55, roughness: 0.6 }),
  leafPurp: new THREE.MeshStandardMaterial({ color: 0x6d3168, emissive: 0x2c1030, emissiveIntensity: 0.45, roughness: 0.66 }),
  rock:     new THREE.MeshStandardMaterial({ color: 0x33303f, roughness: 0.9, metalness: 0.08 }),

  // City
  asphalt:  new THREE.MeshStandardMaterial({ color: 0x201e2a, roughness: 0.42, metalness: 0.15 }),
  sidewalk: new THREE.MeshStandardMaterial({ color: 0x3b3750, roughness: 0.78, metalness: 0.06 }),
  concrete: new THREE.MeshStandardMaterial({ color: 0x453f63, roughness: 0.74, metalness: 0.08 }),
  concreteMag: new THREE.MeshStandardMaterial({ color: 0x554063, roughness: 0.7, metalness: 0.1 }),
  glassDark:new THREE.MeshStandardMaterial({ color: 0x183048, roughness: 0.1, metalness: 0.72 }),
  steel:    new THREE.MeshStandardMaterial({ color: 0x5a5478, roughness: 0.45, metalness: 0.55 }),

  // Neon & Glow Accents (MeshBasicMaterial = glowing look with zero light-shader lag)
  neonCyan: new THREE.MeshBasicMaterial({ color: C_CYAN }),
  neonMag:  new THREE.MeshBasicMaterial({ color: C_MAGENTA }),
  neonLav:  new THREE.MeshBasicMaterial({ color: C_LAVENDER }),
}

// ── Shared Geometries for instant rendering ──────────────────────────────────
const G = {
  treeTrunk: new THREE.CylinderGeometry(1, 1, 1, 10),
  treeBranch: new THREE.CylinderGeometry(0.55, 1, 1, 7),
  canopy: new THREE.IcosahedronGeometry(1, 1),
  shrub: new THREE.SphereGeometry(1, 10, 8),
  box: new THREE.BoxGeometry(1, 1, 1),
  plane: new THREE.PlaneGeometry(1, 1),
  firefly: new THREE.SphereGeometry(0.045, 6, 5),
}

// ── City Elements ────────────────────────────────────────────────────────────
// Street tree for the sidewalks: a slim tapered trunk, a few upward limbs and a
// rounded canopy of foliage clusters. Smaller and more regular than the old
// former forest tree so it reads as landscaping beside the road, not forest.
function mkCityTree(rng: () => number): THREE.Group {
  const g = new THREE.Group()
  const h = 3.4 + rng() * 2.2

  const rBot = 0.14 + rng() * 0.07
  const rTop = rBot * 0.62

  const trunk = new THREE.Mesh(G.treeTrunk, M.trunk)
  trunk.scale.set(rTop + (rBot + rTop) / 2, h, rTop + (rBot + rTop) / 2)
  trunk.position.y = h / 2
  g.add(trunk)

  const crown = new THREE.Vector3(0, h * 0.92, 0)
  const tips: THREE.Vector3[] = [crown]

  const limbCount = 3
  for (let b = 0; b < limbCount; b++) {
    const angle = (b / limbCount) * Math.PI * 2 + rng() * 0.6
    const len = 0.7 + rng() * 0.8
    const lift = 0.9 + rng() * 0.7
    const rad = rTop * 0.7

    const limb = new THREE.Mesh(G.treeBranch, M.trunk)
    limb.scale.set(rad, len, rad)
    limb.position.set(
      Math.cos(angle) * len * 0.24,
      h * 0.74 + (lift * len) / 2,
      Math.sin(angle) * len * 0.24
    )
    limb.rotation.z = -Math.atan2(lift, len * 0.6) * Math.cos(angle)
    limb.rotation.x = Math.atan2(lift, len * 0.6) * Math.sin(angle)
    limb.rotation.y = -angle
    g.add(limb)

    tips.push(new THREE.Vector3(
      Math.cos(angle) * len * 0.5,
      h * 0.74 + lift * len * 0.9,
      Math.sin(angle) * len * 0.5
    ))
  }

  const clusterMat = () => {
    const r = rng()
    return r < 0.4 ? M.leafCyan : r < 0.7 ? M.leafPurp : M.leafDark
  }

  const blobs = 7 + Math.floor(rng() * 4)
  for (let i = 0; i < blobs; i++) {
    const tip = tips[i % tips.length]
    const outer = i < tips.length
    const spread = outer ? 0.25 : 0.45 + rng() * 0.5

    const leaf = new THREE.Mesh(G.canopy, clusterMat())
    const rad = (outer ? 0.6 : 0.45) + rng() * 0.45
    leaf.scale.set(rad, rad * (0.6 + rng() * 0.25), rad * (0.9 + rng() * 0.2))
    leaf.position.set(
      tip.x + (rng() - 0.5) * spread * 1.6,
      tip.y + (rng() - 0.3) * spread * 1.1,
      tip.z + (rng() - 0.5) * spread * 1.6
    )
    leaf.rotation.set(rng() * Math.PI, rng() * Math.PI, rng() * Math.PI)
    g.add(leaf)
  }

  return g
}

// Tower built the way real ones are: wider podium, a main shaft, an optional
// setback block, continuous floor slabs, mullioned glazing on two faces and a
// serviced roof (parapet, plant boxes, water tank, mast, aviation light).
function mkSkyscraper(rng: () => number): THREE.Group {
  const g = new THREE.Group()
  const w = 2.6 + rng() * 3.6
  const d = 2.2 + rng() * 2.8
  const h = 12 + rng() * 22

  const hasSetback = rng() < 0.55
  const setbackY = h * (0.5 + rng() * 0.22)
  const setbackScale = 0.58 + rng() * 0.2

  // Podium (ground-floor base, slightly wider than the shaft)
  const podH = 2.2 + rng() * 1.8
  const pod = new THREE.Mesh(G.box, M.concreteMag)
  pod.scale.set(w * 1.18, podH, d * 1.18)
  pod.position.y = podH / 2
  g.add(pod)

  const podGlass = new THREE.Mesh(G.plane, M.glassDark)
  podGlass.scale.set(w * 1.1, podH * 0.62, 1)
  podGlass.position.set(0, podH * 0.55, (d * 1.18) / 2 + 0.02)
  g.add(podGlass)

  // Main shaft
  const shaftH = hasSetback ? setbackY : h
  const shaft = new THREE.Mesh(G.box, M.concrete)
  shaft.scale.set(w, shaftH, d)
  shaft.position.y = podH + shaftH / 2
  g.add(shaft)

  // Setback upper block
  if (hasSetback) {
    const upH = h - setbackY
    const upper = new THREE.Mesh(G.box, M.concrete)
    upper.scale.set(w * setbackScale, upH, d * setbackScale)
    upper.position.y = podH + setbackY + upH / 2
    g.add(upper)

    // Terrace ledge where the tower steps in
    const ledge = new THREE.Mesh(G.box, M.concreteMag)
    ledge.scale.set(w * 1.03, 0.22, d * 1.03)
    ledge.position.y = podH + setbackY
    g.add(ledge)
  }

  // Floor slabs give the facade horizontal rhythm instead of a blank wall
  const floorH = 1.25
  const floors = Math.floor((hasSetback ? shaftH : h) / floorH)
  for (let f = 1; f < floors; f++) {
    const slab = new THREE.Mesh(G.box, M.concreteMag)
    slab.scale.set(w * 1.015, 0.1, d * 1.015)
    slab.position.y = podH + f * floorH
    g.add(slab)
  }

  // Glazing on the front and one side face
  const glassH = (hasSetback ? shaftH : h) * 0.97
  const facade = new THREE.Mesh(G.plane, M.glassDark)
  facade.scale.set(w * 0.94, glassH, 1)
  facade.position.set(0, podH + glassH / 2, d / 2 + 0.02)
  g.add(facade)

  const sideFacade = new THREE.Mesh(G.plane, M.glassDark)
  sideFacade.scale.set(d * 0.9, glassH, 1)
  sideFacade.position.set(w / 2 + 0.02, podH + glassH / 2, 0)
  sideFacade.rotation.y = Math.PI / 2
  g.add(sideFacade)

  // Vertical mullions breaking up the glass
  const mull = Math.max(2, Math.floor(w / 0.8))
  for (let m = 1; m < mull; m++) {
    const bar = new THREE.Mesh(G.box, M.steel)
    bar.scale.set(0.07, glassH, 0.07)
    bar.position.set(-w / 2 + (m * w) / mull, podH + glassH / 2, d / 2 + 0.06)
    g.add(bar)
  }

  // Lit windows behind the glass (cyan / magenta brand interior light)
  const rows = Math.min(15, Math.floor(glassH / floorH))
  const cols = Math.min(6, Math.floor(w / 0.95))
  for (let r = 1; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (rng() < 0.45) continue // dark window
      const winRoll = rng()
      const winMat = winRoll < 0.42 ? M.neonCyan : winRoll < 0.78 ? M.neonMag : M.neonLav
      const win = new THREE.Mesh(G.box, winMat)
      win.scale.set(0.3, 0.4, 0.04)
      win.position.set(-w / 2 + 0.42 + c * (w / cols), podH + 0.5 + r * floorH, d / 2 + 0.05)
      g.add(win)
    }
  }

  // Sparse windows on the side face for depth
  const sideRows = Math.min(12, Math.floor(glassH / floorH))
  for (let r = 1; r < sideRows; r++) {
    if (rng() < 0.55) continue
    const win = new THREE.Mesh(G.box, rng() < 0.5 ? M.neonCyan : M.neonMag)
    win.scale.set(0.04, 0.38, 0.28)
    win.position.set(w / 2 + 0.05, podH + 0.5 + r * floorH, -d / 2 + 0.5 + rng() * (d - 1))
    g.add(win)
  }

  // Brand neon fin running up the corner
  const neonMat = rng() < 0.5 ? M.neonCyan : M.neonMag
  const strip = new THREE.Mesh(G.box, neonMat)
  strip.scale.set(0.11, h * 0.72, 0.11)
  strip.position.set(rng() < 0.5 ? -w / 2 + 0.16 : w / 2 - 0.16, h * 0.45, d / 2 + 0.08)
  g.add(strip)

  // ── Roof: parapet, plant boxes, water tank, mast ──
  const roofY = podH + h
  const roofW = hasSetback ? w * setbackScale : w
  const roofD = hasSetback ? d * setbackScale : d

  const parapetH = 0.7
  for (const [px, pz, pw, pd] of [
    [0, roofD / 2, roofW, 0.14],
    [0, -roofD / 2, roofW, 0.14],
    [roofW / 2, 0, 0.14, roofD],
    [-roofW / 2, 0, 0.14, roofD],
  ] as const) {
    const wall = new THREE.Mesh(G.box, M.concreteMag)
    wall.scale.set(pw, parapetH, pd)
    wall.position.set(px, roofY + parapetH / 2, pz)
    g.add(wall)
  }

  // Rooftop plant / AC units
  const units = 1 + Math.floor(rng() * 3)
  for (let u = 0; u < units; u++) {
    const unit = new THREE.Mesh(G.box, M.steel)
    const uw = 0.5 + rng() * 0.8
    unit.scale.set(uw, 0.4 + rng() * 0.4, uw * 0.8)
    unit.position.set((rng() - 0.5) * roofW * 0.5, roofY + 0.3, (rng() - 0.5) * roofD * 0.5)
    g.add(unit)
  }

  // Water tank on a short frame
  const tank = new THREE.Mesh(G.treeTrunk, M.steel)
  tank.scale.set(0.55, 1.1, 0.55)
  tank.position.set((rng() - 0.5) * roofW * 0.4, roofY + 1.0, (rng() - 0.5) * roofD * 0.4)
  g.add(tank)

  // Mast with an aviation warning light
  const antH = 2.2 + rng() * 2.4
  const ant = new THREE.Mesh(G.treeTrunk, M.steel)
  ant.scale.set(0.05, antH, 0.05)
  ant.position.y = roofY + antH / 2
  g.add(ant)

  const blink = new THREE.Mesh(G.firefly, neonMat)
  blink.scale.set(2.2, 2.2, 2.2)
  blink.position.y = roofY + antH + 0.08
  g.add(blink)

  return g
}

function mkStreetLamp(rng: () => number): THREE.Group {
  const g = new THREE.Group()
  const pole = new THREE.Mesh(G.treeTrunk, M.steel)
  pole.scale.set(0.05, 4.6, 0.05)
  pole.position.y = 2.3
  g.add(pole)

  const arm = new THREE.Mesh(G.treeTrunk, M.steel)
  arm.scale.set(0.04, 1.2, 0.04)
  arm.rotation.z = Math.PI / 2
  arm.position.set(0.6, 4.6, 0)
  g.add(arm)

  const lampCol = rng() < 0.6 ? M.neonCyan : M.neonMag
  const lampFixture = new THREE.Mesh(G.firefly, lampCol)
  lampFixture.scale.set(2.5, 2.5, 2.5)
  lampFixture.position.set(1.2, 4.55, 0)
  g.add(lampFixture)

  return g
}


// ── Chunk Factory (Runs ONCE on mount, NEVER during animation) ───────────────
function buildStaticChunk(seed: number): THREE.Group {
  const g = new THREE.Group()
  const rng = rngOf(seed)
  const W = CHUNK_W

  // Ground plane
  {
    const road = new THREE.Mesh(new THREE.PlaneGeometry(W, 32), M.asphalt)
    road.rotation.x = -Math.PI / 2
    road.position.set(W / 2, 0, 0)
    g.add(road)

    // Cyan lane dividers
    for (let l = 0; l < Math.floor(W / 4); l++) {
      const mark = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 0.12), M.neonCyan)
      mark.rotation.x = -Math.PI / 2
      mark.position.set(l * 4 + 1.5, 0.02, 0)
      g.add(mark)
    }

    // Sidewalks
    for (const zSide of [-6.0, 6.0]) {
      const walk = new THREE.Mesh(new THREE.PlaneGeometry(W, 3.2), M.sidewalk)
      walk.rotation.x = -Math.PI / 2
      walk.position.set(W / 2, 0.03, zSide)
      g.add(walk)
    }
  }

  // City skyscrapers, street lamps and greenery
  {
    const bldCount = 5
    for (let b = 0; b < bldCount; b++) {
      const bld = mkSkyscraper(rng)
      const zSide = rng() < 0.5 ? -1 : 1
      const z = zSide * (9.5 + rng() * 9.5)
      bld.position.set((b + 0.3) * (W / bldCount), 0, z)
      g.add(bld)
    }

    const lampCount = 3
    for (let l = 0; l < lampCount; l++) {
      for (const zSide of [-7.5, 7.5]) {
        const lamp = mkStreetLamp(rng)
        lamp.position.set(l * (W / lampCount) + rng() * 2, 0, zSide)
        if (zSide > 0) lamp.rotation.y = Math.PI
        g.add(lamp)
      }
    }

    // Neon road puddle reflections
    for (let p = 0; p < 3; p++) {
      const puddle = new THREE.Mesh(G.plane, rng() < 0.5 ? M.neonCyan : M.neonMag)
      puddle.scale.set(1.2 + rng() * 1.8, 0.08, 1)
      puddle.rotation.x = -Math.PI / 2
      puddle.position.set(rng() * W, 0.02, (rng() - 0.5) * 3.5)
      g.add(puddle)
    }

    // ── Urban greenery: street trees and planted beds on the sidewalks ──
    for (const zSide of [-6.0, 6.0]) {
      const trees = 3 + Math.floor(rng() * 2)
      for (let t = 0; t < trees; t++) {
        const tree = mkCityTree(rng)
        tree.position.set(((t + 0.5) / trees) * W + (rng() - 0.5) * 2.5, 0.03, zSide)
        tree.rotation.y = rng() * Math.PI * 2
        tree.scale.setScalar(0.62 + rng() * 0.22)
        g.add(tree)
      }

      // Low hedge balls filling the gaps between trees
      const hedges = 2 + Math.floor(rng() * 2)
      for (let s = 0; s < hedges; s++) {
        const hedge = new THREE.Mesh(G.shrub, rng() < 0.4 ? M.leafCyan : M.leafDark)
        const hr = 0.3 + rng() * 0.25
        hedge.scale.set(hr * 1.3, hr, hr * 1.3)
        hedge.position.set(rng() * W, 0.03 + hr * 0.6, zSide + (rng() - 0.5) * 1.4)
        g.add(hedge)
      }
    }
  }

  // Shadow flags: flat decals only receive, solid geometry casts + receives
  g.traverse(o => {
    const mesh = o as THREE.Mesh
    if (!mesh.isMesh) return
    mesh.receiveShadow = true
    if (mesh.geometry.type !== 'PlaneGeometry') mesh.castShadow = true
  })

  return g
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function HeroJungle() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // ── High Performance WebGL Renderer ──
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
      stencil: false,
      depth: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25)) // Capped for shadow + bloom cost
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.15
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    mount.appendChild(renderer.domElement)

    // ── Scene & Atmospheric Fog ──
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(N_SKY_LOW)
    scene.fog = new THREE.Fog(0x140d24, 20, 72)

    // ── Natural eye-level camera (wider FOV for a real perspective feel) ──
    const camera = new THREE.PerspectiveCamera(62, mount.clientWidth / mount.clientHeight, 0.1, 200)
    camera.position.set(0, 1.35, 11.2)
    camera.lookAt(7.8, 0.9, 0)

    // ── Night Lighting Rig (lifted just enough to read forms) ──
    const hemi = new THREE.HemisphereLight(0x453a80, 0x100b1e, 0.6)
    scene.add(hemi)

    const amb = new THREE.AmbientLight(0x2c2358, 0.42)
    scene.add(amb)

    // Cool moonlight as the only shadow-casting key (keeps forms grounded)
    const moonLight = new THREE.DirectionalLight(N_MOON, 0.85)
    moonLight.position.set(-26, 22, 12)
    moonLight.castShadow = true
    moonLight.shadow.mapSize.set(1024, 1024)
    moonLight.shadow.camera.near = 1
    moonLight.shadow.camera.far = 90
    moonLight.shadow.camera.left = -22
    moonLight.shadow.camera.right = 22
    moonLight.shadow.camera.top = 22
    moonLight.shadow.camera.bottom = -22
    moonLight.shadow.bias = -0.0012
    moonLight.shadow.normalBias = 0.03
    scene.add(moonLight)
    scene.add(moonLight.target)

    // ── Soft brand rim from the shadow side (magenta edge, cyan bounce) ──
    const magRim = new THREE.DirectionalLight(C_MAGENTA, 0.26)
    magRim.position.set(-8, 5, -12)
    scene.add(magRim)

    const cyanBounce = new THREE.DirectionalLight(C_CYAN, 0.16)
    cyanBounce.position.set(6, -2, 10)
    scene.add(cyanBounce)

    // ── Night Sky Dome ──
    const skyGeo = new THREE.SphereGeometry(160, 32, 20)
    const MOON_DIR = new THREE.Vector3(-26, 22, -70).normalize()
    const skyUniforms = {
      uTop: { value: new THREE.Color(N_SKY_TOP) },
      uMid: { value: new THREE.Color(N_SKY_MID) },
      uLow: { value: new THREE.Color(N_SKY_LOW) },
      uMoonDir: { value: MOON_DIR },
    }
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: skyUniforms,
      vertexShader: `
        varying vec3 vPos;
        void main() {
          vPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uTop;
        uniform vec3 uMid;
        uniform vec3 uLow;
        uniform vec3 uMoonDir;
        varying vec3 vPos;
        void main() {
          vec3 dir = normalize(vPos);
          float h = dir.y;
          vec3 col = mix(uLow, uMid, smoothstep(-0.05, 0.34, h));
          col = mix(col, uTop, smoothstep(0.22, 0.80, h));

          // Cool halo around the moon, softly scattering through the haze
          float md = max(dot(dir, uMoonDir), 0.0);
          col += vec3(0.34, 0.40, 0.62) * pow(md, 8.0) * 0.10;
          col += vec3(0.70, 0.76, 0.92) * pow(md, 110.0) * 0.35;

          // Very faint violet airglow hugging the horizon
          col += vec3(0.20, 0.06, 0.26) * pow(1.0 - abs(h), 16.0) * 0.18;

          // Ground haze so the dome meets the horizon softly
          col = mix(vec3(0.04, 0.03, 0.07), col, smoothstep(-0.30, 0.02, h));

          gl_FragColor = vec4(col, 1.0);
        }
      `,
    })
    scene.add(new THREE.Mesh(skyGeo, skyMat))

    // ── Post-processing: subtle bloom for neon, moon and window glow ──
    const composer = new EffectComposer(renderer)
    composer.addPass(new RenderPass(scene, camera))
    const bloom = new UnrealBloomPass(
      new THREE.Vector2(mount.clientWidth, mount.clientHeight),
      0.42, // strength
      0.8,  // radius
      0.62  // threshold
    )
    composer.addPass(bloom)
    composer.addPass(new OutputPass())

    // ── Starfield ──
    const starCount = 520
    const starPos = new Float32Array(starCount * 3)
    const starCol = new Float32Array(starCount * 3)
    const tintA = new THREE.Color(C_LAVENDER)
    const tintB = new THREE.Color(0xffffff)
    const tmpCol = new THREE.Color()
    for (let i = 0; i < starCount; i++) {
      starPos[i * 3]     = (Math.random() - 0.5) * 300
      starPos[i * 3 + 1] = 10 + Math.random() * 95
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 160
      tmpCol.copy(Math.random() < 0.35 ? tintA : tintB).multiplyScalar(0.45 + Math.random() * 0.55)
      starCol[i * 3]     = tmpCol.r
      starCol[i * 3 + 1] = tmpCol.g
      starCol[i * 3 + 2] = tmpCol.b
    }
    const starGeo = new THREE.BufferGeometry()
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3))
    starGeo.setAttribute('color', new THREE.BufferAttribute(starCol, 3))
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({
      size: 0.22, vertexColors: true, transparent: true, opacity: 0.85,
      sizeAttenuation: true, depthWrite: false, fog: false,
    }))
    scene.add(stars)


    // ── PRE-BUILD ALL 8 CHUNKS ONCE (Zero runtime allocation / No garbage collection) ──
    const chunks: THREE.Group[] = []
    for (let i = 0; i < CHUNK_COUNT; i++) {
      const chunkGrp = buildStaticChunk(i * 7777 + 101)
      chunkGrp.position.x = i * CHUNK_W
      scene.add(chunkGrp)
      chunks.push(chunkGrp)
    }

    // ── Smooth Animation Loop ──
    const SPEED = 4.8
    let worldX = 0
    let raf: number
    let lastTime = performance.now()

    // Pause the render loop while the hero is off-screen so we stop
    // burning GPU on a shadow + bloom pass nobody can see.
    let visible = true
    const visibilityObserver = new IntersectionObserver(
      entries => { visible = entries[0].isIntersecting },
      { threshold: 0.05 }
    )
    visibilityObserver.observe(mount)

    const ATMO = {
      city: { fog: 0x0d0820, top: 0x05050e, mid: 0x0a0818, low: 0x20153f, ambCol: 0x281f56, ambInt: 0.5, hemiSky: 0x403688, hemiGround: 0x0f0a1c, rimMag: 0.4 },
    }

    const curFogCol = new THREE.Color(0x140d24)
    const tgtCol    = new THREE.Color()
    const bgCol     = new THREE.Color(0x181130)
    const tgtBg     = new THREE.Color()

    const animate = (now: number) => {
      raf = requestAnimationFrame(animate)

      if (!visible) {
        lastTime = now
        return
      }

      // Fixed smooth frame delta
      const deltaMs = now - lastTime
      lastTime = now
      const dt = Math.min(deltaMs / 1000, 0.033) // Cap at 30fps step to prevent huge hitch jumps

      worldX += SPEED * dt

      // ── BUTTERY SMOOTH WRAP-AROUND (Instant pointer math, 0 CPU overhead) ──
      // When a chunk is 1.5 chunks behind the camera, wrap it to the far front (+ TOTAL_WORLD_LEN)
      for (let i = 0; i < CHUNK_COUNT; i++) {
        const chunk = chunks[i]
        while (chunk.position.x < worldX - CHUNK_W * 1.5) {
          chunk.position.x += TOTAL_WORLD_LEN
        }
      }

      // ── Atmosphere (constant city mood) ──
      const atmo = ATMO.city

      curFogCol.lerp(tgtCol.set(atmo.fog), 0.02)
      ;(scene.fog as THREE.Fog).color.copy(curFogCol)
      skyUniforms.uTop.value.lerp(tgtCol.set(atmo.top), 0.02)
      skyUniforms.uMid.value.lerp(tgtCol.set(atmo.mid), 0.02)
      skyUniforms.uLow.value.lerp(tgtCol.set(atmo.low), 0.02)
      bgCol.lerp(tgtBg.set(atmo.low), 0.02)
      ;(scene.background as THREE.Color).copy(bgCol)
      amb.color.lerp(tgtCol.set(atmo.ambCol), 0.02)
      amb.intensity += (atmo.ambInt - amb.intensity) * 0.02
      hemi.color.lerp(tgtCol.set(atmo.hemiSky), 0.02)
      hemi.groundColor.lerp(tgtCol.set(atmo.hemiGround), 0.02)
      magRim.intensity += (atmo.rimMag - magRim.intensity) * 0.02

      // ── Camera tracking (camera slides forward with worldX) ──
      camera.position.x = worldX
      camera.position.y = 1.35 + Math.sin(now * 0.0006) * 0.035
      camera.lookAt(worldX + 7.8, 0.9, 0)

      // ── Shadow frustum + starfield follow the camera ──
      moonLight.position.set(worldX - 26, 22, 12)
      moonLight.target.position.set(worldX, 0, 0)
      moonLight.target.updateMatrixWorld()
      stars.position.x = worldX * 0.96

      composer.render()
    }

    raf = requestAnimationFrame(animate)

    // ── Window Resize ──
    const onResize = () => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
      composer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      visibilityObserver.disconnect()
      window.removeEventListener('resize', onResize)
      composer.dispose()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
