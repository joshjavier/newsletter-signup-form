const form = document.getElementById('signup')
const elEmail = document.getElementById('email')
const success = document.getElementById('success')

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/

const formErrors = {
  email: false,
}

validateField({
  elField: elEmail,
  validateFn: validateFieldEmail,
})

function validateField({ elField, validateFn }) {
  let touched = false

  elField.addEventListener('change', (e) => {
    touched = true // only proceed with validation once user changes value
  })

  elField.addEventListener('blur', (e) => {
    if (!touched) return
    validateFn(e.target, { live: true })
  })

  elField.addEventListener('keyup', (e) => {
    // remove error if any once field value satisfies validation to give users visual feedback
    validateFn(e.target, { removeOnly: true })
  })
}

function validateFieldEmail(el, opts) {
  const isEmpty = el.value === ''

  if (isEmpty) {
    formErrors.email = true
    updateFieldDOM(el, !isEmpty, 'Email required', opts)

  } else {
    const isEmailValid = el.value.match(emailRegex)
    updateFieldDOM(el, isEmailValid, 'Oops, wrong format', opts)
    formErrors.email = !isEmailValid
  }
}

function updateFieldDOM(el, isValid, errorMessage, opts) {
  const removeOnly = opts?.removeOnly
  const isLive = opts?.live
  const elField = el.closest('.field')
  const elError = elField.querySelector('.field-error')

  if (isValid) {
    elField.classList.remove('isInvalid')
    elError.textContent = ''
    el.removeAttribute('aria-invalid')

  } else if (!removeOnly) {
    elField.classList.add('isInvalid')
    elError.setAttribute('aria-live', isLive ? 'assertive' : 'off')
    el.setAttribute('aria-invalid', 'true')
    elError.textContent = errorMessage
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  validateFieldEmail(email)

  if (formErrors.email) {
    // Since we only have one form field, shifting focus to the email field shouldn't be
    // too disorienting, but rather save users some time from having to manually tab to it.
    elEmail.focus()

  } else {
    const email = elEmail.value
    success.querySelector('.success-description').innerHTML = `A confirmation email has been sent to <strong>${email}</strong>. Please open it and click the button inside to confirm your subscription.`
    success.showModal()
    form.reset()
  }
})
