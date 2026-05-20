import Hero from "./components/Hero"

function App() {
  return (
    <div>
      <Hero
        nombre="Marisol Torres"
        descripcion="Analista Universitaria de Sistemas y desarrolladora Full Stack."
        edad={26}
        tecnologia="Python"
      />
    </div>
  )
}

export default App