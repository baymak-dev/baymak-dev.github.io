import { projects } from '../data/projects.js'
import { languageModule } from './language.js'

export function initProjectsFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn')
  const projectsGrid = document.querySelector('.projects__grid')

  if (!projectsGrid) return

  function renderProjects(filter = 'all') {
    projectsGrid.style.opacity = '0'

    setTimeout(() => {
      const filtered =
        filter === 'all'
          ? projects
          : projects.filter(p => p.category === filter)

      projectsGrid.innerHTML = filtered
        .map(
          project => `
          <article class="project-card fade-in-up">
            <div class="project-card__browser-bar">
              <div class="browser-dots">
                <span></span><span></span><span></span>
              </div>
              <small class="browser-category" data-i18n="filter_${project.category}">${project.category}</small>
            </div>

            <div class="project-card__image">
              <img src="${project.image}" 
                   data-i18n-alt="${project.id}_alt" 
                   alt="${project.title}" 
                   loading="lazy">
            </div>

            <div class="project-card__content">
              <h3 class="project-card__title" data-i18n="${project.id}_title">${project.title}</h3>
              <p class="project-card__description" data-i18n="${project.id}_desc">${project.description}</p>
              
              <div class="project-card__tags">
                ${project.tags.map(tag => `<span class="project-card__tag">${tag}</span>`).join('')}
              </div>

              <div class="project-card__actions">
                <a href="${project.demoUrl}" target="_blank" rel="noopener" class="btn btn--primary">
                  <i class="fas fa-external-link-alt"></i> Demo
                </a>
                <a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn--secondary">
                  <i class="fab fa-github"></i> Code
                </a>
              </div>
            </div>
          </article>
        `,
        )
        .join('')

      const currentLang = localStorage.getItem('language') || 'en'
      if (languageModule && languageModule.translatePage) {
        languageModule.translatePage(currentLang)
      }

      requestAnimationFrame(() => {
        projectsGrid.style.opacity = '1'
      })
    }, 200)
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', e => {
      filterButtons.forEach(btn => btn.classList.remove('active'))
      e.currentTarget.classList.add('active')
      renderProjects(e.currentTarget.dataset.filter)
    })
  })

  renderProjects()
}
