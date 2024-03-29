import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reactimg from "../assets/img/react.svg";
import cssimg from "../assets/img/css.svg";
import jsimg from "../assets/img/js.svg";
import htmlimg from "../assets/img/html.svg";
import bootstrapimg from "../assets/img/bootstrap.svg";
import gitimmg from "../assets/img/git.svg";
import tailwindimg from "../assets/img/tailwind.svg";
import nodejsimg from "../assets/img/node-js.svg";
import figmaimg from "../assets/img/figma.svg";

export default function Skills({ hackerEffect }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                <span onMouseEnter={(e) => hackerEffect(e)} data-value="SKILLS">
                  SKILLS
                </span>
              </h2>
              <p>I mostly do Frontend Development with basic UI/UX. </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={reactimg} alt="react" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={jsimg} alt="javascript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={cssimg} alt="css" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={htmlimg} alt="html" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={tailwindimg} alt="tailwind" />
                  <h5>Tailwind</h5>
                </div>
                <div className="item">
                  <img src={bootstrapimg} alt="bootstrap" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={nodejsimg} alt="nodejs" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={figmaimg} alt="figma" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={gitimmg} alt="git" />
                  <h5>Git</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
