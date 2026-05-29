import "./Hero.css"
import { Code, Mail } from "lucide-react"

function Hero({ nombre, descripcion }) {
  return (
    <section className="hero">

      <h1 className="hero-title">
        {nombre}
      </h1>

      <p className="hero-description">
        {descripcion}
      </p>

      <div className="hero-buttons">

        <a
          href="https://github.com/marisoltorres99"
          target="_blank"
        >
          <Code size={20} />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/marisol-torres-088092217"
          target="_blank"
        >
          <Mail size={20} />
          LinkedIn
        </a>

      </div>

    </section>
  )
}

export default Hero