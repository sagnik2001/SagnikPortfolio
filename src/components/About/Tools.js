import React from 'react';
import {Col,Row} from 'react-bootstrap';
import { SiAtom,SiGithub,SiNetlify,SiVisualstudio } from "react-icons/si";
const Tools=()=>{
  return(
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
      <SiAtom/>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiGithub />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiNetlify />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiVisualstudio />
    </Col>
    </Row>
  )
}
export default Tools;
