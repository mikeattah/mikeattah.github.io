import "./App.css";
import { projectData } from "./projectData";
import ProjectCard from "./components/ProjectCard/ProjectCard";
// "homepage": "https://github.com/mikeattah/mikeattah.github.io",

function App() {
  let num = 0;
  return (
    <div className="App">
      <div className="landing-section">
        <h1 className="page-title">
          <span className="page-title-x">Mike Attah&apos;s</span> Portfolio
          Projects
        </h1>
        <p className="page-description">
          This <span className="page-descripton-x">GitHub Page</span> contains
          some of the project challenges
        </p>
        <p className="page-description">I have completed so far.</p>
      </div>
      <div className="projects-section">
        {projectData.map((project) => {
          let { src, alt, title, tools, description, repo, site } = project;
          num++;
          return (
            <ProjectCard
              src={src}
              alt={alt}
              num={`#${num}`}
              title={title}
              tools={tools}
              description={description}
              repo={repo}
              site={site}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
