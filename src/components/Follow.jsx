import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaInstagram, FaFacebook } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { motion } from 'motion/react'
function Follow() {
  const { t } = useTranslation()
  return (
    <motion.section initial={{opacity: 0, y:20}} whileInView={{opacity: 1, y:0}} viewport={{ once:true }} transition={{ duration: 1.8, ease: "easeOut"}}
        className='w-screen flex flex-col justify-center items-center px-10 py-20 md:px-[20%] md:py-[16vh] bg-[#241d1a]'>
        <div className='flex flex-col justify-center items-center w-full select-none'>
            <h2 className='w-full text-4xl md:text-5xl text-[#e89c30] text-center mb-4 font-bold'>{t("follow")} <br /> <span className='text-[#f0ece5]'>{t("us")}</span></h2>
            <div className={`h-[3px] rounded-sm bg-[#e89c30] mb-6 ${t("soicals") === "Suivez" ? "w-20" : "w-12"}`}></div>
            <p className='text-md md:text-lg text-center mb-10'>{t("stayCo")}</p>
        </div>
        <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 w-full gap-8'>
            <a 
                href="https://www.instagram.com/thethirstymonktoulouse" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col justify-between items-center gap-2 px-18 py-6 bg-[#211b18] border border-[rgba(255,200,100,0.2)] rounded-lg text-[#f0ece5] hover:scale-105 hover:text-[#e89c30] transition-all duration-300 group"
            >
                <div className='bg-[#38291d] text-[#e89c30] group-hover:bg-[#e89c30] group-hover:text-[#38291d] p-4 rounded-full w-fit transition-all duration-300'>
                <FaInstagram className='size-8 '/>
                </div>
                <h4 className='text-xl text-[#f0ece5] font-semibold group-hover:text-[#e89c30]'>Instagram</h4>
                <p className='text-lg'>@thethirstymonktoulouse</p>
            </a>
            <a 
                href="https://www.facebook.com/thethirstymonk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col justify-between items-center gap-2 px-18 py-6 bg-[#211b18] border border-[rgba(255,200,100,0.2)] rounded-lg text-[#f0ece5] hover:scale-105 hover:text-[#e89c30] group transition-all duration-300"
            >
                <div className='bg-[#38291d] text-[#e89c30] group-hover:text-[#211b18] group-hover:bg-[#e89c30] p-4 rounded-full w-fit transition-all duration-300'>
                <FaFacebook className='size-8'/>
                </div>
                <h4 className='text-[#f0ece5] text-xl font-semibold group-hover:text-[#e89c30]'>Facebook</h4>
                <p className='text-lg'>thethirstymonk</p>
            </a>
            </div>



    </motion.section>
  )
}

export default Follow