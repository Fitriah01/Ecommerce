// Ubah nama file ini dari page.tsx menjadi page.tsx (pastikan file sudah .tsx, jika belum rename ke .tsx)

"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, Search, Menu, X, Star, Gift, MessageCircle, Sun, Moon } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Slider } from "../components/ui/slider"
import { Textarea } from "../components/ui/textarea"


// Types
interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  category: string
  stock: number
  image: string
  description: string
  size: string
  isPromo?: boolean
}

interface CartItem extends Product {
  quantity: number
}

interface Testimonial {
  id: number
  name: string
  rating: number
  comment: string
  avatar: string
}

// Sample Data
const products: Product[] = [
  {
    id: 1,
    name: "Beras Premium 5kg",
    price: 65000,
    originalPrice: 70000,
    category: "bahan-makanan",
    stock: 3,
    image: "/placeholder.svg?height=200&width=200",
    description: "Beras premium kualitas terbaik untuk keluarga",
    size: "5kg",
    isPromo: true,
  },
  {
    id: 2,
    name: "Minyak Goreng Tropical 2L",
    price: 32000,
    category: "bahan-makanan",
    stock: 8,
    image: "/placeholder.svg?height=200&width=200",
    description: "Minyak goreng berkualitas untuk masakan sehari-hari",
    size: "2L",
  },
  {
    id: 3,
    name: "Gula Pasir 1kg",
    price: 15000,
    category: "bahan-makanan",
    stock: 12,
    image: "/placeholder.svg?height=200&width=200",
    description: "Gula pasir murni untuk kebutuhan dapur",
    size: "1kg",
  },
  {
    id: 4,
    name: "Teh Celup Sariwangi",
    price: 8500,
    category: "minuman",
    stock: 15,
    image: "/placeholder.svg?height=200&width=200",
    description: "Teh celup dengan aroma dan rasa yang nikmat",
    size: "25 sachet",
  },
  {
    id: 5,
    name: "Kopi Kapal Api",
    price: 12000,
    category: "minuman",
    stock: 20,
    image: "/placeholder.svg?height=200&width=200",
    description: "Kopi bubuk pilihan untuk pecinta kopi",
    size: "200g",
  },
  {
    id: 6,
    name: "Bumbu Rendang Indofood",
    price: 4500,
    category: "bumbu-masakan",
    stock: 25,
    image: "/placeholder.svg?height=200&width=200",
    description: "Bumbu rendang siap pakai dengan rasa autentik",
    size: "45g",
  },
  {
    id: 7,
    name: "Sabun Mandi Lifebuoy",
    price: 3500,
    category: "nonfood",
    stock: 30,
    image: "/placeholder.svg?height=200&width=200",
    description: "Sabun mandi dengan perlindungan antibakteri",
    size: "85g",
  },
  {
    id: 8,
    name: "Deterjen Rinso 800g",
    price: 18000,
    category: "nonfood",
    stock: 10,
    image: "/placeholder.svg?height=200&width=200",
    description: "Deterjen untuk pakaian bersih dan wangi",
    size: "800g",
  },
]

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ibu Sari",
    rating: 5,
    comment: "Pelayanan sangat baik, produk selalu fresh dan harga terjangkau!",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 2,
    name: "Pak Budi",
    rating: 5,
    comment: "Pengiriman cepat, barang sesuai pesanan. Recommended!",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 3,
    name: "Ibu Maya",
    rating: 4,
    comment: "Stok lengkap, harga bersaing. Jadi langganan nih!",
    avatar: "/placeholder.svg?height=50&width=50",
  },
]

const promoSlides = [
  {
    id: 1,
    title: "Diskon 20% Beras Premium",
    subtitle: "Berlaku hingga akhir bulan",
    image: "/placeholder.svg?height=300&width=600",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: 2,
    title: "Paket Hemat Bulanan",
    subtitle: "Hemat hingga 100rb untuk kebutuhan sebulan",
    image: "/placeholder.svg?height=300&width=600",
    color: "from-green-400 to-blue-500",
  },
  {
    id: 3,
    title: "Gratis Ongkir Min. 50rb",
    subtitle: "Untuk wilayah Jakarta dan sekitarnya",
    image: "/placeholder.svg?height=300&width=600",
    color: "from-pink-400 to-red-500",
  },
]

// Rice animation positions for HeroSection
const ricePositions = [
  { left: "10%", top: "20%", x: 10, duration: 3, delay: 0 },
  { left: "30%", top: "10%", x: -15, duration: 2.5, delay: 0.5 },
  { left: "50%", top: "25%", x: 20, duration: 3.5, delay: 1 },
  { left: "70%", top: "15%", x: -10, duration: 2.8, delay: 1.2 },
  { left: "80%", top: "30%", x: 12, duration: 3.2, delay: 0.7 },


export default function SembakoEcommerce() {
  // States
  const [currentPage, setCurrentPage] = useState("home")
  const [cart, setCart] = useState<CartItem[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000])
  const [showPromoOnly, setShowPromoOnly] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [rewardPoints, setRewardPoints] = useState(150)
  const [isWheelSpinning, setIsWheelSpinning] = useState(false)
  const [cartShake, setCartShake] = useState(false)

  // Contact form state and handlers
  const [contact, setContact] = useState({ name: "", email: "", whatsapp: "", message: "" })
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Pesan Anda telah dikirim! Terima kasih telah menghubungi kami.")
    setContact({ name: "", email: "", whatsapp: "", message: "" })
  }

  // Auto-scroll for promo slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promoSlides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Auto-scroll for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesPromo = !showPromoOnly || product.isPromo

    return matchesSearch && matchesCategory && matchesPrice && matchesPromo
  })

  // Cart functions
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...product, quantity: 1 }]
    })

    // Shake animation
    setCartShake(true)
    setTimeout(() => setCartShake(false), 500)
  }

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId)
      return
    }
    setCart((prev) => prev.map((item) => (item.id === productId ? { ...item, quantity } : item)))
  }

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = subtotal >= 100000 ? subtotal * 0.1 : 0
  const total = subtotal - discount

  // WhatsApp checkout
  const handleWhatsAppCheckout = () => {
    const adminNumber = "6281234567890" // Replace with actual admin number
    let message = "Halo, saya ingin memesan:\n\n"

    cart.forEach((item) => {
      message += `• ${item.name} (${item.size}) - ${item.quantity}x = Rp${(item.price * item.quantity).toLocaleString()}\n`
    })

    message += `\nSubtotal: Rp${subtotal.toLocaleString()}`
    if (discount > 0) {
      message += `\nDiskon (10%): -Rp${discount.toLocaleString()}`
    }
    message += `\nTotal: Rp${total.toLocaleString()}`
    message += `\n\nMohon konfirmasi ketersediaan dan total pembayaran. Terima kasih!`

    const whatsappUrl = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  // Wheel of Fortune
  const spinWheel = () => {
    if (rewardPoints < 50) return

    setIsWheelSpinning(true)
    setRewardPoints((prev) => prev - 50)

    setTimeout(() => {
      setIsWheelSpinning(false)
      const prizes = ["Diskon 5%", "Gratis Ongkir", "Diskon 10%", "Voucher 20rb"]
      const prize = prizes[Math.floor(Math.random() * prizes.length)]
      alert(`Selamat! Anda mendapat ${prize}`)
    }, 3000)
  }

  // Navigation Component
  const Navigation = () => (
    <nav
      className={`sticky top-0 z-50 ${isDarkMode ? "bg-gray-900" : "bg-white"} shadow-lg transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <span className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>Sembako Fresh</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "products", "about", "contact"].map((page) => (
              <motion.button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`capitalize font-medium transition-colors ${
                  currentPage === page
                    ? "text-yellow-500"
                    : isDarkMode
                      ? "text-gray-300 hover:text-yellow-400"
                      : "text-gray-600 hover:text-yellow-500"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {page === "products"
                  ? "Produk"
                  : page === "about"
                    ? "Tentang"
                    : page === "contact"
                      ? "Kontak"
                      : "Beranda"}
              </motion.button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full ${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </motion.button>

            {/* Cart */}
            <motion.div
              className="relative"
              animate={cartShake ? { x: [-2, 2, -2, 2, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="relative">
                    <ShoppingCart className="w-5 h-5" />
                    {cart.length > 0 && (
                      <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs">
                        {cart.reduce((sum, item) => sum + item.quantity, 0)}
                      </Badge>
                    )}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Keranjang Belanja</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    {cart.length === 0 ? (
                      <p className="text-center text-gray-500">Keranjang kosong</p>
                    ) : (
                      <>
                        {cart.map((item) => (
                          <div key={item.id} className="flex items-center justify-between p-2 border rounded">
                            <div className="flex-1">
                              <h4 className="font-medium">{item.name}</h4>
                              <p className="text-sm text-gray-500">Rp{item.price.toLocaleString()}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </Button>
                              <span>{item.quantity}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </Button>
                            </div>
                          </div>
                        ))}
                        <div className="border-t pt-4">
                          <div className="flex justify-between">
                            <span>Subtotal:</span>
                            <span>Rp{subtotal.toLocaleString()}</span>
                          </div>
                          {discount > 0 && (
                            <div className="flex justify-between text-green-600">
                              <span>Diskon (10%):</span>
                              <span>-Rp{discount.toLocaleString()}</span>
                            </div>
                          )}
                          <div className="flex justify-between font-bold text-lg">
                            <span>Total:</span>
                            <span>Rp{total.toLocaleString()}</span>
                          </div>
                          <Button
                            className="w-full mt-4 bg-green-600 hover:bg-green-700"
                            onClick={handleWhatsAppCheckout}
                          >
                            Checkout via WhatsApp
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t"
            >
              <div className="py-4 space-y-2">
                {["home", "products", "about", "contact"].map((page) => (
                  <button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page)
                      setIsMenuOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-2 capitalize ${
                      currentPage === page ? "text-yellow-500 bg-yellow-50" : "text-gray-600"
                    }`}
                  >
                    {page === "products"
                      ? "Produk"
                      : page === "about"
                        ? "Tentang"
                        : page === "contact"
                          ? "Kontak"
                          : "Beranda"}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )

  // Hero Section Component
  const HeroSection = () => (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-100 via-green-50 to-blue-100 min-h-[600px]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating rice grains */}
        {ricePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-3 bg-yellow-200 rounded-full opacity-30"
            animate={{
              y: [0, -20, 0],
              x: [0, pos.x, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: pos.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: pos.delay,
            }}
            style={{
              left: pos.left,
              top: pos.top,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Sembako
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                {" "}
                Fresh
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Kebutuhan sembako segar dan berkualitas untuk keluarga Indonesia. Belanja mudah, harga terjangkau,
              pengiriman cepat!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                onClick={() => setCurrentPage("products")}
              >
                Belanja Sekarang
              </Button>
              <Button size="lg" variant="outline">
                Lihat Promo
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Promo Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 bg-gradient-to-br ${promoSlides[currentSlide].color} flex items-center justify-center text-white`}
                >
                  <div className="text-center p-8">
                    <h3 className="text-3xl font-bold mb-4">{promoSlides[currentSlide].title}</h3>
                    <p className="text-lg opacity-90">{promoSlides[currentSlide].subtitle}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

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
          </motion.div>
        </div>
      </div>

      {/* Animated Shopping Cart */}
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <ShoppingCart className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  )

  // Products Section Component
  const ProductsSection = () => (
    <section className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Produk Pilihan</h2>
          <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Temukan kebutuhan sembako berkualitas dengan harga terjangkau
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Cari produk... (contoh: beras, minyak, gula)"
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Pilih Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kategori</SelectItem>
                <SelectItem value="bahan-makanan">Bahan Makanan</SelectItem>
                <SelectItem value="minuman">Minuman</SelectItem>
                <SelectItem value="bumbu-masakan">Bumbu Masakan</SelectItem>
                <SelectItem value="nonfood">Non-Food</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Rentang Harga: Rp{priceRange[0].toLocaleString()} - Rp{priceRange[1].toLocaleString()}
              </label>
              <Slider value={priceRange} onValueChange={(val: [number, number]) => setPriceRange(val)} max={100000} step={5000} className="w-full" />
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="w-full justify-start text-sm" onClick={() => setShowPromoOnly(!showPromoOnly)}>
                {showPromoOnly ? "Semua Produk" : "Hanya Promo"}
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" layout>
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-xl shadow-lg overflow-hidden border transition-all duration-300`}
              >
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  {product.isPromo && <Badge className="absolute top-2 left-2 bg-red-500 text-white">PROMO</Badge>}
                  {product.stock <= 5 && (
                    <Badge className="absolute top-2 right-2 bg-orange-500 text-white animate-pulse">
                      Tersisa {product.stock}!
                    </Badge>
                  )}
                </div>

                <div className="p-4">
                  <h3 className={`font-semibold text-lg mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    {product.name}
                  </h3>
                  <p className={`text-sm mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {product.description}
                  </p>
                  <p className={`text-xs mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    Ukuran: {product.size}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                        Rp{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          Rp{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  <Button
                    onClick={() => addToCart(product)}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                    disabled={product.stock === 0}
                  >
                    {product.stock === 0 ? "Stok Habis" : "Tambah ke Keranjang"}
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Tidak ada produk yang sesuai dengan pencarian Anda
            </p>
          </div>
        )}
      </div>
    </section>
  )

  // Gamification Section
  const GamificationSection = () => (
    <section className={`py-16 ${isDarkMode ? "bg-gray-800" : "bg-gradient-to-br from-purple-50 to-pink-50"}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Reward Points */}
          <Card className={isDarkMode ? "bg-gray-700" : "bg-white"}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                Poin Reward Anda
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">{rewardPoints}</div>
                <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>
                  Kumpulkan poin untuk mendapat diskon menarik!
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Diskon 5%</span>
                    <span className="text-yellow-500">100 poin</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Diskon 10%</span>
                    <span className="text-yellow-500">200 poin</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gratis Ongkir</span>
                    <span className="text-yellow-500">150 poin</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Wheel of Fortune */}
          <Card className={isDarkMode ? "bg-gray-700" : "bg-white"}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="w-6 h-6 text-pink-500" />
                Wheel of Fortune
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <motion.div
                  className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center"
                  animate={isWheelSpinning ? { rotate: 360 } : {}}
                  transition={{ duration: 3, ease: "easeOut" }}
                >
                  <Gift className="w-16 h-16 text-white" />
                </motion.div>
                <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>
                  Putar roda keberuntungan dan menangkan hadiah menarik!
                </p>
                <Button
                  onClick={spinWheel}
                  disabled={rewardPoints < 50 || isWheelSpinning}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                >
                  {isWheelSpinning ? "Berputar..." : "Putar (50 poin)"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )

  // Testimonials Section
  const TestimonialsSection = () => (
    <section className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Kata Pelanggan</h2>
          <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Kepuasan pelanggan adalah prioritas utama kami
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`${isDarkMode ? "bg-gray-800" : "bg-gray-50"} rounded-xl p-8 text-center`}
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1 }}>
                    <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  </motion.div>
                ))}
              </div>
              <p className={`text-lg mb-6 italic ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                "{testimonials[currentTestimonial].comment}"
              </p>
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Pelanggan Setia</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )

  // About Section
  const AboutSection = () => (
    <section className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className={`text-4xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              Tentang Sembako Fresh
            </h2>
            <p className={`text-lg mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Kami adalah UMKM warung sembako yang berkomitmen menyediakan kebutuhan pokok berkualitas dengan harga
              terjangkau untuk keluarga Indonesia. Dengan pengalaman lebih dari 10 tahun, kami memahami kebutuhan
              masyarakat akan produk sembako yang segar dan terpercaya.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                  Produk Berkualitas
                </h3>
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Semua produk dipilih dengan teliti untuk memastikan kualitas terbaik
                </p>
              </div>

              <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                  Harga Terjangkau
                </h3>
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Kami menawarkan harga yang kompetitif tanpa mengorbankan kualitas
                </p>
              </div>

              <div className={`p-6 rounded-xl ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                  Pelayanan Terbaik
                </h3>
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Tim customer service siap membantu Anda 24/7
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )

  // Contact Section
  const ContactSection = () => (
    <section className={`py-16 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Hubungi Kami</h2>
            <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Ada pertanyaan? Jangan ragu untuk menghubungi kami
            </p>
          </motion.div>

          <Card className={isDarkMode ? "bg-gray-700" : "bg-white"}>
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Nama Lengkap
                  </label>
                  {/* @ts-ignore */}
                  <Input name="name" placeholder="Masukkan nama lengkap Anda" value={contact.name} onChange={handleContactChange} />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Email
                  </label>
                  {/* @ts-ignore */}
                  <Input name="email" type="email" placeholder="Masukkan email Anda" value={contact.email} onChange={handleContactChange} />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Nomor WhatsApp
                  </label>
                  {/* @ts-ignore */}
                  <Input name="whatsapp" placeholder="Masukkan nomor WhatsApp Anda" value={contact.whatsapp} onChange={handleContactChange} />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Pesan
                  </label>
                  {/* @ts-ignore */}
                  <Textarea name="message" placeholder="Tulis pesan Anda di sini..." rows={4} value={contact.message} onChange={handleContactChange} />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                  Kirim Pesan
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className={`font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Alamat Toko</h4>
                    <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                      Jl. Sembako Raya No. 123
                      <br />
                      Jakarta Selatan 12345
                    </p>
                  </div>

                  <div>
                    <h4 className={`font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                      Jam Operasional
                    </h4>
                    <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                      Senin - Sabtu: 08:00 - 20:00
                      <br />
                      Minggu: 09:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )

  // Chatbot Component
  const Chatbot = () => (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2 }}
    >
      <Dialog>
        <DialogTrigger asChild>
          <motion.button
            className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </motion.button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              Bu Sembako - Assistant
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">Halo! Saya Bu Sembako, asisten virtual Anda. Ada yang bisa saya bantu?</p>
            </div>

            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start text-sm">
                🛒 Rekomendasi produk untuk keluarga
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm">
                💰 Info promo dan diskon terbaru
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm">
                📦 Cara berlangganan bulanan
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm">
                🚚 Info pengiriman dan ongkir
              </Button>
            </div>

            <div className="flex gap-2">
              {/* @ts-ignore */}
              <Input placeholder="Ketik pesan Anda..." className="flex-1" />
              <Button size="sm">Kirim</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  )

  // Footer Component
  const Footer = () => (
    <footer className={`${isDarkMode ? "bg-gray-900 border-gray-700" : "bg-gray-800"} text-white py-12 border-t`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Sembako Fresh</span>
            </div>
            <p className="text-gray-300 text-sm">UMKM warung sembako terpercaya untuk kebutuhan keluarga Indonesia</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kategori Produk</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Bahan Makanan</li>
              <li>Minuman</li>
              <li>Bumbu Masakan</li>
              <li>Produk Non-Food</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Pengiriman Cepat</li>
              <li>Langganan Bulanan</li>
              <li>Paket Hemat</li>
              <li>Customer Support</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📱 +62 812-3456-7890</li>
              <li>📧 info@sembakofresh.com</li>
              <li>📍 Jakarta Selatan</li>
              <li>🕒 08:00 - 20:00 WIB</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2024 Sembako Fresh. Semua hak dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  )

  // Main Render
  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      <Navigation />

      {currentPage === "home" && (
        <>
          <HeroSection />
          <ProductsSection />
          <GamificationSection />
          <TestimonialsSection />
        </>
      )}

      {currentPage === "products" && <ProductsSection />}
      {currentPage === "about" && <AboutSection />}
      {currentPage === "contact" && <ContactSection />}

      <Footer />
      <Chatbot />
    </div>
  )
}