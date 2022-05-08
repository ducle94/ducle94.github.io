import React, { Component } from 'react';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.projects = props.projects;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>
          {
            this.projects.map((data, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{data.name}</h3>
                  <p className="lead mb-0">{data.origin}</p>
                  <p className="lead mb-0">{data.target}</p>
                  <p className="lead">{data.extension}</p>
                  <a href={data.link} target="_blank" rel="noopener noreferrer" git="true">See the prototype</a>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Projects;