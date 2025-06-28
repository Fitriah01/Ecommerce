import { ShoppingCart, Star, Users, Award, Play } from "lucide-react";
import { useProducts } from "../context/ProductContext";

function About() {
  const { isDarkMode } = useProducts();


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
                  } mb-8 leading-relaxed`}
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
                        src="/foto kita/foto 4.jpg"
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
                      src="/foto kita/foto11.jpg"
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
                      src="/foto kita/foto22.jpg"
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
                        src="/foto kita/foto 4.jpg"
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
    <h2 className="text-3xl font-bold text-center mb-10 text-orange-500 transition-colors duration-300 hover:text-blue-600">Keunggulan Kirei Mart</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className={`rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 ${isDarkMode ? 'bg-gray-800 border-orange-400' : 'bg-gradient-to-br from-white via-orange-50 to-blue-50 border-orange-200'} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
        <Star className="w-10 h-10 text-orange-500 mb-3" />
        <h3 className="font-semibold text-lg mb-2">Produk Berkualitas</h3>
        <p className={` text-sm transition-colors ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>Setiap produk dipilih dengan teliti dan dijamin kualitasnya.</p>
      </div>
      <div className={`rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 ${isDarkMode ? 'bg-gray-800 border-orange-400' : 'bg-gradient-to-br from-white via-blue-50 to-orange-50 border-orange-200'} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
        <Award className="w-10 h-10 text-blue-500 mb-3" />
        <h3 className="font-semibold text-lg mb-2">Harga Bersahabat</h3>
        <p className={` text-sm transition-colors ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>Kompetitif untuk semua kalangan tanpa mengorbankan mutu.</p>
      </div>
      <div className={`rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 ${isDarkMode ? 'bg-gray-800 border-orange-400' : 'bg-gradient-to-br from-white via-orange-50 to-blue-50 border-orange-200'} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
        <Users className="w-10 h-10 text-orange-500 mb-3" />
        <h3 className="font-semibold text-lg mb-2">Pelayanan Cepat</h3>
        <p className={` text-sm transition-colors ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>Cepat dan ramah, pesanan diproses tanpa menunggu lama.</p>
      </div>
      <div className={`rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 ${isDarkMode ? 'bg-gray-800 border-orange-400' : 'bg-gradient-to-br from-white via-blue-50 to-orange-50 border-orange-200'} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
        <ShoppingCart className="w-10 h-10 text-blue-500 mb-3" />
        <h3 className="font-semibold text-lg mb-2">Lokasi Strategis</h3>
        <p className={` text-sm transition-colors ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>Mudah dijangkau, pengiriman cepat ke seluruh area Palembang.</p>
      </div>
    </div>
  </div>
</section>

{/* Testimoni Pelanggan */}
<section className={`py-16 px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10 text-orange-500 transition-colors duration-300 hover:text-blue-600">Testimoni Pelanggan</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {["Siti, Palembang", "Budi, Kertapati", "Lina, Plaju"].map((name, i) => (
        <div key={i} className={`rounded-2xl shadow p-6 flex flex-col items-center text-center border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-orange-50/60 border-orange-100'} hover:shadow-xl hover:scale-105 transition-all duration-300`}>
          <div className="flex mb-2">
            {[...Array(i === 1 ? 4 : 5)].map((_, j) => <Star key={j} className="w-5 h-5 text-yellow-400" />)}
          </div>
          <p className={` text-sm transition-colors ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>
            {i === 0 ? '"Pelayanan cepat, harga murah, produk selalu fresh!"' :
             i === 1 ? '"Belanja di Kirei Mart selalu puas, adminnya ramah dan pengiriman cepat."' :
             '"Produk lengkap, harga bersaing, cocok untuk langganan bulanan!"'}
          </p>
          <span className="font-semibold text-orange-500">- {name}</span>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Misi & Visi */}
<section className={`py-16 px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-blue-50 via-white to-orange-50'}`}>
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10 text-orange-500 transition-colors duration-300 hover:text-orange-500">Misi & Visi Kirei Mart</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className={`flex flex-col items-center text-center rounded-2xl shadow-lg p-8 border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gradient-to-br from-white via-blue-50 to-orange-50 border-blue-100'} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
        <Award className="w-10 h-10 text-blue-500 mb-3" />
        <h3 className="font-semibold text-lg mb-2">Visi</h3>
        <p className={` text-sm transition-colors ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>Menjadi toko sembako modern yang terpercaya, terjangkau, dan selalu hadir untuk kebutuhan masyarakat Palembang dan sekitarnya.</p>
      </div>
      <div className={`flex flex-col items-center text-center rounded-2xl shadow-lg p-8 border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gradient-to-br from-white via-orange-50 to-blue-50 border-orange-100'} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
        <Users className="w-10 h-10 text-orange-500 mb-3" />
        <h3 className="font-semibold text-lg mb-2">Misi</h3>
        <p className={` text-sm transition-colors ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>Memberikan pelayanan terbaik, produk berkualitas, dan harga bersahabat dengan mengutamakan kepuasan pelanggan serta inovasi berkelanjutan.</p>
      </div>
    </div>
  </div>
</section>

{/* Statistik Tambahan */}
<section className={`py-16 px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10 text-blue-600 dark:text-orange-500 transition-colors duration-300">
      Statistik Kirei's Mart
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {[{
        label: 'Tahun Berdiri', value: '2024'
      }, {
        label: 'Jumlah Karyawan', value: '2'
      }, {
        label: 'Produk Terdaftar', value: '150+'
      }, {
        label: 'Rating Rata-rata', value: '4.9', icon: <Star className="w-6 h-6 text-yellow-400 mr-1" />
      }].map((item, idx) => (
        <div key={idx} className={`rounded-2xl shadow p-6 flex flex-col items-center text-center border transition-all duration-300 hover:shadow-xl hover:scale-105 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-blue-50/60 border-blue-100'}`}>
          {item.icon ? (
            <div className="flex items-center justify-center mb-2">
              {item.icon}
              <span className={`text-3xl font-bold mb-2 transition-colors ${isDarkMode ? "text-white" : "text-gray-900"}`}>{item.value}</span>
            </div>
          ) : (
            <span className={`text-3xl font-bold mb-2 transition-colors ${isDarkMode ? "text-white" : "text-gray-900"}`}>{item.value}</span>
          )}
          <span className={` text-sm transition-colors ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>{item.label}</span>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Bottom Section */}
      <section
        className={`py-2 px-2 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Hapus blok coklat kiri, hanya tampilkan judul di tengah */}
          <div className="flex flex-col items-center justify-center text-center min-h-[400px]">
            <div className="w-12 h-1 bg-orange-500 mb-4"></div>
            <h2 className="text-4xl font-bold mb-6">
              Belanja Hemat Hanya di <span className="text-orange-500">Kirei's Mart </span>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
