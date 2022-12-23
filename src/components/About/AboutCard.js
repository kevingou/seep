import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone 🙌, We Are <span className="purple">A Group Of Enthusiasts </span>
            from <span className="purple"> Top International Schools</span> Tring To Make Learning Soft Skills <span className="purple">Easy</span>
   
            
            
          </p>
          <ul>
           
            
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Feel free to talk to us on Social Media!"{" "}
          </p>
          <footer className="blockquote-footer">Seep Team</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
