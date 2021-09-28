import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiPaperPlane } from "react-icons/bi";

const ProjectCard=(props)=>{
  return(
   <Card className="project-card-view">
   <video controls >
  <source src={props.videoPath} type="video/mp4"/>
 </video>
 <Card.Body>
       <Card.Title >{props.title}</Card.Title>
       <Card.Text style={{textAlign: 'justify'}}>{props.description}</Card.Text>
       <Button variant="primary" target="_blank" href={props.link}>
           <BiPaperPlane/> &nbsp;
           View Project

       </Button>
 </Card.Body>
   </Card>
 )
}
export default ProjectCard
