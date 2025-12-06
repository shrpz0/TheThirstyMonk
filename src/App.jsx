import { useTranslation } from 'react-i18next'
import useIsMobile from './hooks/useIsMobile'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import OpeningHours from './components/OpeningHours'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Find from './components/Find'
import Follow from './components/Follow'
import Footer from './components/Footer'

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
