export function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle')
  const html = document.documentElement

  // Змінюємо 'light' на 'dark' за замовчуванням
  const currentTheme = localStorage.getItem('theme') || 'dark'

  if (currentTheme === 'dark') {
    html.setAttribute('data-theme', 'dark')

    html.classList.remove('light-theme')
    html.classList.add('dark-theme')
  } else {
    html.setAttribute('data-theme', 'light')
    html.classList.remove('dark-theme')
    html.classList.add('light-theme')
  }

  themeToggle?.addEventListener('click', () => {
    const isDark = html.classList.contains('dark-theme')

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
