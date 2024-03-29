import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/img/logo.png";
import Icon1 from "../assets/img/nav-icon1.svg";
import Icon2 from "../assets/img/nav-icon2.svg";
import Icon3 from "../assets/img/nav-icon3.svg";

export default function NavBar({ hackerEffect }) {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(function () {
    const onScroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function onUpdateActive(link) {
    setActiveLink(link);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="nav-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActive("home")}
              onMouseEnter={(e) => hackerEffect(e)}
              data-value="HOME"
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActive("skills")}
              onMouseEnter={(e) => hackerEffect(e)}
              data-value="SKILLS"
            >
              SKILLS
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActive("projects")}
              onMouseEnter={(e) => hackerEffect(e)}
              data-value="PROJECTS"
            >
              PROJECTS
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
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
            <a href="#connect">
              <button className="vvd">CONNECT</button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
