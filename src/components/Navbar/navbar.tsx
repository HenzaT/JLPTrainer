function Navbar() {
  function showCards(level) {
    console.log('hello')
  }

  return (
    <nav>
      <button className="nav-link" onClick={showCards()}>N5</button>
      <button className="nav-link">N4</button>
      <button className="nav-link">N3</button>
      <button className="nav-link">N2</button>
      <button className="nav-link">N1</button>
      <button className="nav-link">All</button>
    </nav>
  )
}

export default Navbar
