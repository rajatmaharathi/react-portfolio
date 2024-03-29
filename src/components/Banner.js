import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

export default function Banner({ hackerEffect }) {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center ">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h2>HI I AM</h2>
            <h1 className="name">
              <span onMouseEnter={(e) => hackerEffect(e)} data-value="RAJAT">
                RAJAT
              </span>
            </h1>
            <h2>WEB DEVELOPER / DESIGNER</h2>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Im" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
