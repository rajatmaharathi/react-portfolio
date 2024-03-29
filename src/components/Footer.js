import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import Icon1 from "../assets/img/nav-icon1.svg";
import Icon2 from "../assets/img/nav-icon2.svg";
import Icon3 from "../assets/img/nav-icon3.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rajatmaharathi">
                <img src={Icon1} alt="linkedin" />
              </a>
              <a href="https://github.com/rajatmaharathi">
                <img src={Icon2} alt="github" />
              </a>
              <a href="https://www.instagram.com/rydenn.n">
                <img src={Icon3} alt="instagram" />
              </a>
            </div>
            <p>Copyright ©2024 All rights reserved by Rajat</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
