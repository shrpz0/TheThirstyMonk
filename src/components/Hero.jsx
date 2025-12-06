import React from 'react'
import Navbar from './Navbar.jsx'
import { useTranslation } from 'react-i18next'
import { scrollToSection } from '../utils/scrollToSection'
import { motion } from "motion/react"
import { ChevronDown } from 'lucide-react'

function Hero({ isMobile }) {
  const { t } = useTranslation()
  return (
    <section id="hero" className={`relative ${isMobile ? 'h-[calc(var(--vh)*100)]' : 'h-screen'} select-none`}>
        <Navbar isMobile={isMobile}/>
        <div
            className="absolute inset-0 bg-cover bg-center bg-black opacity-35 blur-xs"
            style={{ backgroundImage: `url(/assets/hero_bg.png)` }}
        />

        <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/50 to-background/90" />

        <div className="relative flex flex-col justify-center items-center h-full px-12 md:px-[20vw] lg:px-[30vw] gap-4 md:gap-8">
            
            <motion.h1
            initial={{ opacity: 0.1, x: -75 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="text-[40px]/[40px] line md:text-7xl text-[#f0ece5] text-center font-bold">

                The <br /> <span className="text-[#e89c30] font-[Playfair Display]">Thirsty Monk</span>

            </motion.h1>

            <motion.p 
            initial={{ opacity: 0.1, x: 75 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="text-[#a89c8a] text-[22px] md:text-2xl text-center mb-2">
                {t("heroParagraph")}
            </motion.p>

            <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 3, ease: "easeOut" }}
             className='flex flex-col md:flex-row gap-4 w-full px-4 lg:px-[10%] max-w-[800px]'>
                <button onClick={() => scrollToSection('menu')} className='flex-1 bg-[#e89c30] text-[#181312] rounded-lg p-2 py-3 font-[Inter] hover:bg-[#d48312] transition-all duration-200 font-semibold cursor-pointer'>{t("heroDiscoverMenu")}</button>
                <button onClick={() => scrollToSection('find')} className='flex-1 bg-[#181312] text-[#e89c30] rounded-lg p-2 py-3 font-[Inter] border border-[#e89c30] hover:bg-[#e89c30] hover:text-[#181312] transition-all duration-200 font-semibold cursor-pointer'>{t("navFind")}</button>
            </motion.div>
        </div>
        <div className="absolute bottom-2 flex flex-row justify-center w-full">
            <ChevronDown onClick={() => scrollToSection('about')} size={64} strokeWidth={1.2} className='animate-bounce cursor-pointer text-[#e89c30]'/>
        </div>



    </section>

  )
}

export default Hero