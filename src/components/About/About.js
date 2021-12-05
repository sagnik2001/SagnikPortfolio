import React from 'react';
import "./About.css"
import {Container,Row,Col} from "react-bootstrap"
import AboutCard from "./AboutDetails.js"
import TechTools from "./TechTools.js"
import Tools from "./Tools.js"
import Github from "./GitHubCalender"
import profile from "../../components/profile.jpeg"
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
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", paddingLeft:"30px"}} className="forhigh">
           Know Who <strong className="purple">I'M</strong>
         </h1>
         <AboutCard />
            </Col>
            <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "60px" }}
            className="about-img"
          >
            <img src={profile} alt="about" className="img-fluid" />
          </Col>

           </Row>
           <h1 className="project-heading" style={{paddingLeft:"30px"}}>
              Professional <strong className="purple">Skillset </strong>
           </h1>
           <TechTools/>
           <h1 className="project-heading1" style={{paddingLeft:"30px"}}>
                 <strong className="purple">Tools</strong> I use
           </h1>
           <Tools/>
           <br/>
           <Github/>
       </Container>
   </Container>
)
}
export default About
