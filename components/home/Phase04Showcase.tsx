'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'

// ── Brand palette ─────────────────────────────────────────────────────────────
const C_CYAN     = 0x22d3ee
const C_MAGENTA  = 0xe056c1
const C_LAVENDER = 0xca8cd3
const C_NAVY     = 0x1b2a6b

const MAT = {
  steel:    new THREE.MeshStandardMaterial({ color: 0x5a5478, roughness: 0.4, metalness: 0.6 }),
  navy:     new THREE.MeshStandardMaterial({ color: C_NAVY, roughness: 0.42, metalness: 0.45 }),
  darkDeck: new THREE.MeshStandardMaterial({ color: 0x0d0b1c, roughness: 0.3, metalness: 0.5 }),
  chrome:   new THREE.MeshStandardMaterial({ color: 0x8f8ab0, roughness: 0.16, metalness: 0.9 }),
  glass:    new THREE.MeshStandardMaterial({ color: 0x1a2c4c, roughness: 0.08, metalness: 0.75 }),
  cyan:     new THREE.MeshBasicMaterial({ color: C_CYAN }),
  magenta:  new THREE.MeshBasicMaterial({ color: C_MAGENTA }),
  lavender: new THREE.MeshBasicMaterial({ color: C_LAVENDER }),
  white:    new THREE.MeshBasicMaterial({ color: 0xf2f4ff }),
  silhouette: new THREE.MeshStandardMaterial({ color: 0x15122a, roughness: 0.7, metalness: 0.2 }),
}

const GEO = {
  box:    new THREE.BoxGeometry(1, 1, 1),
  cyl:    new THREE.CylinderGeometry(1, 1, 1, 24),
  cone:   new THREE.ConeGeometry(1, 1, 20),
  sphere: new THREE.SphereGeometry(1, 18, 14),
  plane:  new THREE.PlaneGeometry(1, 1),
  torus:  new THREE.TorusGeometry(1, 0.06, 8, 44),
}

// ── Figures: abstract silhouettes for the panel and the presenting team ───────
// A capsule torso with a sphere head reads as a person at silhouette scale.
function mkFigure(mat: THREE.Material, h = 1.75): THREE.Group {
  const g = new THREE.Group()
  const torso = new THREE.Mesh(GEO.cyl, mat)
  torso.scale.set(0.2, h * 0.52, 0.16)
  torso.position.y = h * 0.58
  g.add(torso)

  const head = new THREE.Mesh(GEO.sphere, mat)
  head.scale.setScalar(h * 0.115)
  head.position.y = h * 0.92
  g.add(head)

  return g
}

// ── Holographic screen: framed panel with animated UI blocks ──────────────────
function mkHoloScreen(): { group: THREE.Group; bits: THREE.Object3D[] } {
  const group = new THREE.Group()
  const bits: THREE.Object3D[] = []

  const frame = new THREE.Mesh(GEO.box, MAT.steel)
  frame.scale.set(9.4, 5.4, 0.16)
  group.add(frame)

  const screen = new THREE.Mesh(GEO.plane, MAT.glass)
  screen.scale.set(8.9, 4.9, 1)
  screen.position.z = 0.1
  group.add(screen)

  // Title bar across the top of the display
  const titleBar = new THREE.Mesh(GEO.plane, MAT.cyan)
  titleBar.scale.set(4.6, 0.22, 1)
  titleBar.position.set(-1.8, 1.9, 0.14)
  group.add(titleBar)
  bits.push(titleBar)

  // Architecture diagram: connected nodes on the left of the screen
  const nodePos = [
    [-3.2, 0.9], [-3.2, -0.5], [-1.5, 1.2], [-1.5, -0.2], [0.2, 0.4], [-1.5, -1.4],
  ]
  for (let i = 0; i < nodePos.length - 1; i++) {
    const [ax, ay] = nodePos[i]
    const [bx, by] = nodePos[i + 1]
    const len = Math.hypot(bx - ax, by - ay)
    const link = new THREE.Mesh(GEO.plane, i % 2 ? MAT.lavender : MAT.cyan)
    link.scale.set(len, 0.06, 1)
    link.position.set((ax + bx) / 2, (ay + by) / 2, 0.14)
    link.rotation.z = Math.atan2(by - ay, bx - ax)
    group.add(link)
    bits.push(link)
  }

  nodePos.forEach(([x, y], i) => {
    const node = new THREE.Mesh(GEO.box, i % 3 === 0 ? MAT.magenta : MAT.cyan)
    node.scale.set(0.42, 0.42, 0.06)
    node.position.set(x, y, 0.16)
    group.add(node)
    bits.push(node)
  })

  // Data bars stepping up on the right
  for (let i = 0; i < 5; i++) {
    const hBar = 0.5 + i * 0.42
    const bar = new THREE.Mesh(GEO.plane, i === 4 ? MAT.magenta : MAT.cyan)
    bar.scale.set(0.44, hBar, 1)
    bar.position.set(1.6 + i * 0.58, -1.6 + hBar / 2, 0.14)
    group.add(bar)
    bits.push(bar)
  }

  // Glowing edge trim around the display
  const rim = new THREE.Mesh(GEO.torus, MAT.lavender)
  rim.scale.set(4.9, 2.7, 1)
  rim.position.z = 0.18
  group.add(rim)
  bits.push(rim)

  // Remember each element's resting depth so the flicker only shifts it slightly
  bits.forEach(bit => { bit.userData.baseZ = bit.position.z })

  return { group, bits }
}

// ── Trophy: layered cup on a plinth, rises during the award beat ──────────────
function mkTrophy(): THREE.Group {
  const g = new THREE.Group()

  const plinth = new THREE.Mesh(GEO.box, MAT.navy)
  plinth.scale.set(2.4, 0.5, 2.4)
  plinth.position.y = 0.25
  g.add(plinth)

  const plinthTop = new THREE.Mesh(GEO.box, MAT.chrome)
  plinthTop.scale.set(1.9, 0.16, 1.9)
  plinthTop.position.y = 0.58
  g.add(plinthTop)

  const stem = new THREE.Mesh(GEO.cyl, MAT.chrome)
  stem.scale.set(0.18, 0.7, 0.18)
  stem.position.y = 1.0
  g.add(stem)

  const cup = new THREE.Mesh(GEO.cyl, MAT.chrome)
  cup.scale.set(0.78, 1.15, 0.78)
  cup.position.y = 1.95
  g.add(cup)

  const cupRim = new THREE.Mesh(GEO.torus, MAT.lavender)
  cupRim.rotation.x = Math.PI / 2
  cupRim.scale.setScalar(0.82)
  cupRim.position.y = 2.5
  g.add(cupRim)

  const cupGlow = new THREE.Mesh(GEO.torus, MAT.cyan)
  cupGlow.rotation.x = Math.PI / 2
  cupGlow.scale.setScalar(0.62)
  cupGlow.position.y = 1.1
  g.add(cupGlow)

  for (const side of [-1, 1]) {
    const handle = new THREE.Mesh(GEO.torus, MAT.chrome)
    handle.scale.setScalar(0.42)
    handle.position.set(side * 0.82, 2.0, 0)
    g.add(handle)
  }

  // Recognition medallions floating around the cup
  for (let i = 0; i < 3; i++) {
    const angle = (i / 3) * Math.PI * 2
    const medal = new THREE.Mesh(GEO.torus, i === 1 ? MAT.magenta : MAT.lavender)
    medal.scale.setScalar(0.34)
    medal.position.set(Math.cos(angle) * 2.1, 2.1 + i * 0.4, Math.sin(angle) * 2.1)
    g.add(medal)
  }

  return g
}



// ── Spotlights: cones that sweep across the stage ─────────────────────────────
function mkSpotlight(mat: THREE.Material): THREE.Group {
  const g = new THREE.Group()
  const cone = new THREE.Mesh(GEO.cone, mat)
  cone.scale.set(1.5, 9, 1.5)
  g.add(cone)

  const head = new THREE.Mesh(GEO.cyl, MAT.steel)
  head.scale.set(0.3, 0.5, 0.3)
  head.position.y = 4.6
  g.add(head)
  return g
}

export default function Phase04Showcase() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const width = mount.clientWidth || 1
    const height = mount.clientHeight || 1

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
    renderer.setSize(width, height)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.05

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x070614, 0.018)

    // Everything lives inside this group so the whole set can be pushed to the
    // left half of the viewport, clear of the right-hand copy column.
    const world = new THREE.Group()
    world.position.x = -9
    scene.add(world)

    const camera = new THREE.PerspectiveCamera(46, width / height, 0.1, 400)
    camera.position.set(-9, 5.4, 24)

    // ── Lights ───────────────────────────────────────────────────────────────
    world.add(new THREE.AmbientLight(0x3a2f78, 0.55))

    const key = new THREE.DirectionalLight(0xbfd0ff, 1.05)
    key.position.set(-8, 16, 12)
    world.add(key)

    const magentaRim = new THREE.PointLight(C_MAGENTA, 42, 60, 2)
    magentaRim.position.set(11, 5, -6)
    world.add(magentaRim)

    const cyanRim = new THREE.PointLight(C_CYAN, 40, 60, 2)
    cyanRim.position.set(-11, 6, -4)
    world.add(cyanRim)

    const trophyLight = new THREE.PointLight(C_LAVENDER, 0, 40, 2)
    trophyLight.position.set(0, 6, 2)
    world.add(trophyLight)

    // ── Floor ────────────────────────────────────────────────────────────────
    const floor = new THREE.Mesh(GEO.plane, MAT.darkDeck)
    floor.rotation.x = -Math.PI / 2
    floor.scale.set(120, 120, 1)
    world.add(floor)

    // Reflective stage riser
    const riser = new THREE.Mesh(GEO.box, MAT.navy)
    riser.scale.set(26, 0.9, 13)
    riser.position.set(0, 0.45, -2)
    world.add(riser)

    const riserTrim = new THREE.Mesh(GEO.box, MAT.cyan)
    riserTrim.scale.set(26.2, 0.1, 13.2)
    riserTrim.position.set(0, 0.94, -2)
    world.add(riserTrim)

    // ── Presentation stage ───────────────────────────────────────────────────
    const stage = new THREE.Group()
    world.add(stage)

    const { group: screenGroup, bits: screenBits } = mkHoloScreen()
    screenGroup.position.set(0, 5.4, -8.5)
    stage.add(screenGroup)

    // Presenting team on stage, in front of the display
    const presenters: THREE.Group[] = []
    for (let i = 0; i < 4; i++) {
      const fig = mkFigure(MAT.silhouette)
      fig.position.set((i - 1.5) * 1.5, 0.9, -6.2)
      fig.scale.setScalar(1.05)
      stage.add(fig)
      presenters.push(fig)
    }

    const lectern = new THREE.Mesh(GEO.box, MAT.steel)
    lectern.scale.set(1.1, 1.15, 0.6)
    lectern.position.set(-2.25, 1.48, -5.7)
    stage.add(lectern)

    const lecternGlow = new THREE.Mesh(GEO.plane, MAT.cyan)
    lecternGlow.scale.set(0.95, 0.05, 1)
    lecternGlow.position.set(-2.25, 2.08, -5.38)
    lecternGlow.rotation.x = -0.5
    stage.add(lecternGlow)

    // ── Judge panel in front, facing the stage ────────────────────────────────
    const panel: THREE.Group[] = []
    for (let i = 0; i < 5; i++) {
      const fig = mkFigure(MAT.silhouette, 1.8)
      fig.position.set((i - 2) * 2.3, 0, 5.2 + (i % 2) * 0.4)
      fig.rotation.y = Math.PI
      fig.scale.setScalar(1.12)
      world.add(fig)
      panel.push(fig)
    }

    const panelDesk = new THREE.Mesh(GEO.box, MAT.navy)
    panelDesk.scale.set(13, 0.85, 1.1)
    panelDesk.position.set(0, 0.42, 4.4)
    world.add(panelDesk)

    const deskTrim = new THREE.Mesh(GEO.box, MAT.lavender)
    deskTrim.scale.set(13.1, 0.06, 1.2)
    deskTrim.position.set(0, 0.87, 4.4)
    world.add(deskTrim)

    // Nameplates on the desk
    for (let i = 0; i < 5; i++) {
      const plate = new THREE.Mesh(GEO.box, MAT.chrome)
      plate.scale.set(0.7, 0.22, 0.08)
      plate.position.set((i - 2) * 2.3, 0.95, 3.92)
      world.add(plate)
    }

    // ── Journey pathway converging behind the stage ──────────────────────────
    const pathway = new THREE.Group()
    pathway.position.set(0, 0, -18)
    world.add(pathway)

    for (let lane = -2; lane <= 2; lane++) {
      if (lane === 0) continue
      const rail = new THREE.Mesh(GEO.plane, lane < 0 ? MAT.cyan : MAT.magenta)
      rail.rotation.x = -Math.PI / 2
      rail.scale.set(0.16, 46, 1)
      rail.position.set(lane * 3.2, 0.06, 0)
      pathway.add(rail)
    }

    // Glowing markers for the earlier phases, funnelling toward the stage
    for (let m = 0; m < 3; m++) {
      const marker = new THREE.Mesh(GEO.torus, m === 1 ? MAT.magenta : MAT.cyan)
      marker.rotation.x = Math.PI / 2
      marker.scale.setScalar(1.1)
      marker.position.set(0, 1.2 + m * 0.4, -8 - m * 9)
      pathway.add(marker)
    }

    // ── Award podium and trophy ──────────────────────────────────────────────
    const awardGroup = new THREE.Group()
    awardGroup.position.set(0, 0.95, -2.5)
    awardGroup.scale.setScalar(0.001)
    world.add(awardGroup)

    const trophy = mkTrophy()
    awardGroup.add(trophy)

    // Rising particles for the recognition beat
    const PARTICLE_COUNT = 260
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    const speeds = new Float32Array(PARTICLE_COUNT)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const r = 2 + Math.random() * 12
      const a = Math.random() * Math.PI * 2
      pos[i * 3] = Math.cos(a) * r
      pos[i * 3 + 1] = Math.random() * 14
      pos[i * 3 + 2] = Math.sin(a) * r - 2
      speeds[i] = 0.6 + Math.random() * 1.9
    }
    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const particles = new THREE.Points(particleGeo, new THREE.PointsMaterial({
      color: C_LAVENDER, size: 0.16, transparent: true, opacity: 0.85,
      depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    }))
    world.add(particles)

    // ── Laser pointer: the lead presenter aims at the display ────────────────
    const laser = new THREE.Mesh(GEO.cyl, MAT.cyan)
    laser.scale.set(0.022, 12, 0.022)
    laser.visible = false
    world.add(laser)

    // ── Celebration rings that fire outward on the award beat ───────────────
    const rings: THREE.Mesh[] = []
    for (let i = 0; i < 3; i++) {
      // Own material per ring so fading one never touches the shared brand neon
      const ringMat = new THREE.MeshBasicMaterial({
        color: i === 1 ? C_MAGENTA : C_CYAN,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
      const ring = new THREE.Mesh(GEO.torus, ringMat)
      ring.rotation.x = Math.PI / 2
      ring.scale.setScalar(0.001)
      ring.position.set(0, 1.4, -2.5)
      world.add(ring)
      rings.push(ring)
    }

    // ── Confetti: rectangular shards that tumble through the ceremony ───────
    const CONFETTI = 180
    const confGeo = new THREE.PlaneGeometry(0.16, 0.34)
    const confMat = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide, transparent: true, opacity: 0,
    })
    const confetti: THREE.Mesh[] = []
    const confData: { vy: number; vx: number; vz: number; spin: number; rx: number; rz: number }[] = []
    for (let i = 0; i < CONFETTI; i++) {
      const shard = new THREE.Mesh(confGeo, i % 3 === 0 ? MAT.magenta : i % 3 === 1 ? MAT.cyan : MAT.lavender)
      const a = Math.random() * Math.PI * 2
      const r = 1 + Math.random() * 9
      shard.position.set(Math.cos(a) * r, 0.2, Math.sin(a) * r - 2)
      world.add(shard)
      confetti.push(shard)
      confData.push({
        vy: 4.5 + Math.random() * 5,
        vx: (Math.random() - 0.5) * 1.6,
        vz: (Math.random() - 0.5) * 1.6,
        spin: 1.6 + Math.random() * 3.4,
        rx: Math.random() * Math.PI,
        rz: Math.random() * Math.PI,
      })
    }

    // ── Sweeping spotlights ───────────────────────────────────────────────────
    const spots = [mkSpotlight(MAT.cyan), mkSpotlight(MAT.magenta), mkSpotlight(MAT.lavender)]
    spots[0].position.set(-13, 0.5, -4)
    spots[1].position.set(13, 0.5, -4)
    spots[2].position.set(0, 0.5, -13)
    spots.forEach(s => world.add(s))

    // ── Large glowing "04" ───────────────────────────────────────────────────
    const digits = '04'.split('')
    digits.forEach((ch, i) => {
      const barH = ch === '0' ? 5.2 : 4.4
      const digit = new THREE.Group()

      const thick = 0.85
      const stroke = (w: number, h: number, x: number, y: number) => {
        const seg = new THREE.Mesh(GEO.box, i === 0 ? MAT.cyan : MAT.magenta)
        seg.scale.set(w, h, thick)
        seg.position.set(x, y, 0)
        digit.add(seg)
        return seg
      }

      // Both digits share the same seven-segment skeleton for consistency
      const W = 3.0
      const H = barH
      stroke(thick, H, -W / 2 + thick / 2, 0)                  // left vertical
      stroke(thick, H, W / 2 - thick / 2, 0)                   // right vertical
      stroke(W - thick, thick, 0, H / 2 - thick / 2)            // top
      stroke(W - thick, thick, 0, -H / 2 + thick / 2)           // bottom

      if (ch === '0') {
        stroke(W - thick, thick, 0, 0)                          // middle bar → 0 becomes 8-ish
      } else {
        digit.children[digit.children.length - 1].visible = false
        stroke(W - thick, thick, 0, H / 2 - thick / 2)          // top
      }

      digit.position.set(i === 0 ? -5.6 : 4.4, 7.5, -24)
      world.add(digit)
    })

    const halo = new THREE.Mesh(GEO.torus, MAT.lavender)
    halo.scale.set(9, 9, 1)
    halo.position.set(0, 7.5, -24.5)
    world.add(halo)

    // ── Post-processing ──────────────────────────────────────────────────────
    const composer = new EffectComposer(renderer)
    composer.addPass(new RenderPass(scene, camera))
    const bloom = new UnrealBloomPass(new THREE.Vector2(width, height), 0.85, 0.55, 0.28)
    composer.addPass(bloom)
    composer.addPass(new OutputPass())

    // ── Animation: SOLUTION → PITCH → EVALUATION → RECOGNITION ──────────────
    const CYCLE = 22
    let t = 0
    let raf: number
    let lastTime = performance.now()

    // This scene sits far below the fold — only render while it is on-screen
    // so it doesn't compete with the hero for the GPU on every visit.
    let visible = true
    const visibilityObserver = new IntersectionObserver(
      entries => { visible = entries[0].isIntersecting },
      { threshold: 0.05 }
    )
    visibilityObserver.observe(mount)

    const animate = (now: number) => {
      raf = requestAnimationFrame(animate)

      if (!visible) {
        lastTime = now
        return
      }

      const deltaMs = now - lastTime
      lastTime = now
      const dt = Math.min(deltaMs / 1000, 0.05)

      t += dt
      const phase = (t % CYCLE) / CYCLE          // 0 → 1 across the whole transformation
      const award = THREE.MathUtils.smoothstep(phase, 0.5, 0.78)

      // Camera stays on the right-hand set and pushes in as the award lands
      const orbit = phase * Math.PI * 2
      camera.position.x = -9 + Math.sin(orbit) * 6
      camera.position.y = 5.4 + Math.sin(phase * Math.PI * 2) * 1.1
      camera.position.z = 24 - award * 6
      camera.lookAt(-9, 5.0, -6)

      // The pitch set recedes as the ceremony takes the stage
      stage.visible = award < 0.9
      panelDesk.visible = award < 0.92
      screenGroup.scale.setScalar(1 - award * 0.12)

      // Laser pointer tracks between display elements while pitching
      const pitching = phase < 0.45
      laser.visible = pitching
      if (pitching) {
        const idx = Math.floor((t * 0.55) % screenBits.length)
        const target = screenBits[idx].position
        const from = presenters[1].position
        laser.position.set(
          (from.x + target.x) / 2,
          from.y + 1.5 + (target.y - from.y) / 2,
          (from.z + target.z) / 2 + 0.2
        )
        const len = Math.hypot(target.x - from.x, target.y - from.y - 1.5, target.z - from.z)
        laser.scale.set(0.022, len, 0.022)
        laser.lookAt(target)
        laser.rotateX(Math.PI / 2)
      }

      // Holographic UI flickers in place, each element keeping its own dimensions
      screenBits.forEach((bit, i) => {
        const pulse = 0.82 + Math.abs(Math.sin(t * 1.6 + i * 0.55)) * 0.4
        bit.scale.z = pulse
        bit.position.z = (bit.userData.baseZ ?? 0.14) + (pulse - 1) * 0.12
      })

      // Presenters shift weight while presenting
      presenters.forEach((fig, i) => {
        fig.position.y = 0.9 + Math.sin(t * 1.3 + i * 1.1) * 0.045
      })

      // Panel leans forward slightly during the evaluation beat
      const evaluate = THREE.MathUtils.smoothstep(phase, 0.3, 0.5)
      panel.forEach((fig, i) => {
        fig.rotation.x = -0.06 * evaluate + Math.sin(t * 1.1 + i) * 0.015
      })

      // Trophy scales up out of the stage during recognition
      awardGroup.scale.setScalar(Math.max(0.001, award))
      awardGroup.position.y = 0.95 + (1 - award) * -3.2
      trophyLight.intensity = award * 70

      trophy.rotation.y += dt * 0.7

      // Celebration rings fire outward from the podium
      rings.forEach((ring, i) => {
        const start = 0.52 + i * 0.06
        const local = THREE.MathUtils.clamp((phase - start) / 0.2, 0, 1)
        ring.scale.setScalar(0.001 + local * (5 + i * 2.5))
        ring.position.y = 1.4 + local * 2.6
        // Fade in fast, then dissipate as the ring expands past the camera
        ;(ring.material as THREE.MeshBasicMaterial).opacity = Math.sin(local * Math.PI) * 0.9
      })

      // Confetti falls during the ceremony
      confMat.opacity = award
      if (award > 0.01) {
        confetti.forEach((shard, i) => {
          const d = confData[i]
          shard.position.y += d.vy * dt
          shard.position.x += d.vx * dt
          shard.position.z += d.vz * dt
          shard.rotation.x += d.rx * d.spin * dt
          shard.rotation.z += d.rz * d.spin * dt
          if (shard.position.y > 17) {
            shard.position.y = 16
            shard.position.x = (Math.random() - 0.5) * 18
            shard.position.z = (Math.random() - 0.5) * 14 - 2
          }
        })
      }

      // Particles rise faster as the award lands
      const pPos = particleGeo.attributes.position.array as Float32Array
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        pPos[i * 3 + 1] += speeds[i] * dt * (0.35 + award * 1.5)
        if (pPos[i * 3 + 1] > 15) pPos[i * 3 + 1] = 0
      }
      particleGeo.attributes.position.needsUpdate = true
      ;(particles.material as THREE.PointsMaterial).opacity = 0.35 + award * 0.55

      // Spotlights sweep during the pitch, then converge on the trophy
      spots.forEach((s, i) => {
        const sweep = Math.sin(t * (0.5 + i * 0.18) + i * 2.1) * 0.42
        s.rotation.z = sweep * (1 - award) + (i - 1) * award * 0.34
        s.rotation.x = Math.sin(t * 0.36 + i) * 0.16 * (1 - award)
      })

      magentaRim.intensity = 34 + Math.sin(t * 0.9) * 10
      cyanRim.intensity = 32 + Math.sin(t * 1.2 + 1.5) * 10
      halo.rotation.z += dt * 0.25

      composer.render()
    }

    raf = requestAnimationFrame(animate)

    const onResize = () => {
      if (!mountRef.current) return
      const w = mountRef.current.clientWidth || 1
      const h = mountRef.current.clientHeight || 1
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
      composer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      visibilityObserver.disconnect()
      window.removeEventListener('resize', onResize)
      confGeo.dispose()
      confMat.dispose()
      rings.forEach(r => (r.material as THREE.Material).dispose())
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