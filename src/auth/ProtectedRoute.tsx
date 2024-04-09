import { useAuth0 } from "@auth0/auth0-react"
import { Loader2 } from "lucide-react"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0()
  
  if (isLoading) {
    return (
      <div className=" h-screen flex justify-center items-center -mt-20">
        <Loader2 color="orange" className="w-10 h-10 animate-spin" />
      </div>
    )
  }

  if (isAuthenticated) {
    return <Outlet/>
  }

  return <Navigate to="/" replace />
  
  /*return isAuthenticated ? (
    <Outlet/>
  ) : (
    <Navigate to="/" replace />
  ) */
}

export default ProtectedRoute
