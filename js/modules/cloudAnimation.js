export function initCloudAnimation() {
  const stage = document.getElementById('clouds-stage')

  const cloudImages = [
    'assets/images/clouds/cloud-01.avif',
    'assets/images/clouds/cloud-02.avif',
  ]

  if (!stage) return

  function clearStage() {
    stage.innerHTML = ''
  }

  function createCloud(layer, forceTop = false) {
    const container = document.createElement('div')
    container.classList.add('cloud-container')

    const cloudImg = document.createElement('img')
    const randomImg =
      cloudImages[Math.floor(Math.random() * cloudImages.length)]

    cloudImg.src = randomImg
    cloudImg.alt = `Cloud ${layer} layer`
    cloudImg.classList.add('cloud-js')


    cloudImg.loading = 'lazy'

    let size, baseOpacity, duration, zIndex

    if (layer === 'back') {
      size = Math.floor(Math.random() * 400) + 700
      baseOpacity = 0.05
      duration = Math.floor(Math.random() * 100) + 250
      zIndex = 1
    } else if (layer === 'mid') {
      size = Math.floor(Math.random() * 300) + 500
      baseOpacity = 0.25
      duration = Math.floor(Math.random() * 80) + 180
      zIndex = 2
    } else {
      size = Math.floor(Math.random() * 500) + 800
      baseOpacity = 0.2
      duration = Math.floor(Math.random() * 60) + 140
      zIndex = 3
    }

    let top = forceTop
      ? Math.floor(Math.random() * 30) - 10
      : Math.floor(Math.random() * 110) - 10

    const delay = Math.floor(Math.random() * duration) * -1
    const flip = Math.random() > 0.5 ? -1 : 1

    Object.assign(container.style, {
      width: `${size}px`,
      top: `${top}%`,
      zIndex: zIndex,
      opacity: baseOpacity,
      animation: `float ${duration}s linear ${delay}s infinite`,
    })

    cloudImg.style.transform = `scaleX(${flip})`
    cloudImg.style.animation = `driftVertical ${duration / 6}s ease-in-out infinite alternate`

    container.appendChild(cloudImg)
    return container
  }

  function generateClouds() {
    clearStage()
    const isMobile = window.innerWidth < 768

    const multiplier = isMobile ? 0.3 : 1
    const fragment = document.createDocumentFragment()

    const layers = [
      { name: 'back', count: 5, top: true },
      { name: 'front', count: 5, top: true },
      { name: 'back', count: 4, top: false },
      { name: 'mid', count: 4, top: false },
      { name: 'front', count: 4, top: false },
    ]

    layers.forEach(l => {
      const count = Math.max(1, Math.floor(l.count * multiplier))
      for (let i = 0; i < count; i++) {
        fragment.appendChild(createCloud(l.name, l.top))
      }
    })

    stage.appendChild(fragment)
  }

  function init() {
    generateClouds()

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          stage.style.visibility = entry.isIntersecting ? 'visible' : 'hidden'
        })
      },
      { threshold: 0.01 },
    )

    observer.observe(stage)

    document.addEventListener('visibilitychange', () => {
      stage.style.visibility = document.hidden ? 'hidden' : 'visible'
    })

    let resizeTimeout
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        if (Math.abs(window.innerWidth - lastWidth) > 50) {
          generateClouds()
          lastWidth = window.innerWidth
        }
      }, 400)
    })
    let lastWidth = window.innerWidth
      document.body.classList.add('clouds-ready')
  }
  init()
}
