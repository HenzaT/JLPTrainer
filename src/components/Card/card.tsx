import { useState } from 'react'
import emptyStar from '/src/assets/empty-star.png'
import filledStar from '/src/assets/filled-star.png'

export interface kanjiProps {
  kanji: string
}

export default function Card(props: kanjiProps) {
  // function toggleStar() {
  //   setCard(prevCard => ({
  //     ...prevCard,
  //     learnt: !prevCard.learnt
  //   }))
  // }

  return (
    <div className="kanji-card">
      {/* <img onClick={toggleStar} className="star-icon" src={card.learnt ? filledStar : emptyStar} alt="" /> */}
      <h1>{props.kanji}</h1>
      {/* <p>Meanings: {card.meanings}</p>
      <p>On-yomi: {card.onReading}</p>
      <p>Kun-yomi: {card.kunReading}</p>
      <p>Stroke Count: {card.strokeCount}</p>
      <p>JLPT: {card.jlpt}</p> */}
    </div>
  )
}
