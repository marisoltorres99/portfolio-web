import Hero from "./components/Hero"
import ProjectCard from "./components/ProjectCard"
import "./App.css"
import Navbar from "./components/Navbar"

function App() {

  const proyectos = [
    {
      id: 1,
      titulo: "Bot de Gastos",
      descripcion: "Bot para registrar gastos desde Telegram."
    },
    {
      id: 2,
      titulo: "Sistema de Stock",
      descripcion: "Sistema de gestión de productos y ventas en Flask."
    }
  ]

  return (
    <div>

      <Navbar />

      <Hero
        nombre="Marisol Torres"
        descripcion="Analista Universitaria de Sistemas y desarrolladora Full Stack."
        edad={26}
        tecnologia="Python"
      />

      <section id="proyectos" className="projects-section">
        <h2>Proyectos</h2>

        <div className="projects-container">
          {
            proyectos.map((proyecto) => (
              <ProjectCard
                key={proyecto.id}
                titulo={proyecto.titulo}
                descripcion={proyecto.descripcion}
              />
            ))
          }
        </div>
      </section>

    </div>
  )
}

export default App