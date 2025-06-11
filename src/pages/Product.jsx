"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { useProducts } from "../context/ProductContext"
import ProductCard from "../components/ProductCard"

function Product() {
  const { products, isDarkMode } = useProducts()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [showPromoOnly, setShowPromoOnly] = useState(false)

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

  const categories = [
    { value: "all", label: "Semua Kategori" },
    { value: "bahan-makanan", label: "Bahan Makanan" },
    { value: "minuman", label: "Minuman" },
    { value: "bumbu-masakan", label: "Bumbu Masakan" },
    { value: "nonfood", label: "Non-Food" },
  ]

  return (
    <div className={`min-h-screen py-8 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Produk Kami</h1>
          <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Temukan kebutuhan sembako berkualitas dengan harga terjangkau
          </p>
        </div>

        {/* Search and Filters */}
        <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-xl p-6 mb-8 shadow-lg`}>
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${
                  isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"
                }`}
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={`px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${
                isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"
              }`}
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            {/* Price Range */}
            <div>
              <label className={`block text-sm font-medium mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Harga Maksimal: Rp{priceRange[1].toLocaleString()}
              </label>
              <input
                type="range"
                min="0"
                max="100000"
                step="5000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number.parseInt(e.target.value)])}
                className="w-full"
              />
            </div>

            {/* Promo Filter */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="promo-only"
                checked={showPromoOnly}
                onChange={(e) => setShowPromoOnly(e.target.checked)}
                className="rounded"
              />
              <label htmlFor="promo-only" className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Hanya Promo
              </label>
            </div>
          </div>

          <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Menampilkan {filteredProducts.length} dari {products.length} produk
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Tidak ada produk yang sesuai dengan pencarian Anda
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Product
