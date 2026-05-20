import "./Hero.css"
import { Code, Mail } from "lucide-react"

function Hero({ nombre, descripcion, edad, tecnologia }) {
  return (
    <section className="hero">

      <h1 className="hero-title">
        {nombre}
      </h1>

      <p className="hero-description">
        {descripcion}
      </p>

      <p>
        Edad: {edad}
      </p>

      <p>
        Tecnología favorita: {tecnologia}
      </p>

      <div className="hero-buttons">

        <a
          href="https://github.com/"
          target="_blank"
        >
          <Code size={20} />
          GitHub
        </a>

        <a
          href="https://linkedin.com/"
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