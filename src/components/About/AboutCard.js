import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Junaid Khan</span> from{" "}
            <span className="purple">Lahore, Pakistan</span>.
            <br />
            I’ve recently completed a{" "}
            <span className="purple">
              6-month Web Development course
            </span> at <span className="purple">Arfa Karim Tower</span>.
            <br />I specialize in{" "}
            <span className="purple">HTML, CSS, JavaScript, and React</span>
            and enjoy building responsive, user-friendly websites.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving Real-World Problems with Code 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating Clean & Responsive UI Designs 🎨
            </li>
            <li className="about-activity">
              <ImPointRight /> Continuous Learning & Skill Development 🚀
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)", fontStyle: "italic" }}>
            "Building smart solutions with code, creativity, and purpose."
          </p>
          <footer className="blockquote-footer">— Junaid Khan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
