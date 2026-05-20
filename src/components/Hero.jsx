import "./Hero.css"

function Hero({ nombre, descripcion, edad, tecnologia }) {
  return (
    <section>
      <h1>{nombre}</h1>

      <p>{descripcion}</p>

      <p>{edad}</p>

      <p>{tecnologia}</p>
    </section>
  )
}

export default Hero