import { useEffect, useState } from "react"
import Card from './components/Card/card.tsx'
import Footer from './components/Footer/footer.tsx'
import Header from './components/Header/header.tsx'
import Navbar from './components/Navbar/navbar.tsx'
import './App.css'

function App() {
  const [allJltpFiveKanji, setAllJlptFiveKanji] = useState([])
  const [allJlptFourKanji, setAllJlptFourKanji] = useState([])
  const [allJlptThreeKanji, setAllJlptThreeKanji] = useState([])
  const [allJlptTwoKanji, setAllJlptTwoKanji] = useState([])
  const [allJlptOneKanji, setAllJlptOneKanji] = useState([])

  const [jlptFiveKanjiObj, setJlptFiveKanjiObj] = useState([])
  const [jlptFourKanjiObj, setJlptFourKanjiObj] = useState([])
  const [jlptThreeKanjiObj, setJlptThreeKanjiObj] = useState([])
  const [jlptTwoKanjiObj, setJlptTwoKanjiObj] = useState([])
  const [jlptOneKanjiObj, setJlptOneKanjiObj] = useState([])

  // function to GET all kanji of a certain jlpt level
  function allKanji(level: string, setKanjiState): void {
    useEffect(() => {
      fetch(`https://kanjiapi.dev/v1/kanji/${level}`)
        .then(res => res.json())
        .then(data => setKanjiState(data))
    }, [])
  }

  allKanji('jlpt-5', setAllJlptFiveKanji)
  allKanji('jlpt-4', setAllJlptFourKanji)
  allKanji('jlpt-3', setAllJlptThreeKanji)
  allKanji('jlpt-2', setAllJlptTwoKanji)
  allKanji('jlpt-1', setAllJlptOneKanji)

  // function to GET specific kanji data from a certain jlpt level
  function fetchSpecificKanji(stateArray: string[], setKanjiState) {
    useEffect(() => {
      Promise.all(
        stateArray.map(character =>
          fetch(`https://kanjiapi.dev/v1/kanji/${character}`).then(res => res.json())
        )
      ).then(data => setKanjiState(data))
    }, [stateArray])
  }

  fetchSpecificKanji(allJltpFiveKanji, setJlptFiveKanjiObj)
  fetchSpecificKanji(allJlptFourKanji, setJlptFourKanjiObj)
  fetchSpecificKanji(allJlptThreeKanji, setJlptThreeKanjiObj)
  fetchSpecificKanji(allJlptTwoKanji, setJlptTwoKanjiObj)
  fetchSpecificKanji(allJlptOneKanji, setJlptOneKanjiObj)

  const kanjiCardElements = jlptThreeKanjiObj.map(character =>
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
