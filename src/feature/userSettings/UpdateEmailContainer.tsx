import { Button, Spinner } from '@material-tailwind/react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import FormInput from '../../component/FormInput'
import { useUserSettings } from './hook/useUserSettings'
import { useUser } from '../profile/hook/useUser'

const UpdateEmailContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { loading, updateEmail } = useUserSettings()
  const { loadUser } = useUser()
  useEffect(() => {
    loadUser()
  }, [loadUser])

  const onSubmit = (data) => {
    if (loading) return
    updateEmail(data.email)
  }

  return (
    <div>
      <h3 className='text-gray-900 text-2xl font-bold'>Update email</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex'>
          <div>
            <label className="text-gray-900">Email</label>
            <FormInput
              name={'email'}
              type={'email'}
              placeholder={'test@example.com'}
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
            <Button
              type="submit"
              className="flex items-center justify-center gap-x-2 w-full text-dark bg-gray-400 hover:bg-gray-500
                      focus:ring-4 focus:outline-none focus:ring-primary-300 border-b-blue-gray-600
                      font-medium rounded-lg text-sm px-5 py-2.5 text-center
                      dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-white dark:ring-primary-800
                      dark:border-primary-800 dark:dark:text-white dark:dark:hover:bg-primary-700 dark:dark:bg-primary-600 dark:dark:focus:ring-primary-800 dark:dark:border-primary-800"
              disabled={loading}
            >
              {loading && <Spinner className="h-5 w-5" />}
              {loading ? ' Loading...' : 'Update'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UpdateEmailContainer