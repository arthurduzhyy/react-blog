import React from 'react'

interface FormInputProps {
  name: string
  type: string
  placeholder: string
  options: any
  register: any
  errors: any
}

const FormInput: React.FC<FormInputProps> = ({ name, type, placeholder, options, register, errors, isRequired }) => {
  return (
    <div>
      <input type={type} name={name} id={name} placeholder={placeholder}
             className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600
                      focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                       dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             {...register(name, options)} />
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>}
    </div>
  )
}

export default FormInput