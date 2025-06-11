"use client"
import { useProducts } from "../context/ProductContext"

function ProductCard({ product }) {
  const { addToCart, isDarkMode } = useProducts()

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div
      className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-xl shadow-lg overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
    >
      <div className="relative">
        <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
        {product.isPromo && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
            PROMO
          </span>
        )}
        {product.stock <= 10 && (
          <span className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold animate-pulse">
            Tersisa {product.stock}!
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className={`font-semibold text-lg mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>{product.name}</h3>
        <p className={`text-sm mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{product.description}</p>
        <p className={`text-xs mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Ukuran: {product.size}</p>

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

        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
            product.stock === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white hover:scale-105"
          }`}
        >
          {product.stock === 0 ? "Stok Habis" : "Tambah ke Keranjang"}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
