import { useState } from "react"
import emptyStar from "/src/assets/empty-star.png"
import filledStar from "/src/assets/empty-star.png"

export interface kanjiProps {
  kanji: string
  meanings: string
  onReading: string
  kunReading: string
  jlpt: number
  learnt: boolean
}

export default function Card(props: kanjiProps) {
  const { kanji, meanings, onReading, kunReading, jlpt, learnt } = props

  const [card, setCard] = useState({
    kanji: kanji,
    meanings: meanings,
    onReading: onReading,
    kunReading: kunReading,
    jlpt: jlpt,
    learnt: false

  })

  let starIcon = learnt ? filledStar : emptyStar

  function toggleLearnt() {
    console.log("hello")
    setCard(prevCard => {
      return {
        ...prevCard,
        learnt: !prevCard.learnt
      }
    })
  }

  return (
    <div className="kanji-card">
      <p>{card.kanji}</p>
      <p>{card.meanings}</p>
      <p>{card.onReading}</p>
      <p>{card.kunReading}</p>
      <p>{card.jlpt}</p>
      <img
        onClick={toggleLearnt}
        src={starIcon}
        alt="empty star icon"
        className="star-icon" />
    </div>
  )
}
