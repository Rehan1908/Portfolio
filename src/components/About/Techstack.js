import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiDotnet,
  
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiCsharp,
  SiExpress,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiExpress/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDotnet/>
      </Col>
      
     <Col xs={4} md={2} className="tech-icons">
        <SiCsharp/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
     
    </Row>
  );
}

export default Techstack;
