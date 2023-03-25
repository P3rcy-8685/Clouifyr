import { Inter } from 'next/font/google'
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import Panel from "../components/carComp";
import Logo from "../bruh.jpg"
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="body">
       <span> Explore <span style={{color:"#F3573B"}}> More</span></span>
       <Category/>
       <Panel image={Logo} name={"Random"} description={"LMAO XD"} download={"Antshant"}/>
      </div>
    </>
  )
}
