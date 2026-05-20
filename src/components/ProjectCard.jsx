import "./ProjectCard.css"

function ProjectCard({ titulo, descripcion }) {
  return (
    <div className="project-card">
      <h2>{titulo}</h2>

      <p>{descripcion}</p>
    </div>
  )
}

export default ProjectCard