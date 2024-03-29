import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";

export default function Contact({ hackerEffect }) {
  const initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const formRef = useRef();

  const onFormUpdate = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_f0h3bpb",
        "template_astrbwc",
        formRef.current,
        "PSIS0WDbEA2-9zqyX"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm(initialForm);
        },
        (error) => {
          setLoading(false);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>
              <span
                onMouseEnter={(e) => hackerEffect(e)}
                data-value="GET IN TOUCH"
              >
                GET IN TOUCH
              </span>
            </h2>
            <form ref={formRef} onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate(e)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate(e)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate(e)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    placeholder="Phone"
                    onChange={(e) => onFormUpdate(e)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows={6}
                    name="message"
                    value={form.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate(e)}
                  />
                  <button type="submit">
                    {loading ? <span>Sending..</span> : <span>Send</span>}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
