import { useState, useEffect } from "react"
import Card from './components/Card/Card.tsx'
import Footer from './components/Footer/Footer.tsx'
import Header from './components/Header/Header.tsx'
// import Navbar from './components/Navbar/navbar.tsx'
import './App.css'

function App() {
  const [allJlptKanji, setAllJlptKanji] = useState<any[]>([])
  const [allJlptFiveKanji, setAllJlptFiveKanji] = useState<{ [key: string]: string[] }>({})
  // save kanji details from GET request individually, rather than global
  const [kanjiDetailsMap, setKanjiDetailsMap] = useState<Record<string, any>>({});
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false)

  // track which kanji is flipped
  const [flippedKanji, setFlippedKanji] = useState<string | null>(null);
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
  }, [])

  // GET specific Kanji details (show route)
  function requestKanjiDetails(character: string) {
    if (kanjiDetailsMap[character]) {
      setFlippedKanji(character);
      return;
      }
    fetch(`${apiUrl}/api/show?kanji=${character}`, {
      'method': 'GET',
    })
    .then(res => res.json())
    .then((data) => {
      setKanjiDetailsMap(prev => ({
        ...prev,
        [character]: data
      }));
      setFlippedKanji(character);
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

  function requestAllJlptSpecificKanji(set, index: number) {
    if (allJlptKanji) {
      set(allJlptKanji[index]);
      setIsButtonClicked(true)
    }
  }


  // All Kanji Cards
  // Array > Object > Array
  // [ { jlpt-1: [ character, character ] }, { jlpt-2: [ character, character ] } ]
  // const allKanjiCards = allJlptKanji.flatMap(kanjiObj => {
  //   const kanjiArr: string[] = Object.values(kanjiObj)
  //   return kanjiArr.map(kanji => (
  //     <Card
  //       kanji={kanji}
  //       key={kanji}
  //     />
  //   ))
  // })

  console.log(kanjiDetailsMap)

  // reusable function to display JLPT specific kanji characters
  function jlptSpecificCards(index: number, objKey: string, level: string) {
    const specificJlptObj = allJlptKanji[index]
    const jlptKanjiCards: string[] = specificJlptObj[objKey].map((kanji: string) => {
      const isCardFlipped = flippedKanji === kanji
      const specificKanjiCondition = isCardFlipped ? kanjiDetailsMap[kanji] : null
      return (
        <Card
          key={kanji}
          level={level}
          kanji={kanji}
          requestKanjiDetails={() => requestKanjiDetails(kanji)}
          isFlipped={isCardFlipped}
          meaning={specificKanjiCondition?.heisig_en}
          otherMeanings={specificKanjiCondition?.meanings}
          onReadings={specificKanjiCondition?.on_readings}
          kunReadings={specificKanjiCondition?.kun_readings}
        />
      )
    })
    return jlptKanjiCards
  }

  return (
    <>
      <Header
        // requestAllKanji={() => requestSpecificKanji()}
        requestN5Kanji={() => requestAllJlptSpecificKanji(setAllJlptFiveKanji, 4)}
      />
      <div className="main-section">
        {/* <h1>Choose a JLPT level</h1> */}
        <main className="all-cards">
          {/* {isButtonClicked && allKanjiCards} */}
          {isButtonClicked && jlptSpecificCards(4, 'jlpt-5', 'N5')}
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
