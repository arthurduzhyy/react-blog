import { FC, ReactNode, useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate()

  const user = localStorage.getItem("user")

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  }, [user, navigate])

  return <>{children}</>
}

export default ProtectedRoute