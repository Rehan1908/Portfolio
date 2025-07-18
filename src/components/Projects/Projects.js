import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { ImPointRight } from "react-icons/im";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Experience </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col md={12}>
            <div className="experience-card">
              <h3 style={{ color: "white" }}>
                Backend Developer & Technical Trainer{" "}
                <span className="purple">@ CertifyO</span> (Remote)
              </h3>
              <p
                style={{
                  color: "#b9b9b9",
                  fontSize: "0.9em",
                  fontStyle: "italic",
                  marginBottom: "15px",
                }}
              >
                May 2025 - June 2025
              </p>
              <ul style={{ textAlign: "left", color: "white" }}>
                <li className="about-activity">
                  <ImPointRight /> Developed a comprehensive backend development
                  course on Node.js, Express.js, and MongoDB for over 10,000
                  learners, aligning with industry standards.
                </li>
                <li className="about-activity">
                  <ImPointRight /> Created technical tutorials that boosted learner
                  engagement and increased course completion rates by 40%.
                </li>
                <li className="about-activity">
                  <ImPointRight /> Collaborated with the internal team to enhance
                  backend features, contributing to a 25% growth in the user base
                  during the internship.
                </li>
                <li className="about-activity">
                  <ImPointRight /> Implemented website improvements, resulting in a
                  30% decrease in bounce rates and a 15% increase in new sign-ups
                  from referrals.
                </li>
                <li className="about-activity">
                  <ImPointRight /> Adapted quickly to a remote work environment,
                  ensuring effective communication and high-quality output.
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="StackStories"
              description="A collaborative platform for developers to share coding challenges and solutions. Features a rich text editor, code highlighting, and community voting system to promote knowledge sharing."
              ghLink="https://github.com/Rehan1908/Stack-Stories"
              websitelink="https://stack-stories.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BookFinder"
              description="An app where you can find books, reviews, and much more."
              ghLink="https://github.com/Rehan1908/Bookfinder-Frontend"
              websitelink="https://bookfinder-frontend.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Instkilo"
              description="A modern social media platform inspired by Instagram with enhanced features for sharing photos and connecting with friends. Built with React, Node.js, and MongoDB for a seamless user experience."
              ghLink="https://github.com/Rehan1908/InstaKilo"
              websitelink="https://insta-kilo.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="SoftShell"
              description="Turn Your Unused Licenses into Cash
SoftSell helps you quickly and securely sell your old software licenses. Get a fast valuation and get paid in days!"
              ghLink="https://github.com/Rehan1908/softshell"
              websitelink="          https://internship-ruddy-eta.vercel.app/
"
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
          I'm constantly working on new and exciting projects. Stay tuned for
          updates!
        </p>
      </Container>
    </Container>
  );
}

export default Projects;