import { useState, useEffect } from "react"
import Card from './components/Card/Card.tsx'
import Footer from './components/Footer/Footer.tsx'
import Header from './components/Header/Header.tsx'
// import Navbar from './components/Navbar/navbar.tsx'
import './App.css'

function App() {
  const [allJlptKanji, setAllJlptKanji] = useState<any[]>([])
  const [allJlptFiveKanji, setAllJlptFiveKanji] = useState<{ [key: string]: string[] }>({})
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false)

  const [isFlipped, setIsFlipped] = useState<boolean>(false)
  // const [allJlptFourKanji, setAllJlptFourKanji] = useState<{ [key: string]: string[] }>({})
  // const [allJlptThreeKanji, setAllJlptThreeKanji] = useState<{ [key: string]: string[] }>({})
  // const [allJlptTwoKanji, setAllJlptTwoKanji] = useState<{ [key: string]: string[] }>({})
  // const [allJlptOneKanji, setAllJlptOneKanji] = useState<{ [key: string]: string[] }>({})

  const apiUrl = "http://localhost:5000"

  // fetch all kanji cards on load
  useEffect(() => {
    fetch(`${apiUrl}/api/all-kanji`, {
      'method': 'GET',
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      setAllJlptKanji(data)
    })
    .catch(error => console.error('Error fetching all kanji:', error))
    console.log('request successful!');
  }, [isButtonClicked])

  // GET specific Kanji details (show route)
  function requestKanjiDetails(character: string) {
    fetch(`${apiUrl}/api/show?kanji=${character}`, {
      'method': 'GET',
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data)
    })
    .catch(error => console.error('Error fetching kanji details:', error))
    console.log('request successful!');
  }

  // request all Kanji
  // function requestAllKanji(): void {
  //   fetch(`${apiUrl}/api/all-kanji`, {
  //     'method': 'GET',
  //   })
  //   .then(res => res.json())
  //   .then((data) => {
  //     console.log(data)
  //     setAllJlptKanji(data)
  //   })
  //   .catch(error => console.error('Error fetching all kanji:', error))
  //   console.log('request successful!');
  // }


  // reusable function to fetch JLPT specific kanji
  // function requestJlptKanji(level: string, setState): void {
  //   fetch(`${apiUrl}/api/index?level=${level}`, {
  //     'method': 'GET',
  //   })
  //   .then(res => res.json())
  //   .then((data) => {
  //     console.log(data)
  //     setState(data)
  //   })
  //   .catch(error => {
  //     console.error('Error fetching kanji:', error)
  //   })
  // }

  function requestSpecificKanji(set, index: number) {
    if (allJlptKanji) {
      set(allJlptKanji[index]);
      setIsButtonClicked(true)
    }
  }


  // All Kanji Cards
  // Array > Object > Array
  // [ { jlpt-1: [ character, character ] }, { jlpt-2: [ character, character ] } ]
  const allKanjiCards = allJlptKanji.flatMap(kanjiObj => {
    const kanjiArr: string[] = Object.values(kanjiObj)
    return kanjiArr.map(kanji => (
      <Card
        kanji={kanji}
        key={kanji}
      />
    ))
  })

  // reusable function to display JLPT specific kanji characters
  function jlptSpecificCards(index: number, objKey: string) {
    const specificJlptObj = allJlptKanji[index]
    const jlptKanjiCards: string[] = specificJlptObj[objKey].map((kanji: string) => {
      return (
        <Card
          key={kanji}
          kanji={kanji}
          requestKanjiDetails={() => requestKanjiDetails(kanji)}
        />
      )
    })
    return jlptKanjiCards
  }

  return (
    <>
      <Header
        // requestAllKanji={() => requestSpecificKanji()}
        requestN5Kanji={() => requestSpecificKanji(setAllJlptFiveKanji, 4)}
      />
      <div className="main-section">
        {/* <h1>Choose a JLPT level</h1> */}
        <main className="all-cards">
          {/* {isButtonClicked && allKanjiCards} */}
          {isButtonClicked && jlptSpecificCards(4, 'jlpt-5')}
          {/* {allJlptFourKanji['jlpt-4'] && jlptSpecificCards(allJlptFourKanji, 'jlpt-4')}
          {allJlptThreeKanji['jlpt-3'] && jlptSpecificCards(allJlptThreeKanji, 'jlpt-3')}
          {allJlptTwoKanji['jlpt-2'] && jlptSpecificCards(allJlptTwoKanji, 'jlpt-2')}
          {allJlptOneKanji['jlpt-1'] && jlptSpecificCards(allJlptOneKanji, 'jlpt-1')} */}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
