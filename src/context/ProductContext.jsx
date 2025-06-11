"use client"

import { createContext, useContext, useReducer, useEffect } from "react"

const ProductContext = createContext()

const initialState = {
  products: [
    {
      id: 1,
      name: "Beras Premium 5kg",
      price: 65000,
      originalPrice: 70000,
      category: "bahan-makanan",
      stock: 3,
      image: "/placeholder.svg?height=200&width=200",
      description: "Beras premium kualitas terbaik untuk keluarga",
      size: "5kg",
      isPromo: true,
      lastUpdated: new Date().toISOString(),
    },
    {
      id: 2,
      name: "Minyak Goreng Tropical 2L",
      price: 32000,
      category: "bahan-makanan",
      stock: 8,
      image: "/placeholder.svg?height=200&width=200",
      description: "Minyak goreng berkualitas untuk masakan sehari-hari",
      size: "2L",
      lastUpdated: new Date().toISOString(),
    },
    {
      id: 3,
      name: "Gula Pasir 1kg",
      price: 15000,
      category: "bahan-makanan",
      stock: 12,
      image: "/placeholder.svg?height=200&width=200",
      description: "Gula pasir murni untuk kebutuhan dapur",
      size: "1kg",
      lastUpdated: new Date().toISOString(),
    },
    {
      id: 4,
      name: "Teh Celup Sariwangi",
      price: 8500,
      category: "minuman",
      stock: 15,
      image: "/placeholder.svg?height=200&width=200",
      description: "Teh celup dengan aroma dan rasa yang nikmat",
      size: "25 sachet",
      lastUpdated: new Date().toISOString(),
    },
    {
      id: 5,
      name: "Kopi Kapal Api",
      price: 12000,
      category: "minuman",
      stock: 20,
      image: "/placeholder.svg?height=200&width=200",
      description: "Kopi bubuk pilihan untuk pecinta kopi",
      size: "200g",
      lastUpdated: new Date().toISOString(),
    },
    {
      id: 6,
      name: "Bumbu Rendang Indofood",
      price: 4500,
      category: "bumbu-masakan",
      stock: 25,
      image: "/placeholder.svg?height=200&width=200",
      description: "Bumbu rendang siap pakai dengan rasa autentik",
      size: "45g",
      lastUpdated: new Date().toISOString(),
    },
    {
      id: 7,
      name: "Sabun Mandi Lifebuoy",
      price: 3500,
      category: "nonfood",
      stock: 30,
      image: "/placeholder.svg?height=200&width=200",
      description: "Sabun mandi dengan perlindungan antibakteri",
      size: "85g",
      lastUpdated: new Date().toISOString(),
    },
    {
      id: 8,
      name: "Deterjen Rinso 800g",
      price: 18000,
      category: "nonfood",
      stock: 5,
      image: "/placeholder.svg?height=200&width=200",
      description: "Deterjen untuk pakaian bersih dan wangi",
      size: "800g",
      lastUpdated: new Date().toISOString(),
    },
  ],
  cart: [],
  isDarkMode: false,
}

function productReducer(state, action) {
  switch (action.type) {
    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, ...action.payload.updates, lastUpdated: new Date().toISOString() }
            : product,
        ),
      }
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
      }
    case "ADD_TO_CART":
      const existingItem = state.cart.find((item) => item.id === action.payload.id)
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        }
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      }
    case "UPDATE_CART_QUANTITY":
      if (action.payload.quantity === 0) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        }
      }
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item,
        ),
      }
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      }
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      }
    default:
      return state
  }
}

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("sembako-cart")
    if (savedCart) {
      const cartItems = JSON.parse(savedCart)
      cartItems.forEach((item) => {
        dispatch({ type: "ADD_TO_CART", payload: item })
      })
    }
  }, [])

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("sembako-cart", JSON.stringify(state.cart))
  }, [state.cart])

  const value = {
    ...state,
    dispatch,
    // Helper functions
    updateProduct: (id, updates) => dispatch({ type: "UPDATE_PRODUCT", payload: { id, updates } }),
    deleteProduct: (id) => dispatch({ type: "DELETE_PRODUCT", payload: id }),
    addToCart: (product) => dispatch({ type: "ADD_TO_CART", payload: product }),
    removeFromCart: (id) => dispatch({ type: "REMOVE_FROM_CART", payload: id }),
    updateCartQuantity: (id, quantity) => dispatch({ type: "UPDATE_CART_QUANTITY", payload: { id, quantity } }),
    clearCart: () => dispatch({ type: "CLEAR_CART" }),
    toggleDarkMode: () => dispatch({ type: "TOGGLE_DARK_MODE" }),
    // Computed values
    totalProducts: state.products.length,
    totalStock: state.products.reduce((sum, product) => sum + product.stock, 0),
    totalInventoryValue: state.products.reduce((sum, product) => sum + product.price * product.stock, 0),
    lowStockProducts: state.products.filter((product) => product.stock < 10),
    cartTotal: state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    cartItemsCount: state.cart.reduce((sum, item) => sum + item.quantity, 0),
  }

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export function useProducts() {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider")
  }
  return context
}
