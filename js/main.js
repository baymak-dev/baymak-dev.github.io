import { initCloudAnimation } from './modules/cloudAnimation.js'
import { initNavigation } from './modules/navigation.js'
import { initThemeToggle } from './modules/themeToggle.js'
import { initProjectsFilter } from './modules/projectsFilter.js'
import { initFormHandler } from './modules/formHandler.js'
import { initScrollAnimation } from './modules/scrollAnimations.js'
import { initSkillsGrid } from './modules/skillsGrid.js'
import { languageModule } from './modules/language.js'
import { initFooterDate } from './modules/footerDate.js'

document.addEventListener('DOMContentLoaded', () => {
  languageModule.init()

  initCloudAnimation()

  initNavigation()
  initThemeToggle()
  initProjectsFilter()
  initFormHandler()
  initScrollAnimation()
  initSkillsGrid()
  initFooterDate()

  registerServiceWorker()
})

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('./sw.js')
        .then(reg => {
          console.log('SW registered successfully')
        })
        .catch(err => {
          console.warn('SW registration failed:', err)
        })
    })
  }
}