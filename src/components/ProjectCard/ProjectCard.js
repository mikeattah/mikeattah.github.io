import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={props.src} alt={props.alt} className="card-image" />
      </div>
      <div className="project-card-info">
        <h3 className="title">
          <span className="title-x">{props.num}</span> {props.title}
        </h3>
        <p className="description">{props.description}</p>
        <div className="link-container">
          <a
            href={props.repo}
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            View Repo
          </a>
          <a
            href={props.site}
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
