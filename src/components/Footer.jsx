import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { scrollToSection } from '../utils/scrollToSection'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()
  const quickLinks = [
    { label: t("navHome"), id: 'home' },
    { label: t("navAbout"), id: 'about' },
    { label: "Contact", id: 'contact' },
    { label: "Menu", id: 'menu' },
    { label: t("navFind"), id: 'find' },
  ]

  return (
    <section id="footer" className='w-screen bg-[#181312] border-t border-[rgba(255,200,100,0.2)]'>
        <div className='flex flex-col md:flex-row md:justify-around gap-12 md:gap-20 px-10 py-16 md:px-[20%] md:py-[8vh]'>
            <div className='flex flex-col gap-4 text-[#f0ece5] select-none'>
                <h4 className='text-lg mb-2 text-[#f0ece5]'>{t("quickLinks")}</h4>
                {quickLinks.map(link => (
                  <p 
                    key={link.id}
                    className='cursor-pointer hover:text-[#e89c30] transition-colors'
                    onClick={() => scrollToSection(link.id)}
                  >
                    {link.label}
                  </p>
                ))}
            </div>

            <div className='flex flex-col gap-4 text-[#f0ece5]'>
                <h4 className='text-lg mb-2 select-none'>Contact</h4>
                <div className='flex flex-row items-start gap-3'>
                    <MapPin className='text-[#e89c30bd] w-5 xs:w-6'/>
                    <p>33 Allée Jean Jaurès, Toulouse</p>
                </div>
                <div className='flex flex-row items-start gap-3'>
                    <Phone className='text-[#e89c30bd] w-5 xs:w-6'/>
                    <p>05 81 34 28 15</p>
                </div>
                <div className='flex flex-row items-start gap-3'>
                    <Mail className='text-[#e89c30bd] w-5 xs:w-6'/>
                    <p className='text-[13px] xs:text-[15px]'>info@thirstymonktoulouse.com</p>
                </div>
            </div> 
        </div>
        <div className='mx-6 md:mx-12 flex flex-col justify-center items-center pb-12 gap-6 '>
            <div className='bg-[rgba(255,200,100,0.2)] h-px w-full'></div>
            <p className='text-[#a89c8a]'>© 2025 The Thirsty Monk</p>
        </div>
    </section>
  )
}

export default Footer