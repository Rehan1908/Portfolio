import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Instkilo"
              description="A modern social media platform inspired by Instagram with enhanced features for sharing photos and connecting with friends. Built with React, Node.js, and MongoDB for a seamless user experience."
              ghLink="https://github.com/Rehan1908/InstaKilo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="StackStories"
              description="A collaborative platform for developers to share coding challenges and solutions. Features a rich text editor, code highlighting, and community voting system to promote knowledge sharing."
              ghLink="https://github.com/Rehan1908/Stack-Stories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AutoKanji"
              description="A dual-backend automation tool that streamlines Japanese kanji learning with React and Node.js. Features include MongoDB integration for kanji storage, RobotJS automation for keyboard/mouse simulation, and seamless integration with Anki and Yomitan. Designed for efficient, customizable kanji study sessions."
              ghLink="https://github.com/Rehan1908/AutoKanji"           
            />
          </Col>
        </Row>
        
        <h2 className="project-heading" style={{ paddingTop: "40px" }}>
          <strong className="purple">More Projects Coming Soon! </strong>
        </h2>
        <p style={{ color: "white", paddingBottom: "20px" }}>
          I'm constantly working on new and exciting projects. Stay tuned for updates!
        </p>
      </Container>
    </Container>
  );
}

export default Projects;