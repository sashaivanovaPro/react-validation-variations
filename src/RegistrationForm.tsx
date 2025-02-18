import { useFormValidation } from "./hooks/useFormValidation"

export const RegistrationForm = () => {
  const { values, errors, touched, handlers, passwordVisibility, validation } =
    useFormValidation()
  return (
    <div className="registration-container ">
      <form
        action=""
        className="mt-10  mx-auto flex flex-col items-center w-4/5 max-w-[350px] mx-auto bg-white  rounded-lg p-8"
        onSubmit={handlers.handleSubmit}
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
            value={values.email}
            placeholder="Enter your email"
            className={`w-full border rounded-md px-4 py-2 ${
              touched.email && errors.email
                ? "border-red-500"
                : "border-gray-300"
            }`}
            onBlur={handlers.blurHandler}
            onChange={handlers.emailHandler}
          />
          {touched.email && errors.email && (
            <span className="text-red-500 text-sm mt-1">{errors.email}</span>
          )}
        </div>

        {/* Группа для пароля */}
        <div className="flex flex-col w-full mb-4">
          <div className="relative">
            <input
              type={passwordVisibility.showPassword ? "text" : "password"}
              name="password"
              value={values.password}
              placeholder="Create password"
              className={`w-full border rounded-md px-4 py-2 pr-10 ${
                touched.password && errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              onBlur={handlers.blurHandler}
              onChange={handlers.passwordHandler}
            />
            <button
              type="button" // тип button, чтобы не происходила отправка формы
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={() =>
                passwordVisibility.setShowPassword(
                  !passwordVisibility.showPassword
                )
              }
            >
              {passwordVisibility.showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
          {touched.password && errors.password && (
            <span className="text-red-500 text-sm mt-1">{errors.password}</span>
          )}
        </div>

        {/* Группа для подтверждения пароля */}
        <div className="flex flex-col w-full mb-6">
          <div className="relative">
            <input
              type={
                passwordVisibility.showConfirmPassword ? "text" : "password"
              }
              value={values.confirm}
              name="confirm-password"
              placeholder="Confirm password"
              className={`w-full border rounded-md px-4 py-2 pr-10 ${
                touched.confirm && errors.confirm
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              onBlur={handlers.blurHandler}
              onChange={handlers.confirmPasswordHandler}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={() =>
                passwordVisibility.setShowConfirmPassword(
                  !passwordVisibility.showConfirmPassword
                )
              }
            >
              {passwordVisibility.showConfirmPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
          {touched.confirm && errors.confirm && (
            <span className="text-red-500 text-sm mt-1">{errors.confirm}</span>
          )}
        </div>

        {/* Кнопка отправки формы */}
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={!validation.formValidation}
        >
          Submit
        </button>
      </form>
    </div>
  )
}
