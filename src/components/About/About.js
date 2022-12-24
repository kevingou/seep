import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import chat from  "../../Assets/chat.png"
import { Widget } from '@typeform/embed-react'


import Aboutcard from "./AboutCard";
import Aboutcardtwo from "./AboutCardtwo";
import first from "../../Assets/first.png";
import huge from "../../Assets/huge.png";
import skills from "../../Assets/skills.png";
import ai from '../../Assets/ai-screenshot.png'
import laptopImg from "../../Assets/about.png";
import QA from "../../Assets/QA.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <h1  style={{ fontSize: "4rem"}}>
          How does Seep <strong className="purple">Work </strong>
        </h1>
        
        <Container className="home-content">
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            md={5}
            className="about-img"
          >
            <img src={skills} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "4rem", paddingBottom: "3rem" }}>
           What Seep <strong className="purple">Offer</strong>
            </h1>
            <Aboutcardtwo />
          </Col>
        
        </Row>
          <Row>
            
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 0}} className="heading" style={ {textAlign: "left"}}>
             Interactive Exercises 👋</h1>
               
              <div style={{ padding: 50, textAlign: "left" }}>
              <h4>  Playing with well-designed interactive games& exercises, Users could enhance their soft skills inadvertently </h4>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
               src={first}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>

          <Row>
          

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={QA}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 0}} className="heading " style={ {textAlign: "left"}}>
            Discussion Forum 👀</h1>
               
              <div style={{ padding: 50, textAlign: "left" }}>
              <h4> Whenever you encounter a problem, feel free to either post it or search for the answer on the forum  </h4>
              </div>
            </Col>
          </Row>


          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 0}}  className="heading" style={ {textAlign: "left"}}>
              Customized Suggestions 🤟</h1>
               
              <div style={{ padding: 50, textAlign: "left" }}>
              <h4>  Our Powerful  Algorithm would give you personalized feedback to help you ace presentation ! </h4>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
               src={ai}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>



        </Container>
      <Container>
      <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "4rem", paddingBottom: "3rem" }}>
             Who Are <strong className="purple">We</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            className="about-img"
          >
            <img src={chat} alt="about" className="img-fluid" />
          </Col>
        </Row>
       
      

        <h1 className="project-heading" >
          <strong className="purple"    style={{fontSize:'2em'}}>Pricing</strong>
        </h1>
            
        <Toolstack />


        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
          
           <h1 style={{ fontSize: "4rem", paddingBottom: "3rem" }}>Contact Us</h1>
            <Widget id="K7ZHZI7R" style={{ width: '100%', height:"30rem" }} className="my-form" />
            
          </Col>
        
        </Row>
      </Container>
    </Container>
  );
}

export default About;
