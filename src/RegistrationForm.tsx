import { useEffect, useState } from "react"

export const RegistrationForm = () => {
  // Значения полей формы - values
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirm, setConfirm] = useState<string>("")

  // Состояния взаимодействия с полями - touched
  const [emailTouched, setEmailTouched] = useState<boolean>(false)
  const [passwordTouched, setPasswordTouched] = useState<boolean>(false)
  const [confirmTouched, setConfirmTouched] = useState<boolean>(false)

  // Сообщения об ошибках валидации - errors
  const [emailError, setEmailError] = useState<string>("Email is required")
  const [passwordError, setPasswordError] = useState<string>(
    "Password is required"
  )
  const [confirmError, setConfirmError] = useState<string>(
    "Passwords confirmation is required"
  )

  // Общее состояние валидации формы - validation
  const [formValidation, setFormValidation] = useState(false)

  // Управление видимостью паролей - passwordVisibility
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  useEffect(() => {
    if (
      email &&
      password &&
      confirm &&
      !emailError &&
      !passwordError &&
      !confirmError
    ) {
      setFormValidation(true)
    } else {
      setFormValidation(false)
    }
  }, [email, password, confirm, emailError, passwordError, confirmError])

  // Обработчики событий - handlers
  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(String(event.target.value).toLowerCase())) {
      setEmailError("Invalid email")
    } else {
      setEmailError("")
    }
  }

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{3,14}$/
    if (!passwordRegex.test(String(event.target.value))) {
      setPasswordError("3-10 chars, 1 uppercase, 1 number")
      if (!event.target.value) {
        setPasswordError("Password cannot be empty")
      }
    } else {
      setPasswordError("")
    }
  }

  const confirmPasswordHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirm(event.target.value)
    if (event.target.value !== password) {
      setConfirmError("Passwords do not match")
    } else {
      setConfirmError("")
    }
    if (!event.target.value) {
      setConfirmError("Password confirmation is required")
    }
  }

  const blurHandler = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    switch (event.target.name) {
      case "email":
        setEmailTouched(true)
        break
      case "password":
        setPasswordTouched(true)
        break
      case "confirm-password":
        setConfirmTouched(true)
        break
    }
  }

  const resetForm = () => {
    // Сначала очищаем значения полей
    setEmail("")
    setPassword("")
    setConfirm("")

    // Затем сбрасываем состояния touched
    setEmailTouched(false)
    setPasswordTouched(false)
    setConfirmTouched(false)

    // И сбрасываем ошибки
    setEmailError("Email is required")
    setPasswordError("Password is required")
    setConfirmError("Passwords confirmation is required")
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (formValidation) {
      console.log("Successful submit:", { email, password })

      resetForm() // Cбрасываем форму
    }
  }

  return (
    <div className="registration-container ">
      <form
        action=""
        className="mt-10  mx-auto flex flex-col items-center w-4/5 max-w-[350px] mx-auto bg-white  rounded-lg p-8"
        onSubmit={handleSubmit}
      >
        {/* Заголовок  */}
        <h1 className="text-2xl text-blue-500 font-bold mb-6">
          Registration form
        </h1>

        {/* Группа для email */}
        <div className="flex flex-col w-full mb-4">
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter your email"
            className={`w-full border rounded-md px-4 py-2 ${
              emailTouched && emailError ? "border-red-500" : "border-gray-300"
            }`}
            onBlur={blurHandler}
            onChange={emailHandler}
          />
          {emailTouched && emailError && (
            <span className="text-red-500 text-sm mt-1">{emailError}</span>
          )}
        </div>

        {/* Группа для пароля */}
        <div className="flex flex-col w-full mb-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              placeholder="Create password"
              className={`w-full border rounded-md px-4 py-2 pr-10 ${
                passwordTouched && passwordError
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              onBlur={blurHandler}
              onChange={passwordHandler}
            />
            <button
              type="button" // тип button, чтобы не происходила отправка формы
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
          {passwordTouched && passwordError && (
            <span className="text-red-500 text-sm mt-1">{passwordError}</span>
          )}
        </div>

        {/* Группа для подтверждения пароля */}
        <div className="flex flex-col w-full mb-6">
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirm}
              name="confirm-password"
              placeholder="Confirm password"
              className={`w-full border rounded-md px-4 py-2 pr-10 ${
                confirmTouched && confirmError
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              onBlur={blurHandler}
              onChange={confirmPasswordHandler}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
          {confirmTouched && confirmError && (
            <span className="text-red-500 text-sm mt-1">{confirmError}</span>
          )}
        </div>

        {/* Кнопка отправки формы */}
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={!formValidation}
        >
          Submit
        </button>
      </form>
    </div>
  )
}
