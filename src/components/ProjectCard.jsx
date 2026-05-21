import "./ProjectCard.css"

function ProjectCard({ titulo, descripcion, tecnologias, imagen, github, demo }) {
  return (
    <div className="project-card">
      <img src={imagen} alt={titulo} className="project-image"/>

      <h2>{titulo}</h2>

      <p>{tecnologias}</p>

      <p>{descripcion}</p>

      <div className="project-buttons">

        <a href={github}target="_blank">GitHub</a>

        <a href={demo} target="_blank">Demo</a>
      </div>
    </div>
  )
}

export default ProjectCard