import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from "@fortawesome/free-solid-svg-icons";


class Awards extends Component {
  constructor(props) {
    super(props);

    this.awards = props.awards;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
          {
            this.awards.map((data, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faAward} color="#ffc107" />
                <span className="ml-2"> {data.awardDetail} </span>
              </li>
            ))
          }
          </ul>
          <div id="carouselExampleControls" className="carousel slide mt-3" data-interval="3000" data-pause="hover">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100 h-75 picture mx-auto" src={require('../Assets/soulution2019.jpg')} alt="First slide"></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="text-primary blur-background">sOULUtions2019</h5>
                  <p>3-day hackathon event for students to look for new ideas and solutions for challenges from companies, researchers and the public sector</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 h-65 picture mx-auto" src={require('../Assets/ConnectWithFinland.jpg')} alt="Second slide"></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="text-primary blur-background">Connect with Finland</h5>
                  <p>2 month project to help students realize their competences towards working life in Finland</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
        </div>
        <div className="mx-auto mt-3">
          <p className="text-center" >Updated in January 2020   </p>
        </div>  
        </div>
      </section>
    );
  }
}

export default Awards;
