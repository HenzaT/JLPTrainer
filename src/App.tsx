import { useEffect, useState } from "react"

import CardContainer from './components/CardContainer/cardContainer.tsx'
import Footer from './components/Footer/footer.tsx'
import Header from './components/Header/header.tsx'
import Navbar from './components/Navbar/navbar.tsx'

import './App.css'

function App() {
  const [allJltpFiveKanji, setAllJlptFiveKanji] = useState([])

  useEffect(() => {
    fetch('https://kanjiapi.dev/v1/kanji/jlpt-5')
      .then(res => res.json())
      .then(data => setAllJlptFiveKanji(data))
  }, [])

  return (
    <>
      <Header />
      <Navbar />
      <CardContainer cards={allJltpFiveKanji} />
      <Footer />
    </>
  )
}

export default App
