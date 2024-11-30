import { useState } from 'react'

const useFile = () => {
  const [file, setFile] = useState<File | null>(null)

  const handleChangeFile = (file: File | null) => setFile(file)

  const handleRemoveFile = () => setFile(null)

  return {
    file,
    handleChangeFile,
    handleRemoveFile
  }
}

export default useFile