export function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle')
  const html = document.documentElement

  const currentTheme = localStorage.getItem('theme') || 'light'
  if (currentTheme === 'dark') {
    html.setAttribute('data-theme', 'dark')
    html.classList.replace('light-theme', 'dark-theme')
  }

  themeToggle?.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark'

    if (isDark) {
      html.setAttribute('data-theme', 'light')
      html.classList.replace('dark-theme', 'light-theme')
      localStorage.setItem('theme', 'light')
    } else {
      html.setAttribute('data-theme', 'dark')
      html.classList.replace('light-theme', 'dark-theme')
      localStorage.setItem('theme', 'dark')
    }

    html.classList.add('theme-switching')
    setTimeout(() => {
      html.classList.remove('theme-switching')
    }, 300)
  })
}
