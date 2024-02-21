import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

const Home = () => {
  return (
    <div>
     <Navbar />
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  )
}

export default Home


