import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";

import tab from "../assets/img/tab.svg";
import PorjectCard from "./ProjectCard";

export default function Projects({ hackerEffect }) {
  const projectsTab1 = [
    {
      title: "Movie Logger",
      description: "React, OMDB API",
      imgUrl: projImg5,
      ghLink: "https://github.com/rajatmaharathi/cinemate",
    },
    {
      title: "Travel Advisor",
      description: "React, Material UI, Google maps API",
      imgUrl: projImg3,
      ghLink: "https://github.com/rajatmaharathi/wanderwise",
    },
    {
      title: "Packing List",
      description: "React",
      imgUrl: projImg6,
      ghLink: "https://github.com/rajatmaharathi/travel_list",
    },
    {
      title: "Banking App",
      description: "JavaScript",
      imgUrl: projImg4,
      ghLink: "https://github.com/rajatmaharathi/bankist-app",
    },
    {
      title: "Stock Photo Website",
      description: "JavaScript, Bootstarp, Unsplash API",
      imgUrl: projImg2,
      ghLink: "https://github.com/rajatmaharathi/SNAPiCA",
    },
    {
      title: "Landing Page",
      description: "JavaScript",
      imgUrl: projImg1,
      ghLink: "https://github.com/rajatmaharathi/Bankist-Landing-Page",
    },
  ];
  const projectsTab2 = [
    {
      title: "Bill Splitter",
      description: "React",
      imgUrl: projImg7,
      ghLink: "https://github.com/rajatmaharathi/eat-n-split",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>
              <span onMouseEnter={(e) => hackerEffect(e)} data-value="PROJECTS">
                PROJECTS
              </span>
            </h2>
            <p>Some of the recent projects I created.</p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <img className="tab" src={tab} alt="1" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <img className="tab" src={tab} alt="1" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <img className="tab" src={tab} alt="1" />
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projectsTab1.map((project, i) => {
                      return <PorjectCard key={i} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {" "}
                  {projectsTab2.map((project, i) => {
                    return <PorjectCard key={i} {...project} />;
                  })}
                </Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
