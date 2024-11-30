import { useEffect } from 'react'

// https://stackoverflow.com/a/55415722/6620659
const useTitle = (title: string) => {
  useEffect(() => {
    const oldTitle = document.title
    title && (document.title = title.trim() + ' - DDS Blog')
    // following line is optional, but will reset title when component unmounts
    return () => {
      document.title = oldTitle
    }
  }, [title])
}

export default useTitle