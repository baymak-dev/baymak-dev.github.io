export function initLanguage() {
  const translations = {
    en: {
      head_title: 'Baymak Taras | Web Developer',
      meta_desc:
        'Portfolio of Baymak Taras — Web Developer specializing in clean, fast, and efficient solutions. Turning resilience into reliable code.',
      og_title: 'Baymak Taras | Web Developer Portfolio',
      og_desc:
        'Transforming ideas into reality through clean code. Discipline and results in every line.',
      img_alt: 'Taras Baymak — Web Developer Portfolio Photo',
      nav_about: 'About',
      nav_skills: 'Skills',
      nav_projects: 'Projects',
      nav_contact: 'Contact',
      hero_profession: 'Web Developer',
      hero_description:
        'Transforming the experience of resilience and precision into reliable code.',
      btn_work: 'View My Work',
      btn_cv: 'Download CV',
      about_title: 'About Me',
      about_p1: `I'm a passionate web developer dedicated to creating innovative and efficient solutions. I love turning ideas into reality and always strive for clean and functional design.`,
      about_p2: `I value discipline and results. I thrive in environments where there is no room for error. My philosophy is simple: the best code is clean, fast, and efficient.`,
      skills_title: 'Skills',
      projects_title: 'My Projects',
      filter_all: 'All',
      filter_web: 'Web Apps',
      filter_landing: 'Landing Pages',
      filter_ui: 'UI/UX',

      // Project Cards
      // Projects: Turbo Taxi
      turbo_taxi_title: 'Turbo Taxi Landing Page',
      turbo_taxi_desc:
        'Taxi service landing page built with pure HTML, CSS, and Vanilla JavaScript.',
      turbo_taxi_alt: 'Turbo Taxi Project Preview',

      // Task Master PWA
      task_master_title: 'Task Master PWA',
      task_master_desc:
        'A Progressive Web App for task management with Dark Mode support and LocalStorage data persistence.',
      task_master_alt: 'Task Master PWA project preview',

      // Projects: Portfolio
      portfolio_title: 'Personal Portfolio Website',
      portfolio_desc:
        'A bespoke portfolio platform designed and engineered from the ground up.',
      portfolio_alt: 'Portfolio Project Preview',

      contact_title: 'Contact Me',
      touch_title: 'Get in Touch',
      touch_text:
        'Feel free to reach out for collaborations or just a friendly hello!',
      form_name: 'Name',
      form_email: 'Email',
      form_message: 'Message',
      btn_send: 'Send Message',
      location: 'Ukraine, Lviv',
      footer_tag: 'Web Developer',
      footer_rights: 'All rights reserved.',
      footer_made: 'Made with',
    },
    uk: {
      head_title: 'Baymak Taras | Веб-розробник',
      meta_desc:
        'Портфоліо Тараса Баймака — веб-розробника, що спеціалізується на чистих та швидких рішеннях. Перетворюю досвід на надійний код.',
      og_title: 'Baymak Taras | Портфоліо веб-розробника',
      og_desc:
        'Перетворюю ідеї в реальність за допомогою чистого коду. Дисципліна та результат у кожному рядку.',
      img_alt: 'Тарас Баймак — Фото портфоліо веб-розробника',
      nav_about: 'Про мене',
      nav_skills: 'Навички',
      nav_projects: 'Проєкти',
      nav_contact: 'Контакти',
      hero_profession: 'Веб-розробник',
      hero_description:
        'Перетворюю досвід стійкості та точності на надійний код.',
      btn_work: 'Мої роботи',
      btn_cv: 'Завантажити CV',
      about_title: 'Про мене',
      about_p1: `Я — захоплений своєю справою веб-розробник, який створює інноваційні та ефективні рішення. Мені подобається втілювати ідеї в реальність, і я завжди прагну до чистого та функціонального дизайну.`,
      about_p2: `Ціную дисципліну та результат. Я ефективно працюю в умовах, де немає права на помилку. Моя філософія проста: найкращий код — чистий, швидкий та продуктивний.`,
      skills_title: 'Навички',
      projects_title: 'Мої проєкти',
      filter_all: 'Всі',
      filter_web: 'Веб-додатки',
      filter_landing: 'Лендінги',
      filter_ui: 'UI/UX',

      // Project Cards
      // Turbo Taxi
      turbo_taxi_title: 'Лендінг Turbo Taxi',
      turbo_taxi_desc:
        'Сайт для сервісу таксі, розроблений на чистому HTML, CSS та Vanilla JavaScript.',
      turbo_taxi_alt: 'Прев’ю проєкту Turbo Taxi',

      // Task Master PWA
      task_master_title: 'Task Master PWA',
      task_master_desc:
        'Progressive Web App (PWA) для керування завданнями з підтримкою темної теми та збереженням даних у LocalStorage.',
      task_master_alt: 'Прев’ю проєкту Task Master PWA',

      // Portfolio
      portfolio_title: 'Персональний сайт-портфоліо',
      portfolio_desc:
        'Власна платформа для портфоліо, спроєктована та розроблена з нуля.',
      portfolio_alt: 'Прев’ю проєкту Портфоліо',

      contact_title: "Зв'язатися зі мною",
      touch_title: 'Контакти',
      touch_text:
        'Відкритий для нових проєктів та цікавих ідей. Напишіть мені!',
      form_name: "Ім'я",
      form_email: 'Електронна пошта',
      form_message: 'Повідомлення',
      btn_send: 'Надіслати повідомлення',
      location: 'Україна, Львів',
      footer_tag: 'Веб-розробник',
      footer_rights: 'Всі права захищені.',
      footer_made: 'Зроблено з',
    },
  }

  let currentLang = localStorage.getItem('language') || 'en'

  function translatePage(lang) {
    const langData = translations[lang]
    if (!langData) return

    const elements = document.querySelectorAll('[data-i18n]')
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n')
      if (langData[key]) {
        if (key === 'head_title') {
          document.title = langData[key]
        } else {
          element.textContent = langData[key]
        }
      }
    })

    updateMetaTag('description', langData.meta_desc)
    updateMetaTag('og:title', langData.og_title, 'property')
    updateMetaTag('og:description', langData.og_desc, 'property')

    const images = document.querySelectorAll('img[data-i18n-alt]')
    images.forEach(img => {
      const key = img.getAttribute('data-i18n-alt')
      if (langData[key]) {
        img.alt = langData[key]
      }
    })

    const currentLangText = document.querySelector('.current-lang-text')
    if (currentLangText) {
      currentLangText.textContent = lang.toUpperCase()
    }

    updateLanguageButtons(lang)
  }

  function updateMetaTag(name, value, attrName = 'name') {
    const element = document.querySelector(`meta[${attrName}="${name}"]`)
    if (element && value) {
      element.setAttribute('content', value)
    }
  }

  function saveLanguage(lang) {
    localStorage.setItem('language', lang)
    document.documentElement.lang = lang
    currentLang = lang
  }

  function updateLanguageButtons(lang) {
    const buttons = document.querySelectorAll('.lang-btn')
    buttons.forEach(button => {
      const buttonLang = button.getAttribute('data-lang')
      button.classList.toggle('active', buttonLang === lang)
    })
  }

  function setupLanguageListeners() {
    document.addEventListener('click', e => {
      const btn = e.target.closest('.lang-btn')
      if (btn) {
        const newLang = btn.getAttribute('data-lang')
        if (newLang !== currentLang) {
          saveLanguage(newLang)
          translatePage(newLang)
          closeMobileMenu()
        }
      }
    })
  }

  function closeMobileMenu() {
    const navMenu = document.querySelector('.navbar__menu')
    const menuToggle = document.querySelector('.mobile-menu-toggle')
    if (navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active')
      menuToggle?.classList.remove('active')
      document.body.style.overflow = ''
    }
  }

  function init() {
    document.documentElement.lang = currentLang
    translatePage(currentLang)
    setupLanguageListeners()
  }

  return {
    init,
    getCurrentLanguage: () => currentLang,
    translatePage,
  }
}

export const languageModule = initLanguage()
