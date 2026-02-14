export function initSkillsGrid() {
  const skillsGrid = document.querySelector('.skills__grid')
  if (!skillsGrid) return

  const skills = [
    { name: 'JavaScript', icon: 'fab fa-js', level: 60, color: '#f7df1e' },
    { name: 'React', icon: 'fab fa-react', level: 10, color: '#61dafb' },
    { name: 'Vue.js', icon: 'fab fa-vuejs', level: 10, color: '#42b883' },
    { name: 'Angular', icon: 'fab fa-angular', level: 10, color: '#dd0031' },
    { name: 'Node.js', icon: 'fab fa-node-js', level: 15, color: '#339933' },
    { name: 'HTML5', icon: 'fab fa-html5', level: 95, color: '#e34f26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', level: 92, color: '#1572b6' },
    { name: 'TypeScript', icon: 'fab fa-js-square', level: 15, color: '#3178c6' },
    { name: 'Git', icon: 'fab fa-git-alt', level: 70, color: '#f05032' },
    { name: 'Python', icon: 'fab fa-python', level: 15, color: '#3776ab' },
    { name: 'Database', icon: 'fas fa-database', level: 10, color: '#00618a' },
    { name: 'Figma', icon: 'fab fa-figma', level: 50, color: '#f24e1e' },
  ]

skillsGrid.innerHTML = skills
  .map(
    skill => `
    <div class="skill-item" 
         role="progressbar" 
         aria-valuenow="${skill.level}" 
         aria-valuemin="0" 
         aria-valuemax="100"
         aria-label="${skill.name} proficiency: ${skill.level}%"
         data-level="${skill.level}%">
      <i class="${skill.icon} skill-item__icon" 
         style="color: ${skill.color}" 
         aria-hidden="true"></i>
      <span class="skill-item__name">${skill.name}</span>
      <div class="skill-item__level"></div>
    </div>
  `,
  )
  .join('')

  const skillItems = document.querySelectorAll('.skill-item')

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animated')

            const level = entry.target.getAttribute('data-level')
            entry.target.style.setProperty('--level-width', level)
          }, index * 100)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 },
  )

  skillItems.forEach(item => observer.observe(item))
}
