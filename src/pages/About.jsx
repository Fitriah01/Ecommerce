import { ShoppingCart, Star, Users, Award } from "lucide-react"
import { useProducts } from "../context/ProductContext"

function About() {
  const { isDarkMode } = useProducts()

  const features = [
    {
      icon: ShoppingCart,
      title: "Produk Berkualitas",
      description: "Semua produk dipilih dengan teliti untuk memastikan kualitas terbaik",
    },
    {
      icon: Star,
      title: "Harga Terjangkau",
      description: "Kami menawarkan harga yang kompetitif tanpa mengorbankan kualitas",
    },
    {
      icon: Users,
      title: "Pelayanan Terbaik",
      description: "Tim customer service siap membantu Anda 24/7",
    },
    {
      icon: Award,
      title: "Terpercaya",
      description: "Lebih dari 10 tahun melayani kebutuhan sembako keluarga Indonesia",
    },
  ]

  const stats = [
    { number: "10+", label: "Tahun Pengalaman" },
    { number: "1000+", label: "Pelanggan Puas" },
    { number: "50+", label: "Jenis Produk" },
    { number: "24/7", label: "Customer Support" },
  ]

  return (
    <div className={`min-h-screen py-8 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            Tentang Sembako Fresh
          </h1>
          <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Kami adalah UMKM warung sembako yang berkomitmen menyediakan kebutuhan pokok berkualitas dengan harga
            terjangkau untuk keluarga Indonesia. Dengan pengalaman lebih dari 10 tahun, kami memahami kebutuhan
            masyarakat akan produk sembako yang segar dan terpercaya.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-xl p-6 text-center shadow-lg`}
            >
              <div className="text-3xl font-bold text-yellow-500 mb-2">{stat.number}</div>
              <div className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                {feature.title}
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-xl p-8 shadow-lg`}>
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Misi Kami</h3>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
              Menyediakan produk sembako berkualitas tinggi dengan harga yang terjangkau, memberikan pelayanan terbaik
              kepada pelanggan, dan mendukung pertumbuhan ekonomi lokal melalui kemitraan dengan supplier lokal.
            </p>
          </div>

          <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-xl p-8 shadow-lg`}>
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Visi Kami</h3>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
              Menjadi warung sembako terdepan yang dipercaya oleh keluarga Indonesia dalam memenuhi kebutuhan pokok
              sehari-hari dengan standar kualitas dan pelayanan yang excellence.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-xl p-8 shadow-lg`}>
          <h3 className={`text-2xl font-bold mb-6 text-center ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            Tim Kami
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h4 className={`font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Pak Joko</h4>
              <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Founder & Owner</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h4 className={`font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Bu Siti</h4>
              <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Manager Operasional</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h4 className={`font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Andi</h4>
              <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Customer Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
