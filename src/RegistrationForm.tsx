import { useForm } from "react-hook-form"
import {
  RegistrationFormData,
  registrationFormSchema,
} from "./schemas/registrationFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

export const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isDirty, isValid },
    reset,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationFormSchema),
    mode: "onBlur",
  })

  const onSubmit = (data: RegistrationFormData) => {
    console.log("Form submitted with data:", data)
    reset()
  }

  return (
    <div className="registration-container ">
      <form
        className="mt-10  mx-auto flex flex-col items-center w-4/5 max-w-[350px] mx-auto bg-white  rounded-lg p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Заголовок  */}
        <h1 className="text-2xl text-blue-500 font-bold mb-6">
          Registration form
        </h1>

        {/* Группа для email */}
        <div className="flex flex-col w-full mb-4">
          <input
            type="text"
            {...register("email")}
            placeholder="Enter your email"
            className={`w-full border rounded-md px-4 py-2 ${
              errors.email && touchedFields.email
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {errors.email && touchedFields.email && (
            <span className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Группа для пароля */}
        <div className="flex flex-col w-full mb-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Create password"
              className={`w-full border rounded-md px-4 py-2 pr-10 ${
                errors.password && touchedFields.password
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
          {errors.password && touchedFields.password && (
            <span className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Группа для подтверждения пароля */}
        <div className="flex flex-col w-full mb-6">
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirm")}
              placeholder="Confirm password"
              className={`w-full border rounded-md px-4 py-2 pr-10 ${
                errors.confirm && touchedFields.confirm
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
          {errors.confirm && touchedFields.confirm && (
            <span className="text-red-500 text-sm mt-1">
              {errors.confirm.message}
            </span>
          )}
        </div>

        {/* Кнопка отправки формы */}
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={!(isDirty && isValid)}
        >
          Submit
        </button>
      </form>
    </div>
  )
}
