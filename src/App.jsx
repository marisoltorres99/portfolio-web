import Hero from "./components/Hero"
import ProjectCard from "./components/ProjectCard"
import "./App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import botGastosImg from "./assets/telegram-bot-1.png"
import sistemaStockImg from "./assets/stock-1.png"

function App() {

  const proyectos = [
    {
      id: 1,
      titulo: "Bot de Gastos",
      descripcion: "Bot para registrar gastos desde Telegram.",
      tecnologias: ["Python", "Flask"],
      imagen: botGastosImg,
      github: "https://github.com/marisoltorres99/GastosBot",
      demo: "https://t.me/misgastosappbot"
    },
    {
      id: 2,
      titulo: "Sistema de Stock",
      descripcion: "Sistema de gestión de productos y ventas en Flask.",
      tecnologias: ["Python", "Flask"],
      imagen: sistemaStockImg,
      github: "https://github.com/marisoltorres99/GestionStock",
      demo: "https://gestion-de-stock-49il.onrender.com/"
    }
  ]

  return (
    <div>

      <Navbar />

        <main className="main-container">
          <Hero
            nombre="Marisol Torres"
            descripcion="Analista Universitaria de Sistemas y desarrolladora Full Stack."
          />

          <section className="about-section">

            <h2>
              Sobre mí
            </h2>

            <p>
              Soy Analista Universitaria de Sistemas.
              Me especializo en desarrollo Full Stack y disfruto crear aplicaciones web funcionales,
              modernas y enfocadas en resolver problemas reales.
            </p>

            <p>
              He trabajado en proyectos utilizando tecnologías como Python, Flask, React, .NET,
              JavaScript y bases de datos SQL.
            </p>

          </section>

          <section className="education-section">

            <h2>
              Educación
            </h2>

            <div className="education-card">

              <h3>
                Analista Universitaria de Sistemas
              </h3>

              <p>
                Universidad Tecnológica Nacional
              </p>

            </div>

          </section>

          <section id="proyectos" className="projects-section">
            <h2>Proyectos</h2>

            <div className="projects-container">
              {
                proyectos.map((proyecto) => (
                  <ProjectCard
                    key={proyecto.id}
                    titulo={proyecto.titulo}
                    descripcion={proyecto.descripcion}
                    tecnologias={proyecto.tecnologias}
                    imagen={proyecto.imagen}
                    github={proyecto.github}
                    demo={proyecto.demo}
                  />
                ))
              }
            </div>
          </section>

          <section id="tecnologias" className="tech-section">

            <h2>Tecnologías</h2>

            <div className="tech-container">

              <span>Python</span>
              <span>Flask</span>
              <span>React</span>
              <span>JavaScript</span>
              <span>SQL</span>
              <span>.NET</span>

            </div>

          </section>
      </main>
      <Footer />
    </div>
  )
}

export default App