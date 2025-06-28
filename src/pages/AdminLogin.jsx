"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Lock, User, Eye, EyeOff } from "lucide-react"
import { useProducts } from "../context/ProductContext"

function AdminLogin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { isDarkMode } = useProducts()

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
    setError("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate loading
    setTimeout(() => {
      if (credentials.username === "admin" && credentials.password === "kirei123") {
        localStorage.setItem("admin-authenticated", "true")
        localStorage.setItem("admin-login-time", new Date().toISOString())
        navigate("/admin/dashboard")
      } else {
        setError("Username atau password salah!")
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className={`min-h-screen flex items-center justify-center py-12 px-4 transition-colors duration-300 ${
      isDarkMode
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
        : "bg-gradient-to-br from-yellow-100 via-orange-50 to-red-100"
    }`}>
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-10 h-10 text-white" />
          </div>
          <h1
            className={`text-3xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}
          >
            Admin Login
          </h1>
          <p className="text-gray-600">Masuk ke dashboard admin Kirei's Mart</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Masukkan username"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Masukkan password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                isLoading
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white hover:scale-105"
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                  <span>Memproses...</span>
                </div>
              ) : (
                "Masuk"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
