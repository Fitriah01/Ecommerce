import { ShoppingCart } from "lucide-react"
import { useProducts } from "../context/ProductContext"

function Footer() {
  const { isDarkMode } = useProducts()

  return (
    <footer className={`${isDarkMode ? "bg-gray-900 border-gray-700" : "bg-gray-800"} text-white py-12 border-t`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Kirei's Mart</span>
            </div>
            <p className="text-gray-300 text-sm">Toko sembako online dengan harga terjangkau.</p>
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
              <li>📱 +62 887-4376-49899</li>
              <li>📧 umkmkirei@gmail.com</li>
              <li>📍 Palembang</li>
              <li>🕒 08:00 - 20:00 WIB</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 Kirei's Mart. Semua hak dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer