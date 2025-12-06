import React from 'react'
import { useTranslation } from 'react-i18next'

function MenuItem({ menuItem, category }) {
    const { t } = useTranslation()
    if (category === "Whiskies" || category ==="Snacks") return (
      <div className='menu-card flex flex-col bg-[#1d1715] p-4 gap-1 md:gap-2 rounded-lg text-[#f0ece5] border border-[rgba(255,200,100,0.2)] hover:text-[#e89c30] hover:scale-104 transition-all duration-200'>
          <div className='flex flex-row justify-between w-full'>
  
              <div className='flex flex-row gap-2 justify-center items-center'>
                  {category !== "Snacks" && (<div className={`fib fi-${menuItem.countryCode} flag-circle xs:flag-circle-xs`}></div>)}
                  <h4 className='xs:text-[20px] text-[#f0ece5] font-semibold'>
                      {menuItem.name}
                  </h4>
              </div>
  
              <h4 className='text-lg md:text-2xl text-[#e89c30]'>{menuItem.price !== "0" ? menuItem.price : ""}</h4>
          </div>
          <p className='text-sm md:text-lg text-[#a89c8a] max-w-[85%]'>{t(menuItem.descriptionKey)}</p>
      </div>
    )
  
    if (category === "Gins" || category === "Spirits" || category === "Shots") return (
      <div className='menu-card flex flex-col bg-[#1d1715] p-4 gap-1 md:gap-2 rounded-lg text-[#f0ece5] border border-[rgba(255,200,100,0.2)] hover:text-[#e89c30] hover:scale-104 transition-all duration-200'>
          <div className='flex flex-row justify-between w-full'>
              <div className='flex flex-row gap-2 justify-center items-center'>
                  {category !== "Shots" && (<div className={`fib fi-${menuItem.countryCode} flag-circle xs:flag-circle-xs`}></div>)}
                  <h4 className='xs:text-[20px] md:text-2xl font-semibold'>
                      {menuItem.name}
                  </h4>
              </div>
          </div>
          <p className='text-sm md:text-lg text-[#a89c8a] max-w-[90%]'>{t(menuItem.descriptionKey)}</p>
      </div>
    )
  
    if (category === "Beers") return (
      <div className='menu-card flex flex-col bg-[#1d1715] p-4 gap-1 md:gap-2 rounded-lg text-[#f0ece5] border border-[rgba(255,200,100,0.2)] hover:text-[#e89c30] hover:scale-104 transition-all duration-200'>
          <h4 className='xs:text-[20px] md:text-2xl font-semibold'>
              {menuItem.name}
          </h4>
          <div className='flex flex-col justify-center'>
  
              <div className='flex flex-row justify-between items-center'>
                  <p>25cl</p>
                  <h4 className='md:text-lg text-[#e89c30]'>{menuItem.half_pint}</h4>
              </div>
  
              <div className='h-px bg-[rgba(255,200,100,0.2)] w-full my-1'></div>
  
              <div className='flex flex-row justify-between items-center'>
                  <p>50cl</p>
                  <h4 className='md:text-lg text-[#e89c30]'>{menuItem.pint_standard}</h4>
              </div>
  
              <div className='h-px bg-[rgba(255,200,100,0.2)] w-full my-1'></div>
  
              <div className='flex flex-row justify-between'>
                  <p>50cl (Happy Hour)</p>
                  <h4 className='md:text-lg text-[#e89c30]'>{menuItem.pint_happy}</h4>
              </div>
          </div>
      </div>
    )
  
  }
  
  export default MenuItem