import React from 'react';
import {Container, Row, Col} from "react-bootstrap"
import project1 from "./Project-videos/Project-youtube.mp4"
import "./Projects.css"
const Projects=()=>{
  return(
     <Container fluid className="project-section">
         <Container>
         <h1 className="project-heading">
              My Recent <strong className="purple">Works </strong>
         </h1>
        <p style={{ color: "white" }}>
             A Dive into few of my Recent Projects
        </p>

         </Container>
     </Container>
  )
}
export default Projects;
