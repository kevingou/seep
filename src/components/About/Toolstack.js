import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";
import { VscAccount } from "react-icons/vsc";

import { IoPeopleSharp} from "react-icons/io5";

import { RiTeamFill } from "react-icons/ri";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={3} md={4} className="tech-icons">
        <VscAccount />
       
        <h1> Individual</h1>
        <h5>0 ¥/month</h5>
        <h5>Access to some exercises ❌</h5>
        <h5>10 AI suggestions only ❌ </h5>
      </Col>
      <Col xs={3} md={4} className="tech-icons">
        <IoPeopleSharp />
        
        <h1>Premium</h1>

        <h5>3 ¥/month</h5>
        <h5>Access to all exercises ✅</h5>
        <h5>Unlimited AI suggestions ✅ </h5>
      </Col>
      <Col xs={3} md={4} className="tech-icons">
        <RiTeamFill />
        <h1>Company</h1>

        <h5>Contact Sales</h5>
        <h5>Access to all exercises ✅</h5>
        <h5>Unlimited AI suggestions ✅ </h5>
        <h5>Customized function ✅ </h5>
      </Col>
     
    
    </Row>
  );
}

export default Toolstack;
