import { Inter } from 'next/font/google'
import Navbar from "../components/Navbar";
import Category from "../components/Category";

const inter = Inter({ subsets: ['latin'] })


export default function Homie() {
  return (
    <>
      <Navbar/>
      <div className="body">
       <span> Explore <span style={{color:"#F3573B"}}> More</span></span>
       <Category/>
      </div>
    </>
  )
}
