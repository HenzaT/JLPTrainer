import Card from '../Card/card'

export interface kanjiProps {
  kanji: string
  // meanings: string
  // onReading: string
  // kunReading: string
  // jlpt: number
}

export default function CardContainer({ cards }: kanjiProps) {
  return (
    <div className="card-container">
      {cards.map(card => {
        <Card key={card.id} card={kanji}/>
      })}
    </div>
  )
}
