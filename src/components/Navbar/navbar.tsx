function Navbar() {

  function changeColorClick() {
    console.log("Color")
  }

  return (
    <nav>
      <a href="n5" className="nav-link" onClick={changeColorClick}>N5</a>
      <a href="n4" className="nav-link" >N4</a>
      <a href="n3" className="nav-link" >N3</a>
      <a href="n2" className="nav-link" >N2</a>
      <a href="n1" className="nav-link" >N1</a>
      <a href="all" className="nav-link" >All</a>
    </nav>
  )
}

export default Navbar
