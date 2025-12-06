import React from 'react'
import { useTranslation } from 'react-i18next'
import { Martini, Sparkles, Users } from "lucide-react"
import { motion } from 'motion/react'
function About() {
  const { t } = useTranslation()
  return (
    <section id='about' className='md:min-h-110vh grid grid-cols-1 grid-rows-1 lg:grid-cols-2 gap-8 md:gap-14 bg-[#241d1a] px-8 xs:px-12 md:px-[15%] py-24 md:py-[13vh] select-none'>
        <div className='rounded-2xl md:rounded:3xl overflow-hidden  shadow-[0_0_40px_8px_rgba(232,156,48,0.25)] max-h-[400px]'>
            <img src="assets/outside-view.png" className='w-full h-full object-cover object-right' />
        </div>

        <motion.div initial={{opacity:0.2, y:20}} whileInView={{opacity:1, y:0}} transition={{duration: 1.8, ease:"easeOut"}} viewport={{ once:true }} className='flex flex-col gap-8 md:gap-5'>
            {t("navAbout") === "À propos" ? (
                <div className='flex flex-col gap-2 font-bold'> 
                    <h2 className='text-[#e89c30] text-4xl md:text-5xl'>{t("navAbout")} <br /><span className='text-[#f0ece5]'>{t("aboutUs")}</span></h2>
                    <div className='w-20 md:w-24 bg-[#e89c30] h-[3px] rounded-sm'></div>
                </div>
            ) : (                    
            <div className='flex flex-col gap-1 font-bold'>
                <h2 className='text-[#e89c30] text-4xl md:text-5xl'>{t("navAbout")} <span className='text-[#f0ece5]'>{t("aboutUs")}</span></h2>
                <div className='w-24 bg-[#e89c30] h-[3px]'></div>
            </div>)}
            <p className='text-[#a89c8a] text-md'>{t("aboutParagraph")}</p>
            <p className='text-[#a89c8a] text-md'>{t("aboutParagraph2")}</p>
            <div className='flex flex-col gap-5 xl:gap-8'>
                <div className='flex flex-row gap-2 items-center hover:translate-x-2 transition-all duration-300 group'>
                    <div className="w-16  aspect-square rounded-2xl bg-[#38291d] grid place-items-center overflow-hidden shadow-lg text-[#e89c30] group-hover:text-[#38291d] group-hover:bg-[#e89c30] transition-all duration-300">
                        <Martini size={40} />
                    </div>
                    <div className='flex flex-col gap-1 flex-1'>
                        <h4 className='text-[#f0ece5] text-[15px] s:text-[17px] m:text-lg font-semibold'>{t("aboutDrinks")}</h4>
                        <p className='text-[#a89c8a] text-sm'>{t('aboutDrinksP')}</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2 items-center hover:translate-x-2 transition-all duration-300 group'>
                    <div className="w-16 aspect-square rounded-2xl bg-[#38291d] grid place-items-center overflow-hidden shadow-lg text-[#e89c30] group-hover:text-[#38291d] group-hover:bg-[#e89c30] transition-all duration-300">
                        <Sparkles size={40} />
                    </div>
                    <div className='flex flex-col gap-1 flex-1'>
                        <h4 className='text-[#f0ece5] text-[15px] s:text-[17px] m:text-lg font-semibold'>{t("aboutAtm")}</h4>
                        <p className='text-[#a89c8a] text-sm'>{t("aboutAtmP")}</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2 items-center hover:translate-x-2 transition-all duration-300 group'>
                    <div className="w-16 aspect-square rounded-2xl bg-[#38291d] grid place-items-center overflow-hidden shadow-lg text-[#e89c30] group-hover:text-[#38291d] group-hover:bg-[#e89c30] transition-all duration-300">
                        <Users size={40} />
                    </div>
                    <div className='flex flex-col gap-1 flex-1'>
                        <h4 className='text-[#f0ece5] text-[15px] s:text-[17px] m:text-lg font-semibold'>{t("aboutExp")}</h4>
                        <p className='text-[#a89c8a] text-sm'>{t("aboutExpP")}</p>
                    </div>
                </div>
            </div>
        </motion.div>

    </section>
  )
}

export default About
