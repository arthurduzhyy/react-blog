import { TrashIcon } from '@heroicons/react/24/solid'
import { IconButton } from '@material-tailwind/react'
import { FC, memo } from 'react'
import { substring } from '../../../lib/text'

interface FilePreviewProps {
  file: File
  onRemove: () => void
}

const FilePreviewComponent: FC<FilePreviewProps> = ({ file, onRemove }) => {
  return <div className="flex items-center p-2 mt-2 bg-gray-100 rounded dark:bg-gray-800">
    {file.type.startsWith('image/') ? <img
      src={URL.createObjectURL(file)}
      alt={file.name}
      className="h-12 w-12 rounded object-cover mr-4"
    /> : <div className="h-12 w-12 flex items-center justify-center bg-blue-500 text-white rounded mr-4">
      {file.name.split('.').pop()?.toUpperCase()}
    </div>
    }

    <div className="flex-1">
      <p className="text-sm truncate">{substring(file.name)}</p>
      <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
    </div>

    <IconButton
      size="sm"
      color="red"
      onClick={onRemove}
    >
      <TrashIcon className="h-5 w-5" />
    </IconButton>
  </div>
}

const FilePreview = memo(FilePreviewComponent)

export default FilePreview