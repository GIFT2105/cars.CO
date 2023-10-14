import Link from "next/link";
import Image from "next/image";



const NavBar = () => (
  <header className='w-full bg-red-600   absolute z-10'>
    <nav className='max-w-[1440px] h-14 flex-row      mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent   '>
   <h1 className="text-white font-pacifico  text-4xl   " >Cars.co.za</h1>
   <ul className="flex flex-row gap-10 text-white">
   <li className="">Buy Car  <span className="text-xs font-sans  ml-2">v</span></li>
   <li>Car Specials</li>
   <li>Sell Car</li>
   <li>News & Reviews <span className="text-xs font-sans  ml-2">v</span></li>
   <li>Services and Tools <span className="text-xs font-sans  ml-2">v</span></li>
   <li>Car Dealers<span className="text-xs font-sans  ml-2">v</span></li>
   <p>Wishlist</p>
   </ul>
    </nav>
  </header>
);

export default NavBar;
