import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import chat from  "../../Assets/chat.png"
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import landing from  "../../Assets/landing.png"

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header"  style={{fontSize:'1.5em'}}>
              <h1 style={{ paddingBottom: 0}} className="heading"  >
               Make{" "}
                     Learning
        
               
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={landing}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
