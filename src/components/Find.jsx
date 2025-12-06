import React from 'react'
import { Navigation2 } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
function Find() {
  const { t } = useTranslation()
  return (
    <motion.section initial={{opacity: 0, y:20}} whileInView={{opacity: 1, y:0}} viewport={{ once:true }} 
    transition={{ duration: 1.8, ease: "easeOut"}}
    className='w-screen md:min-h-[110vh] gap-8 flex flex-col justify-center items-center px-10 py-20 md:px-[15%] md:py-[8vh] bg-[#181312]'>
        <div className='flex flex-col gap-12 w-full'>
            <div className='flex flex-col items-center'>
                <div className='bg-[#38291d] p-4 md:p-5 rounded-full w-fit mb-4'>
                    <Navigation2 className='text-[#e89c30] w-8 h-8 md:w-10 md:h-10'/>
                </div>
                <h2 className='select-none text-3xl xs:text-4xl md:text-5xl text-[#e89c30] text-center mb-4 font-bold'>{t("find")} {t("find") === "Trouvez" ? <br /> : null} {t("find") === "Trouver" ? <span className='text-[#f0ece5]'>{t("us")}</span> : t("us")}</h2>
                <div className={"h-[3px] rounded-sm bg-[#e89c30] w-24"}></div>
            </div>
            <div className='flex flex-col gap-4 items-center'>
                <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.9709552411687!2d1.4474995761295935!3d43.60714635540846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebc98e4bc9f9d%3A0xd8ac0f62ab4aaae5!2sThirsty%20Monk!5e0!3m2!1sru!2sfr!4v1764768066308!5m2!1sru!2sfr" 
                        className="w-full h-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <h4 className='text-[#a8a197] font-[Inter] text-center'><span className='font-bold'>{t("metro")}</span> Jean Jaurès {t("findUsMetroLines")} <br /> {t("walkTime")}</h4>
            </div>
        </div>

    </motion.section>
  )
}

export default Find