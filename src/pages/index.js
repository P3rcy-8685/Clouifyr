import { Inter } from 'next/font/google'
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import Panel from "../components/carComp";
const inter = Inter({ subsets: ['latin'] })


export default function Homie() {
  return (
    <>
      <Navbar/>
      <div className="body">
       <span> Explore <span style={{color:"#F3573B"}}> More</span></span>
       <Category/>
       <Panel image={Logo} name={"God of War"} description={"Father calls his son boy because he has issues"}/>
      </div>
    </>
  )
}
