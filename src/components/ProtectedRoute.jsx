import { Navigate } from "react-router-dom"

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("admin-authenticated") === "true"

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />
  }

  return children
}

export default ProtectedRoute
