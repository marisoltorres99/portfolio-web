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