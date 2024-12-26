import { useState } from 'react'
import logo from '../assets/download.png' 

export default function Navbar() {
    const [isOpen,setOpen] = useState<boolean>(false)
  return (
    <nav className='w-screen'>
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
                <ul className='flex justify-evenly items-center h-full'>
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
                className={`${isOpen?'rotate-90':'rotate-0'} transition-transform duration-300`}
            >
                111
            </div>
        </div>
        <div className={`${isOpen?'translate-x-0':'-translate-x-full'} transition-all duration-300`}>
            <ul className='py-6 px-5 font-semibold flex flex-col gap-7 text-2xl'>
                <li>
                    <div className='h-8 w-16 border-2 border-black rounded-full'>
                        <div className='h-full w-1/2 border-2 border-red-600 rounded-full'>

                        </div>
                    </div>
                </li>
                <li className='active:bg-gray-300 py-3'>Home</li>
                <li className='active:bg-gray-300 py-3'>Saved Quotes</li>
            </ul>
        </div>
    </nav>
  )
}
