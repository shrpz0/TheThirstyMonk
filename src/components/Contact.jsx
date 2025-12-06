import React from 'react'
import { useTranslation } from 'react-i18next'
import { Phone, Mail, MapPin } from 'lucide-react'
import { motion } from 'motion/react'
function Contact() {
    const { t } = useTranslation()
    return (
      <motion.section 
      id="contact" 
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:1.8, ease:"easeOut"}}
      viewport={{ once:true }}
      className='w-screen gap-8 flex flex-col justify-center items-center px-10 py-24 md:px-[15%] md:py-[calc(11*var(--vh))] bg-[#241d1a]'>
          <div className='flex flex-col justify-center items-center w-full select-none'>
              <h2 className='w-full text-4xl md:text-5xl text-[#e89c30] text-center mb-4 font-bold'>{t("contact")} <br /> <span className='text-[#f0ece5]'>{t("us")}</span></h2>
              <div className={`h-[3px] rounded-sm bg-[#e89c30] mb-10 ${t("contact") === "Contactez" ? "w-24" : "w-16"}`}></div>
          </div>
          <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2  gap-12 md:grid-rows-1 w-full'>
             
          <div className='rounded-2xl md:rounded:3xl overflow-hidden shadow-[0_0_40px_8px_rgba(232,156,48,0.25)] max-h-[400px]'>
                  <img src="assets/party.png" className='w-full h-full object-cover object-center' />
          </div>
             
              <div className='flex flex-col gap-4 justify-center items-center'>
  
                  <div className='bg-[#181312] flex flex-row p-4 gap-4 rounded-xl w-full'>
                     <div className="w-12 md:w-14  aspect-square rounded-2xl bg-[#38291d] grid place-items-center overflow-hidden shadow-lg text-[#e89c30] hover:text-[#38291d] hover:bg-[#e89c30] transition-all duration-200">
                          <Phone className='w-6 h-6 md:h-8 md:w-8'/>
                      </div>
                      <div className='flex flex-col justify-center'>
                          <h4 className='text-[#f0ece5] font-[Inter] text-lg'>{t("phone")}</h4>
                          <p>05 81 34 28 15</p>
                      </div>
                  </div>
  
                  <div className='bg-[#181312] flex flex-row p-4 gap-4 rounded-xl w-full'>
                     <div className="w-12 md:w-14  aspect-square rounded-2xl bg-[#38291d] grid place-items-center overflow-hidden shadow-lg text-[#e89c30] hover:text-[#38291d] hover:bg-[#e89c30] transition-all duration-200">
                          <Mail className='w-6 h-6 md:h-8 md:w-8'/>
                      </div>
                      <div className='flex flex-col justify-center'>
                          <h4 className='text-[#f0ece5] font-[Inter] text-lg'>Email</h4>
                          <p className='text-xs text-[10px] s:text-[13px] m:text-base'>info@thirstymonktoulouse.com</p>
                      </div>
                  </div>
  
                  <div className='bg-[#181312] flex flex-row p-4 gap-4 rounded-xl w-full'>
                     <div className="w-12 md:w-14  aspect-square rounded-2xl bg-[#38291d] grid place-items-center overflow-hidden shadow-lg text-[#e89c30] hover:text-[#38291d] hover:bg-[#e89c30] transition-all duration-200">
                          <MapPin className='w-6 h-6 md:h-8 md:w-8'/>
                      </div>
                      <div className='flex flex-col justify-center'>
                          <h4 className='text-[#f0ece5] font-[Inter] text-lg'>{t("adress")}</h4>
                          <p className='text-sm s:text-base'>33 Allée Jean Jaurès</p>
                      </div>
                  </div>
              </div>
  
          </div>
      </motion.section>
    )
  }

export default Contact