import { useState } from 'react'
import logo from '../assets/download.png' 
import { GiHamburgerMenu } from "react-icons/gi";
import { useTheme } from '../context/ThemeContext';
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

export default function Navbar() : React.ReactElement{
    const [isOpen,setOpen] = useState<boolean>(false)
    const {dark,setDark} = useTheme()
  return (
    <nav className='w-screen bg-blue-400 text-white fixed top-0 left-0 z-50'>
        {/* For larger Screens */}
        <div className='hidden lg:flex justify-between'>
            <div className='flex items-center gap-4'>
                <div>
                    <img src={logo} alt="Logo" className='h-20 w-20'/>
                </div>
                <div className='font-serif text-4xl'>
                    Quote Crafter
                </div>
            </div>
            <div className='w-2/5 font-semibold text-lg'>
                <ul className='flex justify-evenly items-center h-full cursor-pointer'>
                    <li>Home</li>
                    <li>Saved Quotes</li>
                    <li>Dark Mode</li>
                </ul>
            </div>
        </div>

        {/* For Smaller Screens */}
        <div className='lg:hidden flex items-center justify-between px-2'>
            <div className='flex items-center gap-4'>
                <div>
                    <img src={logo} alt="Logo" className='h-16 w-16'/>
                </div>
                <div className='font-serif text-3xl font-bold'>
                    Quote Crafter
                </div>
            </div>
            <div
                onClick={()=>{
                    setOpen((prev)=>!prev)
                }}
                className={`${isOpen?'rotate-90':'rotate-0'} transition-transform duration-300 text-3xl`}
            >
                <GiHamburgerMenu/>
            </div>
        </div>
        
        <div className={`lg:hidden cursor-pointer fixed left-0 h-full w-screen ${isOpen?'translate-x-0':'-translate-x-full'} transition-all duration-300 z-50 bg-blue-400`}>
            <ul className='px-3 py-5 font-semibold flex flex-col gap-6 text-2xl'>
                <li>
                    <div className='h-10 w-20 border-2 border-white rounded-full'
                    onClick={()=>{
                        setDark(!dark)
                    }}>
                        <div className={`h-full w-1/2 border-2 rounded-full shadow-md shadow-white text-lg flex justify-center items-center ${dark?'translate-x-full rotate-180':'translate-x-0'} transition-all duration-300 `}>
                            {
                                dark?<FiSun/>:<FaMoon/>
                            }
                        </div>
                    </div>
                </li>
                <li className='active:bg-gray-300'>Home</li>
                <li className='active:bg-gray-300'>Saved Quotes</li>
            </ul>
        </div>
    </nav>
  )
}
