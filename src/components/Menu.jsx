import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import MenuItem from './MenuItem.jsx'
import { whiskies } from '../data/whiskies'
import { beers } from '../data/beers'
import { spirits } from '../data/spirits'
import { shots } from '../data/shots'
import { snacks } from '../data/snacks'
import { gins } from '../data/gins'

function Menu() {
    const { t } = useTranslation()
    const [category, setCategory] = useState("Whiskies")
    const [expand, setExpand] = useState(false)
    const menuRef = useRef(null)
  
    const handleToggleExpand = () => {
      setExpand(!expand)
  
      if (expand) {
      menuRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })}
    }
    return (
      <section id='menu' className='bg-[#181312] py-18 px-12 md:py-[12vh] md:min-h-screen md:px-[16%] flex flex-col items-center select-none' ref={menuRef}>
          <div className='flex flex-col justify-center items-center'>
           <h2 className='text-4xl md:text-5xl text-[#e89c30] text-center mb-4 font-bold'>{t("our")} <br /> <span className='text-[#f0ece5]'>{t("menu")}</span></h2>
           <div className='h-[3px] rounded-sm bg-[#e89c30] w-20 mb-10'></div>
          </div>
          <div className='grid grid-cols-2 grid-rows-3 md:grid-rows-1 md:grid-cols-6  bg-[#1e1816] text-[#a89c8a] p-2 rounded-lg font-[Inter]'>
              <div onClick = {() => {
              setCategory("Whiskies") 
              setExpand(false)
          }} 
               className={`py-2 px-2 md:px-12  rounded-md w-full text-center ${category === "Whiskies" && "bg-[#e89c30] text-[#181312]"}`}>
                  <h5>Whiskies</h5>
              </div>
              <div onClick = {() => {
                  setCategory("Gins")
                  setExpand(false)
              }}  
               className={`py-2 px-6 rounded-md w-full  text-center ${category === "Gins" && "bg-[#e89c30] text-[#181312]"}`}>
                  <h5>Gins</h5>
              </div>
  
  
              <div onClick = {() => {
                  setCategory("Spirits")
                  setExpand(false)
              }}  
               className={`py-2 px-6 rounded-md w-full text-center ${category === "Spirits" && "bg-[#e89c30] text-[#181312]"}`}>
                  <h5>{t("spiritsT")}</h5>
              </div>
  
  
              <div onClick = {() => {
                  setCategory("Shots")
                  setExpand(false)
              }}  
               className={`py-2 px-6 rounded-md w-full text-center ${category === "Shots" && "bg-[#e89c30] text-[#181312]"}`}>
                  <h5>Shots</h5>
              </div>
  
              <div onClick = {() => {
                  setCategory("Beers")
                  setExpand(false)
              }}  
               className={`py-2 px-6 rounded-md w-full text-center ${category === "Beers" && "bg-[#e89c30] text-[#181312]"}`}>
                  <h5>{t("beer")}</h5>
              </div>
  
              <div onClick = {() => {
                  setCategory("Snacks")
                  setExpand(false)
              }}  
               className={`py-2 px-6 rounded-md w-full text-center ${category === "Snacks" && "bg-[#e89c30] text-[#181312]"}`}>
                  <h5>Snacks</h5>
              </div>
  
          </div>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-10 mb-5'>
              {category === "Whiskies" && (expand 
                  ? 
                      (whiskies.map(whiskey => <MenuItem menuItem={whiskey} category={category} key={whiskey.id}/>))
                  : 
                      (whiskies.slice(0, 4).map(whiskey => <MenuItem menuItem={whiskey} category={category} key={whiskey.id}/>)))}
  
              {category === "Gins" && (expand 
                  ? 
                      (gins.map(gin => <MenuItem menuItem={gin} category={category} key={gin.id}/>))
                  : 
                      (gins.slice(0, 4).map(gin => <MenuItem menuItem={gin} category={category} key={gin.id}/>)))}
              
              {category === "Beers" && (expand 
                  ? 
                      (beers.map(beer => <MenuItem menuItem={beer} category={category} key={beer.id}/>))
                  : 
                      (beers.slice(0,4).map(beer => <MenuItem menuItem={beer} category={category} key={beer.id}/>)))}
  
              {category === "Spirits" && (expand 
                  ? 
                      (spirits.map(spirit => <MenuItem menuItem={spirit} category={category} key={spirit.id}/>))
                  : 
                      (spirits.slice(0, 4).map(spirit => <MenuItem menuItem={spirit} category={category} key={spirit.id}/>)))}
  
              {category === "Shots" && (expand 
                  ? 
                      (shots.map(shot => <MenuItem menuItem={shot} category={category} key={shot.id}/>))
                  : 
                      (shots.slice(0,4).map(shot => <MenuItem menuItem={shot} category={category} key={shot.id}/>)))}
          
          {category === "Snacks" && (expand 
                  ? 
                      (snacks.map(snack => <MenuItem menuItem={snack} category={category} key={snack.id}/>))
                  : 
                      (snacks.slice(0, 4).map(snack => <MenuItem menuItem={snack} category={category} key={snack.id}/>)))}
  
          </div>
          <button onClick={handleToggleExpand} className='bg-[#1d1715] text-[#a89c8a] rounded-lg w-full py-4 font-[Inter] border border-[rgba(255,200,100,0.2)] hover:bg-[#e89c30] hover:text-[#181312] transition-all duration-200 font-semibold cursor-pointer'>{expand ? "Hide" : "See More"}</button>
      </section>
    )
  }
  
export default Menu
