'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// ── Brand palette ─────────────────────────────────────────────────────────────
const C_CYAN     = 0x22d3ee
const C_MAGENTA  = 0xe056c1
const C_LAVENDER = 0xca8cd3

const MAT = {
  gold:      new THREE.MeshStandardMaterial({ color: 0xd8b26a, roughness: 0.22, metalness: 0.92 }),
  goldDark:  new THREE.MeshStandardMaterial({ color: 0x8c6c33, roughness: 0.3, metalness: 0.88 }),
  podium:    new THREE.MeshStandardMaterial({ color: 0x1b2a6b, roughness: 0.35, metalness: 0.5 }),
  base:      new THREE.MeshStandardMaterial({ color: 0x0d0b1c, roughness: 0.28, metalness: 0.6 }),
  silhouette:new THREE.MeshStandardMaterial({ color: 0x15122a, roughness: 0.7, metalness: 0.2 }),
  cyan:      new THREE.MeshBasicMaterial({ color: C_CYAN }),
  magenta:   new THREE.MeshBasicMaterial({ color: C_MAGENTA }),
  lavender:  new THREE.MeshBasicMaterial({ color: C_LAVENDER }),
}

const GEO = {
  box:    new THREE.BoxGeometry(1, 1, 1),
  cyl:    new THREE.CylinderGeometry(1, 1, 1, 28),
  cone:   new THREE.ConeGeometry(1, 1, 22),
  sphere: new THREE.SphereGeometry(1, 16, 12),
  plane:  new THREE.PlaneGeometry(1, 1),
  torus:  new THREE.TorusGeometry(1, 0.055, 8, 40),
}

// ── Abstract figure: capsule torso plus sphere head ──────────────────────────
function mkFigure(mat: THREE.Material, h = 1.6): THREE.Group {
  const g = new THREE.Group()
  const torso = new THREE.Mesh(GEO.cyl, mat)
  torso.scale.set(0.18, h * 0.52, 0.15)
  torso.position.y = h * 0.58
  g.add(torso)

  const head = new THREE.Mesh(GEO.sphere, mat)
  head.scale.setScalar(h * 0.11)
  head.position.y = h * 0.92
  g.add(head)
  return g
}

// ── Trophy: layered cup with handles and a glowing rim ───────────────────────
function mkTrophy(): THREE.Group {
  const g = new THREE.Group()

  const foot = new THREE.Mesh(GEO.cyl, MAT.goldDark)
  foot.scale.set(0.42, 0.14, 0.42)
  foot.position.y = 0.07
  g.add(foot)

  const stem = new THREE.Mesh(GEO.cyl, MAT.gold)
  stem.scale.set(0.11, 0.5, 0.11)
  stem.position.y = 0.38
  g.add(stem)

  const cup = new THREE.Mesh(GEO.cyl, MAT.gold)
  cup.scale.set(0.5, 0.72, 0.5)
  cup.position.y = 1.0
  g.add(cup)

  const bowl = new THREE.Mesh(GEO.sphere, MAT.gold)
  bowl.scale.set(0.5, 0.3, 0.5)
  bowl.position.y = 0.66
  g.add(bowl)

  const rim = new THREE.Mesh(GEO.torus, MAT.lavender)
  rim.rotation.x = Math.PI / 2
  rim.scale.setScalar(0.52)
  rim.position.y = 1.35
  g.add(rim)

  const glowRing = new THREE.Mesh(GEO.torus, MAT.cyan)
  glowRing.rotation.x = Math.PI / 2
  glowRing.scale.setScalar(0.36)
  glowRing.position.y = 0.85
  g.add(glowRing)

  for (const side of [-1, 1]) {
    const handle = new THREE.Mesh(GEO.torus, MAT.gold)
    handle.scale.setScalar(0.3)
    handle.position.set(side * 0.52, 1.05, 0)
    g.add(handle)
  }

  const star = new THREE.Mesh(GEO.cone, MAT.gold)
  star.scale.set(0.16, 0.34, 0.16)
  star.position.y = 1.58
  g.add(star)

  return g
}

// ── Small looping award ceremony ─────────────────────────────────────────────
// Rises onto the podium, spotlights converge, medals orbit, confetti fires on
// the beat, then the whole thing resets and repeats.
const CYCLE = 12

export default function Phase04Award() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const width = mount.clientWidth || 1
    const height = mount.clientHeight || 1

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(width, height)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.1

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 120)
    camera.position.set(0, 2.4, 9.2)
    camera.lookAt(0, 1.5, 0)

    scene.add(new THREE.AmbientLight(0x3a2f78, 0.7))

    const key = new THREE.DirectionalLight(0xffe9c4, 1.35)
    key.position.set(4, 9, 6)
    scene.add(key)

    const awardLight = new THREE.PointLight(C_LAVENDER, 26, 22, 2)
    awardLight.position.set(0, 3.4, 1.6)
    scene.add(awardLight)

    const cyanLight = new THREE.PointLight(C_CYAN, 16, 20, 2)
    cyanLight.position.set(-4.5, 2.2, 2)
    scene.add(cyanLight)

    const magentaLight = new THREE.PointLight(C_MAGENTA, 16, 20, 2)
    magentaLight.position.set(4.5, 2.2, 2)
    scene.add(magentaLight)

    // ── Floor and podium ─────────────────────────────────────────────────────
    const floor = new THREE.Mesh(GEO.plane, MAT.base)
    floor.rotation.x = -Math.PI / 2
    floor.scale.set(60, 60, 1)
    scene.add(floor)

    const podium = new THREE.Group()
    scene.add(podium)

    const step1 = new THREE.Mesh(GEO.cyl, MAT.base)
    step1.scale.set(2.5, 0.22, 2.5)
    step1.position.y = 0.11
    podium.add(step1)

    const step2 = new THREE.Mesh(GEO.cyl, MAT.podium)
    step2.scale.set(1.95, 0.22, 1.95)
    step2.position.y = 0.33
    podium.add(step2)

    const step3 = new THREE.Mesh(GEO.cyl, MAT.base)
    step3.scale.set(1.45, 0.22, 1.45)
    step3.position.y = 0.55
    podium.add(step3)

    // Brand light rings around each podium tier
    const tierRings: THREE.Mesh[] = []
    for (const [r, y] of [[2.52, 0.24], [1.97, 0.46], [1.47, 0.68]] as const) {
      const mat = new THREE.MeshBasicMaterial({
        color: C_CYAN, transparent: true, opacity: 0.9,
        blending: THREE.AdditiveBlending, depthWrite: false,
      })
      const ring = new THREE.Mesh(GEO.torus, mat)
      ring.rotation.x = Math.PI / 2
      ring.scale.setScalar(r)
      ring.position.y = y
      podium.add(ring)
      tierRings.push(ring)
    }

    // ── Trophy rising onto the podium ─────────────────────────────────────────
    const trophyRig = new THREE.Group()
    trophyRig.position.y = 0.7
    scene.add(trophyRig)

    const trophy = mkTrophy()
    trophyRig.add(trophy)

    // ── Two figures flanking the podium ───────────────────────────────────────
    const leftFig = mkFigure(MAT.silhouette)
    leftFig.position.set(-2.9, 0, 1.1)
    leftFig.rotation.y = 0.5
    scene.add(leftFig)

    const rightFig = mkFigure(MAT.silhouette, 1.68)
    rightFig.position.set(2.9, 0, 1.0)
    rightFig.rotation.y = -0.5
    scene.add(rightFig)

    // ── Orbiting recognition medals ───────────────────────────────────────────
    const medals: THREE.Group[] = []
    for (let i = 0; i < 3; i++) {
      const medal = new THREE.Group()
      const disc = new THREE.Mesh(GEO.cyl, MAT.gold)
      disc.scale.set(0.28, 0.05, 0.28)
      medal.add(disc)

      const edge = new THREE.Mesh(GEO.torus, i === 1 ? MAT.magenta : MAT.cyan)
      edge.rotation.x = Math.PI / 2
      edge.scale.setScalar(0.3)
      medal.add(edge)

      const ribbon = new THREE.Mesh(GEO.plane, i === 1 ? MAT.magenta : MAT.lavender)
      ribbon.scale.set(0.16, 0.5, 1)
      ribbon.position.y = 0.36
      medal.add(ribbon)

      scene.add(medal)
      medals.push(medal)
    }

    // ── Converging spotlights ─────────────────────────────────────────────────
    const spots: THREE.Mesh[] = []
    for (let i = 0; i < 3; i++) {
      const cone = new THREE.Mesh(GEO.cone, i === 1 ? MAT.magenta : i === 2 ? MAT.lavender : MAT.cyan)
      cone.scale.set(0.95, 7, 0.95)
      cone.position.set((i - 1) * 5.5, 4.2, -1.2)
      cone.rotation.z = (i - 1) * -0.22
      cone.rotation.x = 0.1
      scene.add(cone)
      spots.push(cone)
    }

    // ── Confetti ──────────────────────────────────────────────────────────────
    const CONFETTI = 110
    const confGeo = new THREE.PlaneGeometry(0.13, 0.28)
    const confMat = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide, transparent: true, opacity: 0,
    })
    const confetti: THREE.Mesh[] = []
    const confData: { vy: number; vx: number; vz: number; spin: number; rx: number; rz: number }[] = []
    for (let i = 0; i < CONFETTI; i++) {
      const shard = new THREE.Mesh(confGeo, i % 3 === 0 ? MAT.magenta : i % 3 === 1 ? MAT.cyan : MAT.lavender)
      const a = Math.random() * Math.PI * 2
      const r = 0.6 + Math.random() * 3.6
      shard.position.set(Math.cos(a) * r, 0.4, Math.sin(a) * r)
      shard.visible = false
      scene.add(shard)
      confetti.push(shard)
      confData.push({
        vy: 3.4 + Math.random() * 4.2,
        vx: (Math.random() - 0.5) * 1.4,
        vz: (Math.random() - 0.5) * 1.4,
        spin: 1.5 + Math.random() * 3,
        rx: Math.random() * Math.PI,
        rz: Math.random() * Math.PI,
      })
    }

    // ── Loop ──────────────────────────────────────────────────────────────────
    let t = 0
    let raf: number
    let lastTime = performance.now()
    let confettiLive = false
    let visible = true

    // Stop rendering when the section scrolls away: this scene shares the page
    // with the much heavier Phase04Showcase renderer.
    const observer = new IntersectionObserver(
      entries => { visible = entries[0].isIntersecting },
      { threshold: 0.05 }
    )
    observer.observe(mount)

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
      const phase = (t % CYCLE) / CYCLE

      // Beat ramps: rise, hold, then fade back before the loop restarts
      const rise = THREE.MathUtils.smoothstep(phase, 0.02, 0.28)
      const fall = 1 - THREE.MathUtils.smoothstep(phase, 0.86, 1)

      // Trophy rises onto the podium and bobs once it lands
      trophyRig.position.y = 0.7 + rise * 0.9 - (1 - rise) * 2.2
      trophyRig.scale.setScalar(Math.max(0.001, rise * fall))
      trophyRig.rotation.y += dt * 0.55
      trophy.position.y = Math.sin(t * 1.5) * 0.05 * rise

      // Trophy glow brightens as it settles
      awardLight.intensity = rise * (24 + Math.sin(t * 3) * 5)

      // Podium rings pulse outward
      tierRings.forEach((ring, i) => {
        const pulse = 1 + Math.sin(t * 2 - i * 0.7) * 0.04
        ring.scale.setScalar(pulse)
        ;(ring.material as THREE.MeshBasicMaterial).opacity = rise * (0.55 + Math.sin(t * 2 - i * 0.7) * 0.3)
      })

      // Figures react: slight lift and turn during the reveal
      const cheer = rise * fall
      leftFig.position.y = cheer * (0.16 + Math.abs(Math.sin(t * 2.2)) * 0.07)
      rightFig.position.y = cheer * (0.16 + Math.abs(Math.sin(t * 2.2 + 1.4)) * 0.07)
      leftFig.rotation.y = 0.5 - cheer * 0.2
      rightFig.rotation.y = -0.5 + cheer * 0.2

      // Medals orbit the trophy
      medals.forEach((medal, i) => {
        const a = t * 0.9 + (i / 3) * Math.PI * 2
        const orbit = 1.9 + i * 0.28
        medal.position.set(
          Math.cos(a) * orbit,
          2.35 + Math.sin(a * 1.7 + i) * 0.5,
          Math.sin(a) * orbit
        )
        medal.rotation.y = -a
        medal.rotation.z = Math.sin(a * 2) * 0.4
        medal.scale.setScalar(Math.max(0.001, cheer))
      })

      // Spotlights converge on the trophy as it rises
      spots.forEach((cone, i) => {
        const sweep = Math.sin(t * 0.8 + i * 1.7) * 0.16
        cone.rotation.z = (i - 1) * -0.22 * (1 - cheer * 0.7) + sweep * (1 - cheer)
        cone.scale.set(0.95 * cheer, 7, 0.95 * cheer)
      })

      // Confetti bursts once per cycle, right as the trophy lands
      const burstWindow = phase > 0.3 && phase < 0.84
      if (burstWindow && !confettiLive) {
        confettiLive = true
        confetti.forEach((shard, i) => {
          const d = confData[i]
          shard.position.set((Math.random() - 0.5) * 1.4, 0.5, (Math.random() - 0.5) * 1.4)
          shard.visible = true
          d.vx = (Math.random() - 0.5) * 3.2
          d.vz = (Math.random() - 0.5) * 3.2
          d.vy = 4.2 + Math.random() * 4.6
        })
      } else if (!burstWindow && confettiLive) {
        confettiLive = false
      }

      confMat.opacity = confettiLive ? Math.min(1, (phase - 0.3) * 6) * Math.min(1, (0.84 - phase) * 8) : 0

      if (confettiLive) {
        confetti.forEach((shard, i) => {
          const d = confData[i]
          shard.position.y += d.vy * dt
          shard.position.x += d.vx * dt
          shard.position.z += d.vz * dt
          shard.rotation.x += d.rx * d.spin * dt
          shard.rotation.z += d.rz * d.spin * dt
          if (shard.position.y > 11) shard.visible = false
        })
      }

      // Gentle camera drift keeps the moment alive
      camera.position.x = Math.sin(t * 0.35) * 0.9
      camera.position.y = 2.4 + Math.sin(t * 0.28) * 0.28
      camera.lookAt(0, 1.6, 0)

      renderer.render(scene, camera)
    }

    raf = requestAnimationFrame(animate)

    const onResize = () => {
      if (!mountRef.current) return
      const w = mountRef.current.clientWidth || 1
      const h = mountRef.current.clientHeight || 1
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      observer.disconnect()
      confGeo.dispose()
      confMat.dispose()
      tierRings.forEach(r => (r.material as THREE.Material).dispose())
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
        pointerEvents: 'none',
      }}
    />
  )
}