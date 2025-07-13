import React, { useEffect, useState } from "react"
import axios from 'axios';

export interface kanjiProps {
  kanji: string
  meanings: string
  onReading: string
  kunReading: string
  jlpt: number
  learnt: boolean
}

export default function Card(props: kanjiProps) {
  const { kanji, meanings, onReading, kunReading, jlpt } = props

  const [card, setCard] = useState({
    kanji: kanji,
    meanings: meanings,
    onReading: onReading,
    kunReading: kunReading,
    jlpt: jlpt,
  })

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://kanjiapi.dev/v1/kanji/jlpt-5")
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="kanji-card">
      <p>{card.kanji}</p>
      <p>{card.meanings}</p>
      <p>{card.onReading}</p>
      <p>{card.kunReading}</p>
      <p>{card.jlpt}</p>
    </div>
  )
}
