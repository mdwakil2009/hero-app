import Link from 'next/link';
import React from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';

const Navber = () => {
     return (
          <div>
               <nav className='flex justify-between items-center py-4 container mx-auto'>
                    <Image src={logo} alt='Hero app logo' className="h-[60px] w-[60px]"></Image>
                    <ul className='flex items-center gap-4'>
                         <li className='font-semibold hover:text-blue-500'><Link href="/">Home</Link></li>
                         <li className='font-semibold hover:text-blue-500'><Link href="/apps">Apps</Link></li>
                         <li className='font-semibold hover:text-blue-500'><Link href="/installation">Installation</Link></li>
                    </ul>
                    <button className="btn btn-success">Contribute</button>
               </nav>
          </div>
     );
};

export default Navber;