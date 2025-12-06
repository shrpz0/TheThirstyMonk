import { useTranslation } from 'react-i18next'
import useIsMobile from './hooks/useIsMobile'
import './App.css'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import OpeningHours from './components/OpeningHours.jsx'
import Menu from './components/Menu.jsx'
import Contact from './components/Contact.jsx'
import Find from './components/Find.jsx'
import Follow from './components/Follow.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const { t } = useTranslation()
  const isMobile = useIsMobile()

  return (
    <div className='w-screen p-0 m-0 min-h-screen'> 
      <section id="home"><Hero isMobile={isMobile}/></section>
      <section id="about"><About/></section>
      <section id="hours"><OpeningHours/></section>
      <section id="menu"><Menu/></section>
      <section id="contact"><Contact/></section>
      <section id="find"><Find/></section>
      <section id="follow"><Follow/></section>
      <section id="footer"><Footer/></section>
    </div>
  )
}

export default App
