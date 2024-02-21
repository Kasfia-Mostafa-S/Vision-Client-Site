import { Outlet } from "react-router-dom"
import Navbar from "../HomePage/Navbar/Navbar"
import Footer from "../HomePage/Footer/Footer"

const Main = () => {
  return (
    <div>
     <Navbar />
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  )
}

export default Main;


