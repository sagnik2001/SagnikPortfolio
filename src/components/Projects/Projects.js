import React from 'react';
import {Container, Row, Col} from "react-bootstrap"
import ProjectCard from './ProjectCard.js';
import project1 from "./Project-videos/Project-youtube.mp4"
import project2 from "./Project-videos/Project2-Chatapp.mp4"
import project3 from "./Project-videos/Project3-SnakeGame.mp4"
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
         <Row style={{justifyContent: "center",paddingBottom:"10px"}}>
            <Col md={4} className="project-card">
                <ProjectCard
                  videoPath={project1}
                  title="My React Youtube-Player"
                  description="A youtube-player created by reactjs where you can  play videos like your youtube"
                  link="https://github.com/sagnik2001/my-youtube-react-app"
                />
            </Col>
            <Col md={4} className="project-card">
                <ProjectCard
                  videoPath={project2}
                  title="We-Chat-Messenger"
                  description="A personal Chat application like whatsapp for friends.Added Google Authentication And real time communication among users using react , firebase and chat engine"
                  link="https://app.netlify.com/sites/we-chat-web/overview"
                />
            </Col>
            <Col md={4} className="project-card">
                <ProjectCard
                  videoPath={project3}
                  title="Snake-Huddle"
                  description="A snake game created by using Javascript"
                  link="https://app.netlify.com/sites/snakehuddle/settings/general"
                />
            </Col>
         </Row>
         </Container>
     </Container>
  )
}
export default Projects;
