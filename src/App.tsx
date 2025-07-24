import { useEffect, useState } from "react"
import Card from './components/Card/card.tsx'
import Footer from './components/Footer/footer.tsx'
import Header from './components/Header/header.tsx'
import Navbar from './components/Navbar/navbar.tsx'
import './App.css'

function App() {
  const [allJltpFiveKanji, setAllJlptFiveKanji] = useState([])
  const [jlptFiveKanjiObj, setJlptFiveKanjiObj] = useState([])

  function allKanji(level: string, setState): void {
    useEffect(() => {
      fetch(`https://kanjiapi.dev/v1/kanji/${level}`)
        .then(res => res.json())
        .then(data => setState(data))
    }, [])
  }

  allKanji('jlpt-5', setAllJlptFiveKanji)

  // likewise with this, will need to refactor into a reusable function
  useEffect(() => {
    // use Promise.all to wait for all fetch requests to finish, otherwise it only saves last fetch in array.
    Promise.all(
      allJltpFiveKanji.map(character =>
        fetch(`https://kanjiapi.dev/v1/kanji/${character}`).then(res => res.json())
      )
    ).then(data => setJlptFiveKanjiObj(data))
  }, [allJltpFiveKanji])

  const kanjiCardElements = jlptFiveKanjiObj.map(character =>
    <Card
      learnt={false}
      kanji={character.kanji}
      meanings={character.meanings}
      onReading={character.on_readings}
      kunReading={character.kun_readings}
      strokeCount={character.stroke_count}
      jlpt={character.jlpt}
       />
  )

  return (
    <>
      <Header />
      <div className="main-section">
        <Navbar />
        <main className="all-cards">
          {kanjiCardElements}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
