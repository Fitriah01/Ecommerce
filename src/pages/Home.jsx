"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ShoppingCart, Star } from "lucide-react"
import { useProducts } from "../context/ProductContext"
import ProductCard from "../components/ProductCard"

function Home() {
  const { products, isDarkMode } = useProducts()
  const [currentSlide, setCurrentSlide] = useState(0)

  const promoSlides = [
    {
      id: 1,
      title: "Diskon 20% Beras Premium",
      subtitle: "Berlaku hingga akhir bulan",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: 2,
      title: "Paket Hemat Bulanan",
      subtitle: "Hemat hingga 100rb untuk kebutuhan sebulan",
      color: "from-green-400 to-blue-500",
    },
    {
      id: 3,
      title: "Gratis Ongkir Min. 50rb",
      subtitle: "Untuk wilayah Jakarta dan sekitarnya",
      color: "from-pink-400 to-red-500",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-100 via-green-50 to-blue-100 min-h-[600px]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-3 bg-yellow-200 rounded-full opacity-30 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                Kirei's
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                  {" "}
                  Mart
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Kebutuhan sembako berkualitas untuk keluarga. Belanja mudah, harga terjangkau,
                pengiriman cepat!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-center"
                >
                  Belanja Sekarang
                </Link>
                <button className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Lihat Promo
                </button>
              </div>
            </div>

            {/* Right Content - Promo Slider */}
            <div className="relative animate-fade-in-right">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${promoSlides[currentSlide].color} flex items-center justify-center text-white transition-all duration-500`}
                >
                  <div className="text-center p-8">
                    <h3 className="text-3xl font-bold mb-4">{promoSlides[currentSlide].title}</h3>
                    <p className="text-lg opacity-90">{promoSlides[currentSlide].subtitle}</p>
                  </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {promoSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Shopping Cart */}
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
          <ShoppingCart className="w-8 h-8 text-white" />
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
