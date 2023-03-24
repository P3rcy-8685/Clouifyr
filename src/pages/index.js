import { Inter } from 'next/font/google'
import Navbar from "../components/Navbar";
import {logo} from "./Logo.svg"
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Navbar
        />
    </>
  )
}
