import { Button, Spinner } from '@material-tailwind/react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import FormInput from '../../component/FormInput'
import useTitle from '../../hook/useTitle'
import useAuth from './hook/useAuth'
import { RegisterForm } from './service/types'

const RegisterPage = () => {
  useTitle('Registration')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterForm>()

  const navigate = useNavigate()

  const { loading, register: registerFunc } = useAuth()

  const onSubmit = async (data) => {
    const response = await registerFunc(data)
    if (response) {
      navigate('/login')
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div
          className="w-full max-w-md bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create a new account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  First Name
                </label>
                <FormInput
                  name={'firstName'}
                  type={'text'}
                  placeholder={'John'}
                  options={{
                    required: 'Name is required'
                  }}
                  register={register}
                  errors={errors}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Last Name
                </label>
                <FormInput
                  name={'lastName'}
                  type={'text'}
                  placeholder={'Doe'}
                  options={{
                    required: 'Last name is required'
                  }}
                  register={register}
                  errors={errors}
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email Address
                </label>
                <FormInput
                  name={'email'}
                  type={'email'}
                  placeholder={'test@example.com'}
                  options={{
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: 'Invalid email format'
                    }
                  }}
                  register={register}
                  errors={errors}
                />
              </div>
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Username
                </label>
                <FormInput
                  name={'username'}
                  type={'text'}
                  placeholder={'Your Username'}
                  options={{
                    required: 'Username is required'
                  }}
                  register={register}
                  errors={errors}
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <FormInput
                  name={'password'}
                  type={'password'}
                  placeholder={'Your password'}
                  options={{
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must contain at least 8 characters.'
                    }
                  }}
                  register={register}
                  errors={errors}
                />
              </div>
              <Button
                type="submit"
                className="flex items-center justify-center gap-x-2 w-full text-dark bg-gray-400 hover:bg-gray-500
                    focus:ring-4 focus:outline-none focus:ring-primary-300 border-b-blue-gray-600
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center
                    dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-white dark:ring-primary-800
                    dark:border-primary-800 dark:dark:text-white dark:dark:hover:bg-primary-700 dark:dark:bg-primary-600 dark:dark:focus:ring-primary-800 dark:dark:border-primary-800
                    "
              >
                {loading && <Spinner className="h-5 w-5" />}
                {loading ? ' Loading...' : 'Sign up'}
              </Button>
              <div className="flex justify-between">
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?
                </p>
                <Link to="/login" className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage
