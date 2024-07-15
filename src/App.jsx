import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headder from './Components/Headder'
import Navbar from './Components/Navbar'
import SearchBar from './Components/SearchBar'
import FixFirstPart from './Components/FixFirstPart'
import Footer from './Components/Footer'
import MainSection from './Components/MainSection'
import BillingDetails from './Components/BillingDetails'
import ShopingCartPage from './Components/ShopingCartPage'
import CheckoutPage from './Components/CheckoutPage'
import PaySecurelyPage from './Components/PaySecurelyPage'
import VerifyPurchase from './Components/VerifyPurchase'
import Dashboard from './Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headder />
      <Navbar />
      <SearchBar />
      {/* <FixFirstPart /> */}
      {/* <MainSection /> */}
      <Dashboard />
      <Footer />
    </>
  )
}

export default App
