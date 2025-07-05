import Card from './components/Card/card.tsx'
// import CardContainer from './components/CardContainer/cardContainer.tsx'
import Footer from './components/Footer/footer.tsx'
import Header from './components/Header/header.tsx'
import Navbar from './components/Navbar/navbar.tsx'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      {/* <CardContainer> */}
        <Card
          kanji = "七"
          kunReading = "なな"
          onReading = "シチ"
          meanings = "seven"
          jlpt = {5}
        />
        <Card
          kanji = "一"
          kunReading = "ひと"
          onReading = "イチ"
          meanings = "one"
          jlpt = {5}
        />
      {/* </CardContainer> */}
      <Footer />
    </>
  )
}

export default App
