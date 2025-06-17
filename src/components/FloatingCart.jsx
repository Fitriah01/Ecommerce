"use client"

import { useState } from "react"
import { ShoppingCart, X, Plus, Minus } from "lucide-react"
import { useProducts } from "../context/ProductContext"

function FloatingCart() {
  const [isOpen, setIsOpen] = useState(false)
  const { cart, cartItemsCount, cartTotal, updateCartQuantity, removeFromCart, clearCart } = useProducts()
  const [showCheckoutForm, setShowCheckoutForm] = useState(false)
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [customerAddress, setCustomerAddress] = useState("")
  const [deliveryMethod, setDeliveryMethod] = useState("")

  const handleOpenCheckoutForm = () => {
    setShowCheckoutForm(true)
  }

  const handleWhatsAppCheckout = (e) => {
    e.preventDefault()
    const adminNumber = "6287879060790"
    let message = "PESANAN BARU KIREI'S MART\n"
    message += `Nama: ${customerName}\n`
    message += `No HP: ${customerPhone}\n`
    message += `Alamat: ${customerAddress}\n`
    message += `Pengiriman: ${deliveryMethod}\n\n`
    message += `Detail Pesanan:\n\n`
    cart.forEach((item) => {
      message += `${item.name} x ${item.quantity} = Rp${(item.price * item.quantity).toLocaleString()}\n`
    })
    if (discount > 0) {
      message += `\nDiskon (10%): -Rp${discount.toLocaleString()}\n`
    }
    message += `\nTotal Pembayaran: Rp${total.toLocaleString()}\n\n`
    message += `Terima kasih sudah berbelanja di Kireis Mart!`
    const whatsappUrl = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setShowCheckoutForm(false)
    setIsOpen(false)
    clearCart()
  }

  const subtotal = cartTotal
  const discount = subtotal >= 100000 ? subtotal * 0.1 : 0
  const total = subtotal - discount

  return (
    <>
      {/* Floating Cart Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 relative"
        >
          <ShoppingCart className="w-6 h-6" />
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
              {cartItemsCount}
            </span>
          )}
        </button>
      </div>

      {/* Cart Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[80vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-bold">Keranjang Belanja</h2>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="p-4 max-h-96 overflow-y-auto">
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Keranjang kosong</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-500">Rp{item.price.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 hover:bg-red-100 text-red-500 rounded ml-2"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t p-4">
                <div className="space-y-2 mb-4">
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
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total:</span>
                    <span>Rp{total.toLocaleString()}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <button
                    onClick={handleOpenCheckoutForm}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Checkout via WhatsApp
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Kosongkan Keranjang
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Checkout Form Modal */}
      {showCheckoutForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h2 className="text-xl font-bold mb-4">Checkout</h2>
            <form onSubmit={handleWhatsAppCheckout} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nama</label>
                <input type="text" required value={customerName} onChange={e => setCustomerName(e.target.value)} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">No HP</label>
                <input type="text" required value={customerPhone} onChange={e => setCustomerPhone(e.target.value)} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Alamat</label>
                <textarea required value={customerAddress} onChange={e => setCustomerAddress(e.target.value)} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Metode Pengiriman</label>
                <select required value={deliveryMethod} onChange={e => setDeliveryMethod(e.target.value)} className="w-full border rounded px-3 py-2">
                  <option value="">Pilih Metode</option>
                  <option value="Ambil ke toko">Ambil ke toko</option>
                  <option value="Antar ke alamat">Antar ke alamat</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <button type="button" onClick={() => setShowCheckoutForm(false)} className="px-4 py-2 bg-gray-200 rounded">Batal</button>
                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Checkout via WhatsApp</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default FloatingCart
