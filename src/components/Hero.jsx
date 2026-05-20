import "./Hero.css"

function Hero({ nombre, descripcion, edad, tecnologia }) {
  return (
    <section className="hero">

      <h1 className="hero-title">
        {nombre}
      </h1>

      <p className="hero-description">
        {descripcion}
      </p>

      <div className="hero-buttons">

        <a href="https://github.com/" target="_blank">GitHub</a>

        <a href="https://linkedin.com/" target="_blank">LinkedIn</a>

      </div>

      <p>
        Edad: {edad}
      </p>

      <p>
        Tecnología favorita: {tecnologia}
      </p>

    </section>
  )
}

export default Hero