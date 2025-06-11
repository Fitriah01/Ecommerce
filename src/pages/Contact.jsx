"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, MessageCircle, ChevronDown, ChevronUp } from "lucide-react"
import { useProducts } from "../context/ProductContext"

function Contact() {
  const { isDarkMode } = useProducts()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [expandedFaq, setExpandedFaq] = useState(null)

  const faqs = [
    {
      question: "Apakah ada pengiriman ke luar kota?",
      answer:
        "Ya, kami melayani pengiriman ke seluruh Indonesia. Untuk pengiriman luar kota, kami menggunakan jasa ekspedisi terpercaya dengan estimasi waktu 2-5 hari kerja tergantung lokasi.",
    },
    {
      question: "Bagaimana cara berlangganan rutin?",
      answer:
        "Anda bisa berlangganan dengan menghubungi customer service kami melalui WhatsApp. Kami menyediakan paket langganan mingguan dan bulanan dengan diskon khusus untuk pelanggan tetap.",
    },
    {
      question: "Apa yang terjadi jika stok habis?",
      answer:
        "Jika stok habis, kami akan segera menghubungi Anda untuk memberikan alternatif produk sejenis atau menunggu restock. Kami juga menyediakan fitur notifikasi ketika produk sudah tersedia kembali.",
    },
    {
      question: "Bagaimana cara pembayaran?",
      answer:
        "Kami menerima pembayaran melalui transfer bank, e-wallet (OVO, GoPay, DANA), dan COD untuk area tertentu. Semua metode pembayaran aman dan terpercaya.",
    },
    {
      question: "Apakah produk dijamin fresh?",
      answer:
        "Ya, semua produk kami dijamin fresh dan berkualitas. Kami melakukan rotasi stok secara rutin dan memiliki sistem penyimpanan yang baik untuk menjaga kualitas produk.",
    },
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleWhatsApp = () => {
    const message = `Halo, saya ingin bertanya tentang produk Sembako Fresh.`
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className={`min-h-screen py-8 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Hubungi Kami</h1>
          <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Ada pertanyaan? Jangan ragu untuk menghubungi kami
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-xl p-8 shadow-lg`}>
            <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${
                    isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"
                  }`}
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${
                    isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"
                  }`}
                  placeholder="Masukkan email Anda"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${
                    isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"
                  }`}
                  placeholder="Masukkan nomor WhatsApp Anda"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Pesan
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${
                    isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"
                  }`}
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Kirim Pesan
              </button>
            </form>

            {/* WhatsApp Button */}
            <div className="mt-6 pt-6 border-t">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat via WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-xl p-8 shadow-lg`}>
              <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                Informasi Kontak
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <div>
                    <p className={`font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>Alamat</p>
                    <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                      Jl. Sembako Raya No. 123, Jakarta Selatan 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  <div>
                    <p className={`font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>Telepon</p>
                    <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>+62 812-3456-7890</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-500" />
                  <div>
                    <p className={`font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>Email</p>
                    <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>info@sembakofresh.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-yellow-500" />
                  <div>
                    <p className={`font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>Jam Operasional</p>
                    <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                      Senin - Sabtu: 08:00 - 20:00 WIB
                      <br />
                      Minggu: 09:00 - 18:00 WIB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-xl p-8 shadow-lg`}>
              <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Lokasi Toko</h2>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7461!2d106.8451!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9b4c8!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1635123456789!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Sembako Fresh"
                />
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-xl p-8 shadow-lg mt-12`}>
          <h2 className={`text-2xl font-bold mb-6 text-center ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className={`border rounded-lg ${isDarkMode ? "border-gray-600" : "border-gray-200"}`}>
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full px-6 py-4 text-left flex items-center justify-between hover:bg-opacity-50 transition-colors ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                  }`}
                >
                  <span className={`font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-yellow-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className={`px-6 pb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
