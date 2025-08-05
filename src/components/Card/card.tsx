import { useState } from 'react'
import emptyStar from '/src/assets/empty-star.png'
import filledStar from '/src/assets/filled-star.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from '@fortawesome/free-solid-svg-icons';

export interface kanjiProps {
  kanji: string
  requestKanjiDetails: any
}

export default function Card(props: kanjiProps) {
  return (
    <div className="kanji-card">
      {/* <img onClick={toggleStar} className="star-icon" src={card.learnt ? filledStar : emptyStar} alt="" /> */}
      <h1>{props.kanji}</h1>
      <button
        className="card-flip-btn"
        onClick={props.requestKanjiDetails}>
          <FontAwesomeIcon icon={faRepeat} />
      </button>
      {/* <p>Meanings: {card.meanings}</p>
      <p>On-yomi: {card.onReading}</p>
      <p>Kun-yomi: {card.kunReading}</p>
      <p>Stroke Count: {card.strokeCount}</p>
      <p>JLPT: {card.jlpt}</p> */}
    </div>
  )
}
