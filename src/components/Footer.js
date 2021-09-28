import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import "./Footer.css"
import { AiFillGithub,AiFillFacebook,AiFillLinkedin,AiOutlineInstagram } from "react-icons/ai";
const Footer=()=>{
  let date = new Date();
let year = date.getFullYear();
return (
  <Container fluid className="footer">
    <Row>
      <Col md="4" className="footer-copywright">
        <h3>Developed by Sagnik Pal</h3>
      </Col>
      <Col md="4" className="footer-copywright">
        <h3>Copyright © {year} SP</h3>
      </Col>
      <Col md="4" className="footer-body">
        <ul className="footer-icons">
          <li className="social-icons">
            <a
              href="https://github.com/sagnik2001"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=100008649978877"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook/>
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/sagnik-pal-4437b2209/"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.instagram.com/p.sagnik/"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram/>
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  </Container>
)
}
export default Footer;
