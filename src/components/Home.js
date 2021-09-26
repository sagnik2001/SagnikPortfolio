import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            A BIT OF  <span className="purple"> INTRODUCTION </span> OF MYSELF
            </h1>
            <p className="home-about-body">
               A Kiddo who fell in love with programming and aspires to be one of those...
              <br />
              <br />I am good in languages like
              <i>
                <b className="purple"> C++,Javascript,ReactJs and C </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Development </b> and
                also in areas related to{" "}
                <b className="purple">
                   Web Design
                </b>
              </i>
              <br />
              <br />
            I created a bunch of projects using <b className="purple">Html Css</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/241282546_2818108105154161_7379726433087072422_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5QSDGOTs110AX_G08ys&_nc_ht=scontent.fccu3-1.fna&oh=aa05cdf39cf5d65d6c1f72acb8c78e70&oe=617562E8" className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel Free To  <span className="purple">connect </span>With Me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sagnik2001"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100008649978877"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sagnik-pal-4437b2209/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/p.sagnik/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
