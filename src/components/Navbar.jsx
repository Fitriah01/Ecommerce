"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Sun, Moon, ShoppingCart } from "lucide-react"
import { useProducts } from "../context/ProductContext"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { isDarkMode, toggleDarkMode, cartItemsCount } = useProducts()

  const navItems = [
    { path: "/", label: "Beranda" },
    { path: "/products", label: "Produk" },
    { path: "/about", label: "Tentang" },
    { path: "/contact", label: "Kontak" },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav
      className={`sticky top-0 z-50 ${isDarkMode ? "bg-gray-900" : "bg-white"} shadow-lg transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <span className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>Kirei's Mart</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-yellow-500"
                    : isDarkMode
                      ? "text-gray-300 hover:text-yellow-400"
                      : "text-gray-600 hover:text-yellow-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full hover:scale-110 transition-transform ${
                isDarkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>

            {/* Admin Button menggantikan Cart Icon */}
            <Link
              to="/admin/login"
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-yellow-500 hover:to-orange-500 transition-colors duration-300 shadow-md`}
              title="Admin Login"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75A4.5 4.5 0 008 6.75v3.75m8.25 0a2.25 2.25 0 11-4.5 0m4.5 0h-4.5m-2.25 6.75a6.75 6.75 0 1113.5 0v.75a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75v-.75z" />
              </svg>
            </Link>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${isDarkMode ? "text-white" : "text-gray-600"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isDarkMode ? "text-white" : "text-gray-600"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 transition-colors ${
                  isActive(item.path)
                    ? "text-yellow-500 bg-yellow-50"
                    : isDarkMode
                      ? "text-gray-300 hover:text-yellow-400"
                      : "text-gray-600 hover:text-yellow-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
