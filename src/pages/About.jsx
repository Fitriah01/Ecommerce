import {
  ShoppingCart,
  Star,
  Users,
  Award,
  Play,
  Moon,
  Sun,
} from "lucide-react";
import { useState } from "react";

function About({ isDarkMode = false }) {
  // For testing - you can toggle this manually
  const [testDarkMode, setTestDarkMode] = useState(false);

  // Use either passed prop or local state for testing
  const darkMode = isDarkMode || testDarkMode;

  const stats = [
    { number: "10k+", label: "Completed Projects" },
    { number: "15k", label: "Satisfied Customers" },
    { number: "10k+", label: "Years Of Mastery" },
    { number: "45+", label: "Worldwide Honors" },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Temporary Dark Mode Toggle for Testing */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setTestDarkMode(!testDarkMode)}
          className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors shadow-lg"
        >
          {darkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-8">
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
              : "bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50"
          } opacity-90`}
        ></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            Home / About Us
          </p>
        </div>
        {/* Curved Design Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
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
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    OUR STORY
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-6 leading-tight">
                  Your Vision Our Expertise Your Success Get Noticed Generate{" "}
                  <span className="text-orange-500">Leads Dominate.</span>
                </h2>
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  } mb-6 leading-relaxed`}
                >
                  Dengan pengalaman lebih dari 10 tahun dalam industri
                  teknologi, kami telah membantu ribuan klien mencapai tujuan
                  bisnis mereka melalui solusi digital yang inovatif dan
                  strategi pemasaran yang efektif.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`text-2xl font-bold mb-1 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {stat.number}
                    </div>
                    <div
                      className={`text-xs ${
                        darkMode ? "text-gray-400" : "text-gray-500"
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
                  <span className="text-sm">WATCH INTRO</span>
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
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    } rounded-lg h-64 flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20"></div>
                    <div className="relative z-10 text-center">
                      <Users
                        className={`w-12 h-12 mx-auto mb-2 ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      />
                      <span
                        className={`text-xs ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Team Meeting
                      </span>
                    </div>
                  </div>

                  {/* Small image */}
                  <div
                    className={`${
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    } rounded-lg h-32 flex items-center justify-center`}
                  >
                    <Star
                      className={`w-8 h-8 ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  {/* Small image */}
                  <div
                    className={`${
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    } rounded-lg h-32 flex items-center justify-center`}
                  >
                    <Award
                      className={`w-8 h-8 ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    />
                  </div>

                  {/* Tall image */}
                  <div
                    className={`${
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    } rounded-lg h-64 flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20"></div>
                    <div className="relative z-10 text-center">
                      <ShoppingCart
                        className={`w-12 h-12 mx-auto mb-2 ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      />
                      <span
                        className={`text-xs ${
                          darkMode ? "text-gray-300" : "text-gray-600"
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

      {/* Bottom Section */}
      <section
        className={`py-16 px-8 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div
                className={`${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                } rounded-lg h-96 flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20"></div>
                <div className="relative z-10 text-center">
                  <Users
                    className={`w-24 h-24 mx-auto mb-4 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Professional Team
                  </span>
                </div>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg">
                  <Play className="w-8 h-8 text-white ml-1" />
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <div className="w-12 h-1 bg-orange-500 mb-4"></div>
              <h2 className="text-4xl font-bold mb-6">
                Your Gateway To{" "}
                <span className="text-orange-500">Online Excellence</span> Dream
                Big In Pixels.
              </h2>
              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-gray-600"
                } mb-8 leading-relaxed`}
              >
                Kami memahami bahwa setiap bisnis memiliki kebutuhan yang unik.
                Tim ahli kami bekerja sama dengan Anda untuk mengembangkan
                strategi digital yang tepat sasaran dan memberikan hasil yang
                terukur untuk pertumbuhan bisnis Anda.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-5 gap-4 text-center">
                {["2019", "2020", "2021", "2022", "2023"].map((year, index) => (
                  <div key={year}>
                    <div
                      className={`text-2xl font-bold mb-1 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {year}
                    </div>
                    <div
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Growth
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
