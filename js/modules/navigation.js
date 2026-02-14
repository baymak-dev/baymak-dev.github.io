export function initNavigation() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle')
  const navbarMenu = document.querySelector('.navbar__menu')
  const navLinks = document.querySelectorAll('.navbar__link')
  const downloadCV = document.getElementById('downloadCV')

  function closeMobileMenu() {
    mobileMenuToggle?.classList.remove('active')
    navbarMenu?.classList.remove('active')
    document.body.classList.remove('menu-open')
    document.body.style.overflow = ''
  }

mobileMenuToggle?.addEventListener('click', () => {
  mobileMenuToggle.classList.toggle('active')
  navbarMenu.classList.toggle('active')
  document.body.classList.toggle('menu-open')
  document.body.style.overflow = navbarMenu.classList.contains('active') ? 'hidden' : ''
})


  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu()
      navLinks.forEach(l => l.classList.remove('active'))
      link.classList.add('active')
    })
  })

  downloadCV?.addEventListener('click', e => {
    e.preventDefault()

    const currentLang = document.documentElement.lang || 'en'
    const fileName = currentLang === 'uk' ? 'Baymak_Taras_CV_UA.pdf' : 'Baymak_Taras_CV_EN.pdf'

    const link = document.createElement('a')
    link.href = `assets/files/${fileName}`
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  })

  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]')
    const scrollY = window.pageYOffset

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight
      const sectionTop = section.offsetTop - 100
      const sectionId = section.getAttribute('id')
      const correspondingLink = document.querySelector(`.navbar__link[href="#${sectionId}"]`)

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(l => l.classList.remove('active'))
        correspondingLink?.classList.add('active')
      }
    })
  })

  document.addEventListener('click', e => {
    if (
      navbarMenu?.classList.contains('active') &&
      !navbarMenu.contains(e.target) &&
      e.target !== mobileMenuToggle &&
      !mobileMenuToggle.contains(e.target)
    ) {
      closeMobileMenu()
    }
  })

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navbarMenu?.classList.contains('active')) {
      closeMobileMenu()
    }
  })
}
