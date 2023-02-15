import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/photo.png";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from '../assets/img/nav-icon3.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" id="logo" style={{ height: 150, width: 150}}/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.instagram.com/m_rohit._/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/rohit-mondal-6b55581b7"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/Rohit2408"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}