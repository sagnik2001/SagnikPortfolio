import React from 'react';
import "./About.css"
import {Container,Row,Col} from "react-bootstrap"
import AboutCard from "./AboutDetails.js"
const About=()=>{
  return(
   <Container fluid className="about-section">
       <Container>
           <Row style={{justifyContent: 'center',padding:"10px"}}>

                <Col
                 md={7}
                 style={{
                   justifyContent: "center",
                   paddingTop: "30px",
                   paddingBottom: "50px",
                 }}
               >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px"}} className="forhigh">
           Know Who <strong className="purple">I'M</strong>
         </h1>
         <AboutCard />
            </Col>
            <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "60px" }}
            className="about-img"
          >
            <img src="https://media.vanityfair.com/photos/5f4d3a7e1e10df7a77868a63/1:1/w_2143,h_2143,c_limit/BradPitt-GettyImages-1158782727.jpg" alt="about" className="img-fluid" />
          </Col>

           </Row>
           <h1 className="project-heading">
              Professional <strong className="purple">Skillset </strong>
           </h1>
       </Container>
   </Container>
)
}
export default About
