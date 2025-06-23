class Login {
  constructor() {
    this.form = document.querySelector('.login__form')
    this.password = document.querySelector('.password')
    this.toggle = document.querySelector('.login__toggle')
    this.message = document.querySelector('.login__message')

    this.init()
  }

  init() {
    this.togglePassword()
    this.handleSubmit()
  }

  // 👁️ SHOW / HIDE PASSWORD
  togglePassword() {
    this.toggle.addEventListener('click', () => {
      if (this.password.type === 'password') {
        this.password.type = 'text'
        this.toggle.classList.replace('fa-eye-slash', 'fa-eye')
      } else {
        this.password.type = 'password'
        this.toggle.classList.replace('fa-eye', 'fa-eye-slash')
      }
    })
  }

  // ✅ LOGIN VALIDATION
  handleSubmit() {
    this.form.addEventListener('submit', e => {
      e.preventDefault()

      const username = this.form.querySelector('input[type="text"]').value.trim()
      const password = this.password.value

      this.message.style.color = '#ff6b6b'

      if (!username || !password) {
        this.message.textContent = 'All fields are required!'
        return
      }

      if (password.length < 6) {
        this.message.textContent = 'Password too short!'
        return
      }

      // SUCCESS
      this.message.style.color = '#00ffae'
      this.message.textContent = 'Login successful!'

      setTimeout(() => {
        window.location.href = 'dashboard.html'
      }, 1200)
    })
  }
}

// INIT
new Login()
