import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


class Skills extends Component {
  constructor(props) {
    super(props);

    this.skills = props.skills;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Learning Path</h2>
          <div className="row">
          {
            this.skills.map((data, index) => (
              <div key={index} className="col-12">
                <div className="list-item">
                  <FontAwesomeIcon icon={faCheckCircle} color="#ffc107" />
                  <span className="subheading ml-2">{data.name}</span>
                  <p className="lead ml-4">{data.tool}</p>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
