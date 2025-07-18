import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">MD Rehan </span>
       
            <br />I am a software developer with experience in web development.
            <br />
            <br />
            <h1 className="project-heading">
              <strong className="purple">Professional Experience </strong>
            </h1>
            <h3 style={{ marginTop: "20px", marginBottom: "10px" }}>
              Backend Developer & Technical Trainer{" "}
              <span className="purple">@ CertifyO</span> (Remote)
            </h3>
            <p
              style={{
                marginBottom: "5px",
                fontSize: "0.9em",
                fontStyle: "italic",
              }}
            >
              May 2025 - June 2025
            </p>
            <ul>
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
            <br />
            <br />
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rehan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
