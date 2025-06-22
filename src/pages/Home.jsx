"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ShoppingCart, Star } from "lucide-react"
import { FaGooglePlay, FaApple } from "react-icons/fa"
import { useProducts } from "../context/ProductContext"
import ProductCard from "../components/ProductCard"

function Home() {
  const { products, isDarkMode } = useProducts()
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()

  const promoSlides = [
    {
      id: 1,
      title: "Diskon 20% Beras Premium",
      subtitle: "Berlaku hingga akhir bulan",
      color: "from-yellow-400 to-orange-500",
      image: "//promo/beras-premium.jpg",
    },
    {
      id: 2,
      title: "Paket Hemat Mingguan",
      subtitle: "Hemat Sabun Nuvo Isi 4 Hanya 6000",
      color: "from-green-400 to-blue-500",
      image: "/PaketNuvo.png",
    },
    {
      id: 3,
      title: "Gratis Ongkir Min. 50rb",
      subtitle: "Untuk wilayah Jakarta dan sekitarnya",
      color: "from-pink-400 to-red-500",
      image: "//promo/gratis-ongkir.jpg",
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Ibu Sari",
      rating: 5,
      comment: "Pelayanan sangat baik, produk selalu fresh dan harga terjangkau!",
    },
    {
      id: 2,
      name: "Pak Budi",
      rating: 5,
      comment: "Pengiriman cepat, barang sesuai pesanan. Recommended!",
    },
    {
      id: 3,
      name: "Ibu Maya",
      rating: 4,
      comment: "Stok lengkap, harga bersaing. Jadi langganan nih!",
    },
  ]

  // Auto-scroll for promo slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promoSlides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const featuredProducts = products.slice(0, 4)

  return (
    <div className={`${isDarkMode ? "bg-gray-900" : "bg-white"} transition-colors duration-300`}>
      {/* Hero Section */}
      <section className={`relative min-h-[650px] flex items-center justify-center py-10 transition-colors duration-300 ${isDarkMode ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700" : "bg-gradient-to-br from-yellow-50 via-orange-50 to-blue-100"}`}>
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Left Side */}
          <div className={`flex flex-col justify-center rounded-3xl shadow-2xl p-10 backdrop-blur-md border h-full transition-colors duration-300 ${isDarkMode ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-yellow-100"}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg text-center">
              <span className={`${isDarkMode ? "text-white" : "text-gray-900"} block tracking-tight`}>
                Belanja <span className="relative px-2">
                  <span className={`bg-yellow-200 rounded px-2 py-1 absolute left-0 top-1/2 -translate-y-1/2 w-full h-full -z-10 blur-sm opacity-60 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}></span>
                  Hemat
                </span>
                , Hidup Nikmat
              </span>
              <span className={`block text-lg md:text-xl font-semibold mt-2 mb-2 tracking-wide ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                Hanya di
              </span>
              <span
                className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x font-extrabold tracking-wider"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "gradient-x 3s ease-in-out infinite",
                  letterSpacing: "0.05em"
                }}
              >
                Kirei's Mart
              </span>
            </h1>
            <style>
              {`
                @keyframes gradient-x {
                  0%, 100% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                }
              `}
            </style>
            <p className={`text-lg mb-8 font-medium text-center transition-colors duration-300 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
              Dari dapur ke meja makan, semua jadi mudah dan menyenangkan dengan Kirei's Mart.
            </p>
            <div className="flex gap-4 mb-10 justify-center">
              <button
               className={`px-8 py-3 rounded-xl font-bold shadow hover:scale-105 transition border-2 ${isDarkMode ? "bg-gray-900 border-yellow-500 text-yellow-300 hover:bg-gray-800" : "bg-white border-yellow-400 text-yellow-700 hover:bg-yellow-50"}`}
                onClick={() => navigate("/products")}
              >
                Order Now
              </button>
              <button
                className={`px-8 py-3 rounded-xl font-bold shadow hover:scale-105 transition border-2 ${isDarkMode ? "bg-gray-900 border-yellow-500 text-yellow-300 hover:bg-gray-800" : "bg-white border-yellow-400 text-yellow-700 hover:bg-yellow-50"}`}
                onClick={() => navigate("/products")}
              >
                Menu
              </button>
            </div>
            <div className="flex gap-2 justify-center">
              {/* Promo Sabun Nuvo */}
              <div
                className="bg-gradient-to-br from-yellow-200 via-yellow-100 to-orange-100 rounded-2xl p-4 flex flex-col items-center w-40 shadow-lg border border-yellow-300 cursor-pointer hover:scale-105 hover:shadow-xl transition space-y-2"
                onClick={() => navigate("/Contact")}
              >
                <img src="/PaketNuvo.png" alt="" className="w-24 h-24 object-contain" />
                <span className="text-lg font-bold text-yellow-900">Diskon Hebat!</span>
                <span className="text-sm text-yellow-700 text-center">Paket 4 Sabun Nuvo Rp.6000</span>
              </div>
              {/* Paket Hampers */}
              <div
                className="bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100 rounded-2xl p-4 flex flex-col items-center w-40 shadow-lg border border-purple-200 cursor-pointer hover:scale-105 hover:shadow-xl transition space-y-2"
                onClick={() => navigate("/Contact")}
              >
                <img src="/hampers-removebg-preview.png" alt="Beverages" className="w-24 h-24 object-contain" />
                <span className="text-lg font-semibold text-purple-800">Paket Terlaris!</span>
                <span className="text-sm text-purple-700 text-center">Favorit pelanggan kami!</span>
              </div>
              {/* Paket Hemat */}
              <div
                className="bg-gradient-to-br from-orange-200 via-orange-100 to-yellow-100 rounded-2xl p-4 flex flex-col items-center w-40 shadow-lg border border-orange-200 cursor-pointer hover:scale-105 hover:shadow-xl transition space-y-2"
                onClick={() => navigate("/Contact")}
              >
                <img src="/hemat-removebg-preview.png" alt="Paket Hemat" className="w-24 h-24 object-contain" />
                <span className="text-lg font-semibold text-orange-800">Paket Hemat</span>
                <span className="text-sm text-orange-700 text-center">Isi lengkap, harga bersahabat
                </span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className={`flex items-center justify-center rounded-3xl shadow-2xl p-0 backdrop-blur-md border h-full transition-colors duration-300 ${isDarkMode ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-yellow-100"}`}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/Utama.jpg"
                  alt="Courier"
                  className="w-full h-full max-w-[500px] max-h-[580px] object-center rounded-2xl shadow-xl"
                  style={{
                    background: "#fff",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 1.5px 8px 0 rgba(0,0,0,0.10)"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Produk Pilihan</h2>
            <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Temukan kebutuhan sembako berkualitas dengan harga terjangkau
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-block"
            >
              Lihat Semua Produk
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-16 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Kata Pelanggan</h2>
            <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Kepuasan pelanggan adalah prioritas utama kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`${isDarkMode ? "bg-gray-700" : "bg-white"} rounded-xl p-6 shadow-lg`}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className={`text-center mb-4 italic ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  "{testimonial.comment}"
                </p>
                <p className={`text-center font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
