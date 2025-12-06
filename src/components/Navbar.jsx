import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from "../utils/i18n"
import { scrollToSection } from '../utils/scrollToSection'
import { Menu, X, Globe } from 'lucide-react'

function Navbar({ isMobile }) {
  const { t } = useTranslation()
  const [expand, setExpand] = useState(false)
  const [language, setLanguage] = useState(i18n.language || "fr");

  const setLang = () => {
    const newLang = language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
    document.documentElement.lang = newLang;
  };
  

  const navItems = [
    { label: t("navHome"), id: "home" },
    { label: t("navAbout"), id: "about" },
    { label: t("navHours"), id: "hours" },
    { label: "Menu", id: "menu" },
    { label: "Contact", id: "contact" },
    { label: t("navFind"), id: "find" },
  ]

  const NavLink = ({ label, id, onClick }) => (
    <h5
      className='text-[#f0ece5] hover:text-[#e89c30] transition-all duration-200 cursor-pointer'
      onClick={() => {
        scrollToSection(id)
        if (isMobile && expand) setExpand(false) 
        onClick?.()
      }}
    >
      {label}
    </h5>
  )

  if (isMobile) {
    return expand ? (
      <nav className="fixed flex flex-col gap-4 top-0 left-0 py-3 px-3 w-screen bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] z-50 border border-[#ffffff21]">
        <div className='w-full flex flex-row justify-between'>
          <div className='flex gap-2 items-center'>
            <div className='p-1.5 rounded-full bg-[#121212]' onClick={() => setLang()}>
              <Globe className='text-[#e89c30]' size={22} strokeWidth={1.5}/> 
            </div>
            <h3 className="text-[23px] text-[#e89c30] font-semibold">The Thirsty Monk</h3>
          </div>
          <X className='text-[#f0ece5]' size={32} strokeWidth={1} onClick={() => setExpand(false)}/>
        </div>
        <div className='bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] flex flex-col gap-3 px-4 py-3 text-[#f0ece5] font-[Inter] rounded-2xl overflow-hidden border border-[#ffffff21] text-[18px]'>
          {navItems.map((item) => (
            <NavLink key={item.id} label={item.label} id={item.id} onClick={() => setExpand(false)} />
          ))}
        </div>
      </nav>
    ) : (
      <nav className="fixed top-0 left-0 flex flex-row justify-between items-center p-3 px-3 w-screen bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] z-50 border border-[#ffffff21]">
        
        <div className='flex gap-2 items-center'>
          <div className='p-1.5 rounded-full bg-[#121212]' onClick={() => setLang()}>
            <Globe className='text-[#e89c30]' size={22} strokeWidth={1.5}/> 
          </div>
          <h3 className="text-[23px] text-[#e89c30] font-semibold">The Thirsty Monk</h3>
        </div>

        <Menu className='text-[#f0ece5]' size={30} strokeWidth={1.5} onClick={() => setExpand(true)}/>
      </nav>
    )
  }

  return (
    <nav className='fixed top-0 left-0 flex flex-row justify-center py-4 px-6 xl:px-20 w-screen bg-[#a89c8a1c] backdrop-blur-sm z-50 border border-[#ffffff21] select-none'>
      <div className='max-w-[1380px] w-full flex flex-row justify-between items-center'>
       
        <div className='flex gap-3 items-center'>
          <div className='p-2 rounded-full bg-[#121212]' onClick={() => setLang()}>
            <Globe className='text-[#e89c30]' size={24} strokeWidth={1.5}/> 
          </div>
          <h3 className='text-3xl text-[#e89c30] font-semibold cursor-pointer' onClick={() => scrollToSection('home')}>
            The Thirsty Monk
          </h3>
        </div>
        <div className='flex flex-row gap-8 text-[#f0ece5] text-[18px] font-[Inter]'>
          {navItems.map((item) => (
            <NavLink key={item.id} label={item.label} id={item.id} />
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar