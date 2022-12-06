import "../styles/section.css"

import logo from "../assets/image/logo.png"
import logo2 from "../assets/image/logo-2.png"

import twitter from "../assets/image/social/twitter.png"
import discord from "../assets/image/social/discord.png"
import linkedin from "../assets/image/social/linkedin.png"

function Header(){
    return(
    <div>
    <section className="relative lg:min-h-[1000px] pt-24 pb-10 sm:pt-20 sm:pb-16 lg:pb-24 section">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
            <div className="flex justify-center max-w-xl mx-auto">
                <img src ={logo2} className="max-h-[20rem] max-h-full transition duration-0 duration-500 hover:duration-500 hover:opacity-75 hover:scale-95"></img>
            </div>
            <div className="text-center mt-10">
            <h1 className="text-4xl font-sans">
                    <span className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"> Lancer votre projet NFT ou votre Crypto ICO avec des spécialistes <mark className='text-blue-500 bg-transparent lg:text-6xl'>Web 3.0</mark></span>
                </h1>
                <h1 className="text-4xl font-sans">
                    <span className="max-w-6xl mx-auto mt-4 text-base leading-relaxed text-gray-300 lg:text-2xl"> Services consultatifs | Stratégie marketing | Gestion de communauté | Services techniques</span>
                </h1>
                <a href="#" title="" className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-blue-600 rounded-md mt-5 hover:bg-blue-700 focus:bg-blue-700" role="button"> Services </a>
                <div className="flex justify-center mt-5">
                <a href="https://www.coin.com"><img src={twitter} className="max-h-[25rem] max-h-full p-5 hover:opacity-60"></img></a>
                <a href="https://www.coin.com"><img src={discord} className="max-h-[25rem] max-h-full p-5 hover:opacity-60"></img></a>
                <a href="https://www.coin.com"><img src={linkedin} className="max-h-[25rem] max-h-full p-5 hover:opacity-60"></img></a>
                </div>
            </div>
        </div>
    </section>
    
</div>

    )
}

export default Header





