import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />

      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="text-center mb-4">JUNAID KHAN</h1>
            <h5 className="text-center">Web Developer</h5>

            <hr />

            {/* ABOUT ME */}
            <h3>About Me</h3>
            <p>
              I am a passionate Web Developer with strong expertise in HTML,
              CSS, JavaScript, and React.js. I specialize in building
              responsive, user-friendly, and visually appealing web
              applications. I have hands-on experience with the MERN Stack
              (MongoDB, Express.js, React.js, Node.js), REST APIs,
              authentication systems, and database management.
            </p>

            <hr />

            {/* EXPERIENCE */}
            <h3>Experience</h3>

            <h5>Qubit Guard Company</h5>
            <p>
              <strong>Software Engineer Intern (Nov 2024 - Aug 2025)</strong>
            </p>
            <ul>
              <li>
                Built responsive UI components using React.js and Tailwind.
              </li>
              <li>Managed application state with Redux.</li>
              <li>Developed RESTful APIs using Node.js and Express.</li>
              <li>Worked with MongoDB schemas and queries.</li>
            </ul>

            <p>
              <strong>Software Engineer Intern (Jan 2024 - Oct 2024)</strong>
            </p>
            <ul>
              <li>Built reusable React.js components.</li>
              <li>Integrated REST APIs.</li>
              <li>Fixed bugs and optimized performance.</li>
            </ul>

            <hr />

            {/* SKILLS */}
            <h3>Skills</h3>
            <ul>
              <li>HTML, CSS, Bootstrap, Tailwind CSS</li>
              <li>JavaScript, React.js</li>
              <li>Node.js, Express.js, REST APIs</li>
              <li>MongoDB, Mongoose</li>
              <li>Responsive Web Design</li>
              <li>Problem Solving</li>
            </ul>

            <hr />

            {/* EDUCATION */}
            <h3>Education</h3>
            <p>
              <strong>Full Stack Web Development</strong>
            </p>
            <p>PNY Trainings, Arfa Tower, Lahore</p>

            <p>
              <strong>3 Months Web Development Course (2024 - 2025)</strong>
            </p>
            <p>Ideoversity</p>

            <p>
              <strong>Intermediate in Fine Arts (2025 - 2026)</strong>
            </p>

            <hr />

            {/* TOOLS */}
            <h3>Tools</h3>
            <ul>
              <li>VS Code</li>
              <li>GitHub</li>
              <li>NPM</li>
              <li>Vercel Deployment</li>
            </ul>

            <hr />

            {/* CONTACT */}
            <h3>Contact</h3>
            <p>Email: junnaidk573@gmail.com</p>
            <p>Phone: +92 304 1204848</p>
            <p>Address: DHA Phase 9 Town, Lahore</p>
            <p>LinkedIn: https://pk.linkedin.com/in/junaidkhan573</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
