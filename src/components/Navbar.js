import logo from "../assets/image/logo.png"
import logo2 from "../assets/image/logo-2.png"

import "../styles/navbar.css"



function Navbar(){
    return(<header>
        <div className="navbarcolor">
            <div className="absolute inset-0">
                
            </div>
    
            <div className="absolute inset-0 bg-black/30"></div>
    
            <div className="relative px-4 mx-auto sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <a href="#" title="" className="flex">
                            <img className="w-auto h-8 lg:h-10" src={logo} alt="" />
                        </a>
                    </div>
    
                    <button type="button" className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
    
                    <div className="hidden lg:flex lg:items-center lg:space-x-10">
                        <a href="#" title="" className="text-base font-medium text-white"> A Propos </a>
    
                        <a href="#" title="" className="text-base font-medium text-white"> Brochure </a>
    
                    </div>
    
                    <a href="#" title="" className="items-center justify-center hidden px-6 py-3 text-base font-semibold text-black transition-all duration-200 bg-white border border-transparent rounded-md lg:inline-flex" role="button"> Nous Contacter </a>
                </nav>
            </div>
        </div>
    </header>
    )
}

export default Navbar







