import { useForm } from 'react-hook-form'
import FormInput from '../../component/FormInput'
import LoginService from './service/auth.service'

const loginService = new LoginService()

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = async (data) => {
    if (Object.keys(errors).length > 0) {
      return
    }
    try {
      const response = await loginService.login(data)
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
             <FormInput
               name={"email"}
               type={"email"}
               placeholder={"test@example.com"}
               options={{
                 required: 'Email is required',
                 pattern: {
                   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                   message: 'Invalid email address'
                 }
               }}
               register={register}
               errors={errors}
               />
            </div>
            <div>
              <label htmlFor="password"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <FormInput
                    name={"password"}
                    type={"password"}
                    placeholder={"Your password"}
                    options={{
                        required: 'Password is required',
                        minLength: {
                        value: 6,
                        message: 'Password must have at least 6 characters'
                        }
                    }}
                    register={register}
                    errors={errors}
                />
            </div>
            <button type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700
                    focus:ring-4 focus:outline-none focus:ring-primary-300
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center
                    dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?
              <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
}

export default LoginPage