import React from 'react'
import { useTranslation } from 'react-i18next'
import { Clock, Calendar, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'


function OpeningHours() {
  const { t } = useTranslation()

  return (
    <section id='opening-hours' className='bg-[linear-gradient(180deg,hsl(20_14%_8%)_0%,hsl(20_18%_12%)_100%)] md:py-[11vh] px-8 m:px-12 py-24 md:px-[28%] select-none'>
      <div className='flex flex-col justify-center items-center gap-8 md:gap-12'>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className='flex flex-col items-center text-center'
        >
          <div className='bg-[#38291d] p-4 xs:p-5 rounded-full w-fit mb-4 border border-[#e89c30]/20'>
            <Clock className='text-[#e89c30] w-8 h-8 xs:w-10 xs:h-10' />
          </div>
          <h2 className='text-3xl xs:text-4xl md:text-5xl text-[#e89c30] mb-4 font-bold leading-tight'>
            {t("opening")} <br />
            <span className='text-[#f0ece5]'>{t("hours")}</span>
          </h2>
          <div className='h-[3px] rounded-sm bg-[#e89c30] w-24' />
        </motion.div>

        <div className='flex flex-col gap-5 w-full max-w-2xl mx-auto'>

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9, rotateY: -20 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className='flex flex-row justify-between items-center bg-[#211b18] px-2 py-6 s:px-4 md:px-6 rounded-2xl border border-[rgba(255,200,100,0.2)] shadow-xl hover:shadow-2xl hover:shadow-[#e89c30]/10 transition-all duration-500 preserve-3d'
          >
            <div className='flex flex-row items-center gap-2 m:gap-3 md:gap-5'>
              <Calendar className='text-[#a89c8a] w-5 h-5 md:w-8 md:h-8' />
              <h4 className='text-[14px] xs:text-base m:text-lg md:text-xl font-semibold text-[#f0ece5]'>Monday - Friday</h4>
            </div>
            <h5 className='text-[#a89c8a] text-[14px] xs:text-base s:text-base m:text-lg md:text-xl font-bold'>12h30 - 01h30</h5>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.9, rotateY: -20 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className='flex flex-row justify-between items-center bg-[#211b18] px-2 py-6 s:px-4 md:px-6 rounded-2xl border border-[rgba(255,200,100,0.2)] shadow-xl hover:shadow-2xl hover:shadow-[#e89c30]/10 transition-all duration-500 preserve-3d'
          >
            <div className='flex flex-row items-center gap-2 m:gap-3 md:gap-5'>
              <Calendar className='text-[#a89c8a] w-5 h-5 md:w-8 md:h-8' />
              <h4 className='text-[14px] xs:text-base m:text-lg md:text-xl font-semibold text-[#f0ece5]'>Saturday</h4>
            </div>
            <h5 className='text-[#a89c8a] text-[14px] xs:text-base s:text-base m:text-lg md:text-xl font-bold'>12h30 - 02h30</h5>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.9, rotateY: -20 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className='flex flex-row justify-between items-center bg-[#211b18] px-2 py-6 s:px-4 md:px-6 rounded-2xl border border-[rgba(255,200,100,0.2)] shadow-xl hover:shadow-2xl hover:shadow-[#e89c30]/10 transition-all duration-500 preserve-3d'
          >
            <div className='flex flex-row items-center gap-2 m:gap-3 md:gap-5'>
              <Calendar className='text-[#a89c8a] w-5 h-5 md:w-8 md:h-8' />
              <h4 className='text-[14px] xs:text-base m:text-lg md:text-xl font-semibold text-[#f0ece5]'>Sunday</h4>
            </div>
            <h5 className='text-[#a89c8a] text-[14px] xs:text-base s:text-base m:text-lg md:text-xl font-bold'>12h30 - 01h30</h5>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.9, rotateY: -20 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className='flex flex-row justify-between items-center bg-[#211b18] px-2 py-6 s:px-4 md:px-6 rounded-2xl border border-[rgba(255,200,100,0.2)] shadow-xl hover:shadow-2xl hover:shadow-[#e89c30]/10 transition-all duration-500 preserve-3d'
          >
            <div className='flex flex-row items-center gap-2 s:gap-3'>
              <div className='p-1 md:p-2 bg-[#e89c30]/20 rounded-md m:rounded-lg border border-[#e89c30]/40'>
                <Sparkles className='w-4 h-4 md:w-6 md:h-6 text-[#e89c30]' />
              </div>
              <h4 className='text-[14px] xs:text-base m:text-lg md:text-xl  font-bold text-[#e89c30] drop-shadow-md'>Happy Hour</h4>
            </div>
            <h5 className='text-[14px] xs:text-base s:text-base m:text-lg md:text-xl font-black text-[#e89c30] drop-shadow-lg'>17h30 - 19h30</h5>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default OpeningHours
