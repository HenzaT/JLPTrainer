export interface kanjiProps {
  kanji: string
  meanings: string
  onReading: string
  kunReading: string
  jlpt: number
}

export default function Card(props: kanjiProps) {
  const { kanji, meanings, onReading, kunReading, jlpt } = props
  return (
    <div className="kanji-card">
      <p>{kanji}</p>
      <p>{meanings}</p>
      <p>{onReading}</p>
      <p>{kunReading}</p>
      <p>{jlpt}</p>
    </div>
  )
}
