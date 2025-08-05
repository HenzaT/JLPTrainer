type HeaderProps = {
  requestAllKanji: () => void
  requestN5Kanji: () => void
  // requestN4Kanji: () => void
  // requestN3Kanji: () => void
  // requestN2Kanji: () => void
  // requestN1Kanji: () => void
}

export default function Header(props: HeaderProps) {
  return (
    <header>
      <h1>JLPTrainer</h1>
      <div className="buttons">
        <button type="button" className="level-button">Daily Kanji</button>
        <button type="button" className="level-button" onClick={props.requestAllKanji}>All</button>
        <button type="button" className="level-button" onClick={props.requestN5Kanji}>N5</button>
        <button type="button" className="level-button">N4</button>
        <button type="button" className="level-button">N3</button>
        <button type="button" className="level-button">N2</button>
        <button type="button" className="level-button">N1</button>
      </div>
    </header>
  )
}
