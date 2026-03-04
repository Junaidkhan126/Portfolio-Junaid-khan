import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
             I am a passionate and dedicated Web Developer who enjoys turning ideas into clean, responsive, and user-friendly websites. I specialize in building modern web applications that focus on performance, design, and real-world usability.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Strong hands-on experience in HTML, CSS, JavaScript,{" "}
                </b>
              </i>
              — and  React.js, Node.js, Express.js, and MongoDB I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              Comfortable working on both Frontend and Backend (Full-Stack Development)
              <i>
                <b className="purple">
                  {" "}
                  Web Applications,and exploring new ways  {" "}
                </b>
              </i>
              Experienced in building complete, scalable web applications
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
              <br />
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
