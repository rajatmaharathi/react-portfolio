import { Col } from "react-bootstrap";

export default function PorjectCard({ title, description, imgUrl, ghLink }) {
  return (
    <Col sm={6} md={4}>
      <a href={ghLink}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="img1" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
}
