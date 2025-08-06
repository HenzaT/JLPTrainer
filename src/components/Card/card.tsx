import { useState } from 'react'
import emptyStar from '/src/assets/empty-star.png'
import filledStar from '/src/assets/filled-star.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from '@fortawesome/free-solid-svg-icons';

export interface kanjiProps {
  level: string
  kanji: string
  requestKanjiDetails: any
  isFlipped: boolean
}

export default function Card(props: kanjiProps) {
  return (
    <div className="kanji-card">
      <div className="card-top">
        <p>{props.kanji}</p>
        <p>{props.level}</p>
      </div>

      <div className={`kanji-card-inner ${props.isFlipped ? "flipped" : ""}`}>
        <div className="kanji-card-front">
          <h1>{props.kanji}</h1>
        </div>
        {props.isFlipped && (
          <div className="kanji-card-back">
            <p>Meaning: {props.meaning}</p>
            <p>All Meanings: {props.otherMeanings.join(', ')}</p>
            <p>On Yomi: {props.onReadings.join('、')}</p>
            <p>Kun Yomi: {props.kunReadings.join('、')}</p>
          </div>
        )}
        {/* <img onClick={toggleStar} className="star-icon" src={card.learnt ? filledStar : emptyStar} alt="" /> */}
      </div>

      <div className="card-bottom">
        <button
          className="card-flip-btn"
          onClick={props.requestKanjiDetails}>
            <FontAwesomeIcon icon={faRepeat} />
        </button>
      </div>
    </div>
  )
}
