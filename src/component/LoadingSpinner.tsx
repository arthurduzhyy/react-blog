import { Spinner } from '@material-tailwind/react'
import { FC, ReactNode } from 'react'

interface LoadingSpinnerProps {
  loading: boolean
  children: ReactNode
  className?: string
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  loading,
  children,
  className = 'h-8 w-8'
}) => {
  return <>
    <div className="flex justify-center">
      {loading && <Spinner className={className} />}
    </div>
    {children}
  </>
}

export default LoadingSpinner