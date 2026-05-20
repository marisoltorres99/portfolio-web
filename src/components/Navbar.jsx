import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="navbar-logo">
        Marisol Torres
      </h2>

      <ul className="navbar-links">

        <li>
          <a href="#proyectos">Proyectos</a>
        </li>

        <li>
          <a href="#tecnologias">Tecnologías</a>
        </li>

        <li>
          <a href="#contacto">Contacto</a>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar