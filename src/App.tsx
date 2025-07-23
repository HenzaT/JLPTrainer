import { useEffect, useState } from "react"
import Card from './components/Card/card.tsx'
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

  const allCards = allJltpFiveKanji.map(character =>
    <Card kanji={character} />
  )

  return (
    <>
      <Header />
      <Navbar />
      <main>
        {allCards}
      </main>
      <Footer />
    </>
  )
}

export default App
