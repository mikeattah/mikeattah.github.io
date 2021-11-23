import { useState } from "react";
import "./App.css";
import { portfolio } from "./portfolio";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import useSWR from "swr";
// "homepage": "https://github.com/mikeattah/mikeattah.github.io",

function App() {
  const [pageIndex, setPageIndex] = useState(0);

  // pageElements: 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, ...
  const pageElements = 6;
  let pageCount = Math.ceil(portfolio.length / pageElements);
  let pageArray = [];

  for (let i = 0; i < pageCount; i++) {
    pageArray = [...pageArray, i];
  }
  // console.log(pageArray.length); // <= 3

  const fetcher = (url) => fetch(url).then((r) => r.parse());

  const { data, error } = useSWR(
    "https://mikeattah.com/portfolio.json",
    fetcher
  );

  return (
    <div className="App">
      <div className="landing-section">
        <h1 className="page-title">
          <span className="page-title-x">Mike Attah&apos;s</span> <br />{" "}
          Portfolio Projects
        </h1>
        <p className="page-description">
          This <span className="page-descripton-x">GitHub Page</span> contains
          some of the project challenges I have completed so far.
        </p>
      </div>
      <div className="projects-section">
        {/* if (error) return <div className="failed-state">failed to load</div>;
          if (!data) return <div className="loading-state">loading...</div>; */}
        {[...portfolio.slice(pageIndex, pageIndex + pageElements)].map(
          (project, index) => {
            let { src, alt, title, tools, description, repo, site } = project;
            return (
              <ProjectCard
                src={src}
                alt={alt}
                num={`#${index + 1}`}
                title={title}
                tools={tools}
                description={description}
                repo={repo}
                site={site}
              />
            );
          }
        )}
      </div>
      <div className="pagination-container">
        <button
          onClick={() => setPageIndex(pageArray[0])}
          className="pagination-button"
          disabled={pageIndex === pageArray[0] ? "true" : ""}
        >
          &#8810;
        </button>
        <button
          onClick={() => setPageIndex(pageIndex - pageElements)}
          className="pagination-button"
          disabled={pageIndex === pageArray[0] ? "true" : ""}
        >
          &#60;
        </button>
        {pageArray.map((page, index) => {
          return (
            <button
              onClick={() => setPageIndex(pageElements * index)}
              className={`pagination-button ${
                pageIndex === pageElements * index ? "pagination-active" : ""
              }`}
            >
              {page + 1}
            </button>
          );
        })}
        <button
          onClick={() => setPageIndex(pageIndex + pageElements)}
          className="pagination-button"
          disabled={
            pageIndex === pageArray[pageArray.length - 1] * pageElements
              ? "true"
              : ""
          }
        >
          &#62;
        </button>
        <button
          onClick={() =>
            setPageIndex(pageArray[pageArray.length - 1] * pageElements)
          }
          className="pagination-button"
          disabled={
            pageIndex === pageArray[pageArray.length - 1] * pageElements
              ? "true"
              : ""
          }
        >
          &#8811;
        </button>
      </div>
    </div>
  );
}

export default App;
