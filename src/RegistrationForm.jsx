import { useEffect, useState } from "react"

export const RegistrationForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")

  const [emailTouched, setEmailTouched] = useState(false)
  const [passwordTouched, setPasswordTouched] = useState(false)
  const [confirmTouched, setConfirmTouched] = useState(false)

  const [emailError, setEmailError] = useState("Email is required")
  const [passwordError, setPasswordError] = useState("Password is required")
  const [confirmError, setConfirmError] = useState(
    "Passwords confirmation is required"
  )

  const [formValidation, setFormValidation] = useState(false)

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

  const emailHandler = (event) => {
    setEmail(event.target.value)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(String(event.target.value).toLowerCase())) {
      setEmailError("Invalid email")
    } else {
      setEmailError("")
    }
  }

  const passwordHandler = (event) => {
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

  const confirmPasswordHandler = (event) => {
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

  const blurHandler = (event) => {
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

  const handleSubmit = (event) => {
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
        className="mt-10  mx-auto flex flex-col items-center w-4/5 max-w-[350px] mx-auto bg-white  rounded-lg pt-5 pb-5"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-blue-500 font-bold">Registration form</h1>
        <div className="h-5 mb-2">
          {emailTouched && emailError && (
            <span className="text-red-500">{emailError}</span>
          )}
        </div>
        <input
          type="text"
          value={email} // React → DOM (отображение)
          name="email"
          placeholder="Enter your email"
          className="block mt-2.5 border rounded-md px-4 py-2 w-4/5 max-w-[250px]"
          onBlur={blurHandler}
          onChange={emailHandler} // DOM → React (обновление)
        />
        <div className="h-5 mb-2">
          {passwordTouched && passwordError && (
            <div className="text-red-500">{passwordError}</div>
          )}
        </div>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Create password"
          className="block mt-2.5 border rounded-md px-4 py-2 w-4/5 max-w-[250px]"
          onBlur={blurHandler}
          onChange={passwordHandler}
        />
        <div className="h-5 mb-2">
          {confirmTouched && confirmError && (
            <div className="text-red-500">{confirmError}</div>
          )}
        </div>
        <input
          type="password"
          value={confirm}
          name="confirm-password"
          placeholder="Confirm password"
          className="block mt-2.5 border rounded-md px-4 py-2 w-4/5 max-w-[250px]"
          onBlur={blurHandler}
          onChange={confirmPasswordHandler}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-5 rounded"
          type="submit"
          disabled={!formValidation}
        >
          Submit
        </button>
      </form>
    </div>
  )
}
