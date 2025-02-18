import { error } from "console"
import { useEffect, useState } from "react"
import { UseFormValidationData } from "../types/form.types"

export function useFormValidation(): UseFormValidationData {
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

  return {
    values: { email, password, confirm },
    errors: {
      email: emailError,
      password: passwordError,
      confirm: confirmError,
    },
    touched: {
      email: emailTouched,
      password: passwordTouched,
      confirm: confirmTouched,
    },
    handlers: {
      handleSubmit,
      blurHandler,
      emailHandler,
      passwordHandler,
      confirmPasswordHandler,
    },
    passwordVisibility: {
      showPassword,
      setShowPassword,
      setShowConfirmPassword,
      showConfirmPassword,
    },
    validation: { formValidation },
  }
}
