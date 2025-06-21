import { ShoppingCart, Star, Users, Award, Play } from "lucide-react";
import { useProducts } from "../context/ProductContext";

function About() {
  const { isDarkMode } = useProducts();

  const stats = [
    { number: "10k+", label: "Transaksi jual beli online maupun offline" },
    { number: "11k", label: "Komentar pelanggan puas" },
  ];

  const teamMembers = [
    { name: "John Doe", role: "CEO & Founder" },
    { name: "Jane Smith", role: "CTO" },
    { name: "Mike Johnson", role: "Lead Developer" },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Content starts here - navbar controls dark mode */}

      {/* Hero Section */}
      <section className="relative py-20 px-8">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
              : "bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50"
          } opacity-90`}
        ></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
            About Us
          </p>
        </div>
        {/* Curved Design Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                } opacity-20 rounded-full`}
                style={{
                  width: `${300 + i * 100}px`,
                  height: `${300 + i * 100}px`,
                  right: `-${150 + i * 50}px`,
                  top: `${-100 + i * 30}px`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-1 bg-orange-500 mr-4"></div>
                  <span
                    className={`text-sm font-medium ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    OUR STORY
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-6 leading-tight">
                  Kirei's Mart,{" "}
                  <span className="text-orange-500">
                    belanja di Kirei, dompet tetap tebel, hati tetap ceria!
                  </span>
                </h2>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } mb-6 leading-relaxed`}
                >
                  Toko Sembako Kirei adalah solusi belanja kebutuhan pokok
                  harian yang mudah, cepat, dan terpercaya untuk keluarga
                  Indonesia. Sebagai UMKM yang berfokus pada penjualan sembako,
                  Kirei menyediakan berbagai produk kebutuhan sehari-hari
                  seperti beras, minyak goreng, gula, telur, tepung, air
                  mineral, kopi, hingga lampu. Harga bersaing dan kualitas
                  terjamin
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`text-2xl font-bold mb-1 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {stat.number}
                    </div>
                    <div
                      className={`text-xs ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Team Avatars */}
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 border-2 border-white flex items-center justify-center"
                    >
                      <span className="text-white text-xs font-bold">
                        {String.fromCharCode(65 + i)}
                      </span>
                    </div>
                  ))}
                </div>
                <button className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
                  <Play className="w-4 h-4" />
                  <span className="text-sm"></span>
                </button>
              </div>
            </div>

            {/* Right Content - Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  {/* Main image placeholder */}
                  <div
                    className={`${
                      isDarkMode ? "bg-gray-700" : "bg-gray-200"
                    } rounded-lg h-64 flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20"></div>
                    <div className="relative z-10 text-center">
                      {/* Ganti ikon dengan foto */}
                      <img
                        src="/foto kita/foto 1.jpg"
                        alt="Team Kami"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <span
                        className={`text-xs ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        TEAM KAMI
                      </span>
                    </div>
                  </div>

                  {/* Small image */}
                  <div
                    className={`${
                      isDarkMode ? "bg-gray-700" : "bg-gray-200"
                    } rounded-lg h-32 flex items-center justify-center`}
                  >
                    {/* Ganti ikon dengan foto */}
                    <img
                      src="/foto kita/foto 2.jpg"
                      alt="Star"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  {/* Small image */}
                  <div
                    className={`${
                      isDarkMode ? "bg-gray-700" : "bg-gray-200"
                    } rounded-lg h-32 flex items-center justify-center`}
                  >
                    {/* Ganti ikon dengan foto */}
                    <img
                      src="/foto kita/foto 2.jpg"
                      alt="Award"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Tall image */}
                  <div
                    className={`${
                      isDarkMode ? "bg-gray-700" : "bg-gray-200"
                    } rounded-lg h-64 flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20"></div>
                    <div className="relative z-10 text-center">
                      {/* Ganti ikon dengan foto */}
                      <img
                        src="/foto kita/foto 3.jpg"
                        alt="E-commerce"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <span
                        className={`text-xs ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        E-commerce
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Keunggulan Toko */}
<section className={`py-16 px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-orange-50 via-white to-blue-50'}`}>
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10 text-orange-500">Keunggulan Kirei Mart</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className={`rounded-xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-orange-400 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <Star className="w-10 h-10 text-orange-500 mb-3" />
        <h3 className="font-semibold text-lg mb-2">Produk Berkualitas</h3>
        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-400"} text-sm`}>Setiap produk dipilih dengan teliti dan dijamin kualitasnya.</p>
      </div>
      <div className={`rounded-xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-orange-400 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <Award className="w-10 h-10 text-blue-500 mb-3" />
        <h3 className="font-semibold text-lg mb-2">Harga Bersahabat</h3>
        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-400"} text-sm`}> kompetitif untuk semua kalangan tanpa mengorbankan mutu.</p>
      </div>
      <div className={`rounded-xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-orange-400 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <Users className="w-10 h-10 text-orange-500 mb-3" />
        <h3 className="font-semibold text-lg mb-2">Pelayanan Cepat</h3>
        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-400"} text-sm`}>Respon cepat dan ramah, pesanan diproses tanpa menunggu lama.</p>
      </div>
      <div className={`rounded-xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-orange-400 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <ShoppingCart className="w-10 h-10 text-blue-500 mb-3" />
        <h3 className="font-semibold text-lg mb-2">Lokasi Strategis</h3>
        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-400"} text-sm`}>Mudah dijangkau, pengiriman cepat ke seluruh area Palembang.</p>
      </div>
    </div>
  </div>
</section>

{/* Testimoni Pelanggan */}
<section className={`py-16 px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10 text-orange-500">Testimoni Pelanggan</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className={`rounded-xl shadow p-6 flex flex-col items-center text-center ${isDarkMode ? 'bg-gray-800' : 'bg-orange-50'}`}>
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400" />)}
        </div>
        <p className={`${isDarkMode ? "text-gray-200" : "text-gray-500"} mb-2 italic`}>"Pelayanan cepat, harga murah, produk selalu fresh!"</p>
        <span className="font-semibold text-orange-500">- Siti, Palembang</span>
      </div>
      <div className={`rounded-xl shadow p-6 flex flex-col items-center text-center ${isDarkMode ? 'bg-gray-800' : 'bg-orange-50'}`}>
        <div className="flex mb-2">
          {[...Array(4)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400" />)}
        </div>
        <p className={`${isDarkMode ? "text-gray-200" : "text-gray-500"} mb-2 italic`}>"Belanja di Kirei Mart selalu puas, adminnya ramah dan pengiriman cepat."</p>
        <span className="font-semibold text-orange-500">- Budi, Kertapati</span>
      </div>
      <div className={`rounded-xl shadow p-6 flex flex-col items-center text-center ${isDarkMode ? 'bg-gray-800' : 'bg-orange-50'}`}>
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400" />)}
        </div>
        <p className={`${isDarkMode ? "text-gray-200" : "text-gray-500"} mb-2 italic`}>"Produk lengkap, harga bersaing, cocok untuk langganan bulanan!"</p>
        <span className="font-semibold text-orange-500">- Lina, Plaju</span>
      </div>
    </div>
  </div>
</section>

{/* Misi & Visi */}
<section className={`py-16 px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-blue-50 via-white to-orange-50'}`}>
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Misi & Visi Kirei Mart</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className={`flex flex-col items-center text-center rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <Award className="w-10 h-10 text-blue-500 mb-3" />
        <h3 className="font-semibold text-lg mb-2">Visi</h3>
        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}text-2xl`}>Menjadi toko sembako modern yang terpercaya, terjangkau, dan selalu hadir untuk kebutuhan masyarakat Palembang dan sekitarnya.</p>
      </div>
      <div className={`flex flex-col items-center text-center rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <Users className="w-10 h-10 text-orange-500 mb-3" />
        <h3 className="font-semibold text-lg mb-2">Misi</h3>
        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}text-2xl`}>Memberikan pelayanan terbaik, produk berkualitas, dan harga bersahabat dengan mengutamakan kepuasan pelanggan serta inovasi berkelanjutan.</p>
      </div>
    </div>
  </div>
</section>

{/* Statistik Tambahan */}
<section className={`py-16 px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Statistik Kirei Mart</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div className={`rounded-xl shadow p-6 flex flex-col items-center text-center ${isDarkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
        <span className="text-3xl font-bold text-blue-600 mb-2">2020</span>
        <span className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Tahun Berdiri</span>
      </div>
      <div className={`rounded-xl shadow p-6 flex flex-col items-center text-center ${isDarkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
        <span className="text-3xl font-bold text-blue-600 mb-2">12</span>
        <span className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Jumlah Karyawan</span>
      </div>
      <div className={`rounded-xl shadow p-6 flex flex-col items-center text-center ${isDarkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
        <span className="text-3xl font-bold text-blue-600 mb-2">150+</span>
        <span className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Produk Terdaftar</span>
      </div>
      <div className={`rounded-xl shadow p-6 flex flex-col items-center text-center ${isDarkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
        <div className="flex items-center justify-center mb-2">
          <Star className="w-6 h-6 text-yellow-400 mr-1" />
          <span className="text-3xl font-bold text-blue-600">4.9</span>
        </div>
        <span className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Rating Rata-rata</span>
      </div>
    </div>
  </div>
</section> 

      {/* Bottom Section */}
      <section
        className={`py-1 px-8 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Hapus blok coklat kiri, hanya tampilkan judul di tengah */}
          <div className="flex flex-col items-center justify-center text-center min-h-[400px]">
            <div className="w-20 h-1 bg-orange-500 mb-4"></div>
            <h2 className="text-4xl font-bold mb-6">
              Kirei goes <span className="text-orange-500">Online</span> Dream
              Big In Pixels.
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
