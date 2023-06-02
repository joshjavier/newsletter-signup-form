const form = document.getElementById('signup')
const error = document.getElementById('error')
const email = document.getElementById('email')
const success = document.getElementById('success')

email.addEventListener('blur', (event) => {
  if (!email.validity.valid) {
    email.setAttribute('aria-invalid', 'true')
  }

  if (email.getAttribute('aria-invalid')) {
    error.textContent = 'Oops, wrong format'
  } else {
    error.textContent = ''
  }
})

form.addEventListener('submit', (event) => {
  event.preventDefault()
  if (email.value === '') {
    email.setAttribute('aria-invalid', 'true')
    return
  }

  // Show success message
  success.showModal()
})
