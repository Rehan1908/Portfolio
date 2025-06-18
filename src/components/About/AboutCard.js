import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
                I am <span className="purple">Md Rehan </span>
            <br />
            I am currently pursuing my Bachelors in Engineering in Computer Science Speciazing in Artificial Intelligence and Machine Learning from <span className="purple">Neil Gogte Institute of Technology</span>.
           
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            
            <li className="about-activity">
              <ImPointRight /> Game Devlopment
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            I am a hardworking, enthusiastic, and self-motivated individual who is always looking for new opportunities to learn and grow.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
