import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const blogPosts = [
  {
    title: "Understanding Git and GitHub",
    description:
      "Learn the difference between Git and GitHub with examples, and how they help developers manage code efficiently.",
    image:
      "https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg",
    link: "#",
  },
  {
    title: "Client vs Server Side Rendering",
    description:
      "Understand different rendering techniques and why frameworks like Next.js can improve performance over React.js alone.",
    image:
      "https://www.boardinfinity.com/blog/content/images/2023/02/Client-and-server-side-scripting.png",
    link: "#",
  },
  {
    title: "Core Concepts of React",
    description:
      "Learn fundamental concepts of React.js, including components, state, props, and top interview questions.",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwpdf3b2stn3fd9f3rycd.png",
    link: "#",
  },
  {
    title: "Understanding Promises in JavaScript",
    description:
      "A simple explanation of JavaScript Promises and how to handle asynchronous code effectively.",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQGFCON0qoBICA/article-cover_image-shrink_720_1280/B56ZVCmjMDHsAI-/0/1740579157504?e=1774483200&v=beta&t=nJdKjwh4Epti8pauVqigTwBTX-R5QtdlcwCElO3VKxw",
    link: "#",
  },
  {
    title: "HTML  Concepts - Part 1",
    description:
      "Fundamental concepts of HTML, including elements, attributes, and semantic tags for building web pages.",
    image: "https://www.joydeepdeb.com/images/html5.jpg",
    link: "#",
  },
  {
    title: "CSS Concepts - Part 2",
    description: "Advanced CSS topics, including closures , and styling. ",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20231221121117/css-for-web-design-copy.webp",
    link: "#",
  },
  {
    title: "JavaScript Event Loop Explained",
    description:
      "Understand how JavaScript event handling for building robust apps.",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*V8P-yvoEHh_NMaj_EHGB8g.png",
    link: "#",
  },
  {
    title: "React Lifecycle Methods",
    description:
      "Learn about the lifecycle of React components, including mounting, updating, and unmounting events.",
    image: "https://opensource.fb.com/img/projects/react.jpg",
    link: "#",
  },
];

function Blog() {
  return (
    <Container
      fluid
      style={{
        background: "linear-gradient(135deg, #6a11cb, 100%)",
        padding: "50px 20px",
      }}
    >
      <h2 className="text-center mb-5" style={{ color: "#fff" }}>
        My Blog
      </h2>

      <Row className="justify-content-center">
        {blogPosts.map((post, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            md={3}
            className="mb-4 d-flex align-items-stretch"
          >
            <Card
              className="shadow"
              style={{
                width: "100%",
                borderRadius: "15px",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-10px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0px)")
              }
            >
              <Card.Img
                variant="top"
                src={post.image}
                style={{
                  height: "200px",
                  objectFit: "cover",
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Button
                  variant="primary"
                  href={post.link}
                  target="_blank"
                  style={{
                    background: "linear-gradient(90deg, #6a11cb, #2575fc)",
                    border: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "linear-gradient(90deg, #2575fc, #6a11cb)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      "linear-gradient(90deg, #6a11cb, #2575fc)")
                  }
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Blog;
