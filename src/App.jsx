import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import './App.css'
import Footer from "./Components/Footer"

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App