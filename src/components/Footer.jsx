import { ShoppingCart } from "lucide-react"
import { useProducts } from "../context/ProductContext"
import { Link } from "react-router-dom"

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
              <li><Link to="/products?category=bahan-makanan" className="hover:underline">Bahan Makanan</Link></li>
              <li><Link to="/products?category=minuman" className="hover:underline">Minuman</Link></li>
              <li><Link to="/products?category=bumbu-masakan" className="hover:underline">Bumbu Masakan</Link></li>
              <li><Link to="/products?category=nonfood" className="hover:underline">Non-Food</Link></li>
              <li><Link to="/products?category=jajanan" className="hover:underline">Jajanan</Link></li>
              <li><Link to="/products?category=mie" className="hover:underline">Mie</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:underline">Tentang Kami</Link></li>
              <li><Link to="/contact" className="hover:underline">Kontak & Bantuan</Link></li>
              <li><Link to="/products" className="hover:underline">Lihat Produk</Link></li>
              <li><a href="https://wa.me/62887437649899" target="_blank" rel="noopener noreferrer" className="hover:underline">Customer Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="tel:+62887437649899" className="hover:underline">📱 +62 887-4376-49899</a></li>
              <li><a href="mailto:umkmkirei@gmail.com" className="hover:underline">📧 umkmkirei@gmail.com</a></li>
              <li><a href="https://goo.gl/maps/xyz" target="_blank" rel="noopener noreferrer" className="hover:underline">📍 Palembang</a></li>
              <li><span className="">🕒 08:00 - 20:00 WIB</span></li>
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