import { useState } from 'react'
import emptyStar from '/src/assets/empty-star.png'
import filledStar from '/src/assets/filled-star.png'

export interface kanjiProps {
  key: number
  learnt: boolean
  kanji: string
  meanings: string
  onReading: string
  kunReading: string
  strokeCount: number
  jlpt: number
}

export default function Card(props: kanjiProps) {
  const { key, learnt, kanji, meanings, onReading, kunReading, strokeCount, jlpt } = props

  const [card, setCard] = useState({
    key: key,
    learnt: learnt,
    kanji: kanji,
    meanings: meanings,
    onReading: onReading,
    kunReading: kunReading,
    strokeCount: strokeCount,
    jlpt: jlpt,
  })

  function toggleStar() {
    setCard(prevCard => ({
      ...prevCard,
      learnt: !prevCard.learnt
    }))
  }

  return (
    <div className="kanji-card">
      <img onClick={toggleStar} className="star-icon" src={card.learnt ? filledStar : emptyStar} alt="" />
      <p>Character: {card.kanji}</p>
      <p>Meanings: {card.meanings}</p>
      <p>On-yomi: {card.onReading}</p>
      <p>Kun-yomi: {card.kunReading}</p>
      <p>Stroke Count: {card.strokeCount}</p>
      <p>JLPT: {card.jlpt}</p>
    </div>
  )
}
