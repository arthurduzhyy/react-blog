import { PhotoIcon } from '@heroicons/react/24/solid'
import { IconButton } from '@material-tailwind/react'
import { ChangeEvent, forwardRef, memo, RefObject } from 'react'

interface FileUploadButtonProps {
  onFileChange: (file: File | null) => void
}

const FileUploadButtonComponent = forwardRef<HTMLInputElement, FileUploadButtonProps>(
  ({ onFileChange }, ref) => {
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0] || null
      onFileChange(file)
    }

    return <>
      <input
        type="file"
        ref={ref}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />
      <IconButton
        size="sm"
        color="indigo"
        variant="gradient"
        onClick={() => (ref as RefObject<HTMLInputElement>)?.current?.click()}
      >
        <PhotoIcon className="h-5 w-5" />
      </IconButton>
    </>
  }
)

FileUploadButtonComponent.displayName = 'FileUploadButtonComponent'

const FileUploadButton = memo(FileUploadButtonComponent)

export default FileUploadButton