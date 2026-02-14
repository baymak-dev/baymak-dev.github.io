export function initFormHandler() {
  const contactForm = document.getElementById('contactForm')
  const formMessage = document.getElementById('form-message')

  if (!contactForm) return

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  function showMessage(text, type) {
    formMessage.textContent = text
    formMessage.className = `form-message ${type}`
    formMessage.style.display = 'block'

    setTimeout(() => {
      formMessage.style.display = 'none'
    }, 5000)
  }

  contactForm.addEventListener('submit', async e => {
    e.preventDefault()

    const formData = new FormData(contactForm)
    const email = formData.get('email')
    const name = formData.get('name')
    const message = formData.get('message')

    if (!name || !email || !message) {
      showMessage('Please fill in all fields.', 'error')
      return
    }

    if (!isValidEmail(email)) {
      showMessage('Please enter a valid email address.', 'error')
      return
    }

    document.getElementById('reply-to').value = email

    try {

      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        showMessage("Message sent successfully! I'll get back to you soon.", 'success')
        contactForm.reset()
      } else {
        const data = await response.json()
        if (data.errors) {
          showMessage(data.errors.map(error => error.message).join(', '), 'error')
        } else {
          showMessage('Oops! There was a problem submitting your form.', 'error')
        }
      }
    } catch (error) {
      console.error('Form submission error:', error)
      showMessage('Network error. Please try again later.', 'error')
    }
  })

  const inputs = contactForm.querySelectorAll('input, textarea')
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      if (input.name === 'email' && input.value && !isValidEmail(input.value)) {
        input.style.borderColor = '#dc2626'
      } else if (input.value) {
        input.style.borderColor = '#16a34a'
      }
    })

    input.addEventListener('input', () => {
      input.style.borderColor = 'var(--color-border)'
    })
  })
}
