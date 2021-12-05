import React from "react";
import Card from "react-bootstrap/Card";
import {ImArrowRight} from "react-icons/im"
const AboutCard=()=>{
  return(
  <Card className="quote-card-view">
  <Card.Body>
     <blockquote className="blockquote mb-0">
         <p style={{textAlign:"justify"}}>
             Hello Guys, I am <span className="purple"> Sagnik Pal </span>
             from <span className="purple"> Kolkata,India </span>
             <br />
             I am a 2nd year student pursuing my B-Tech degree in Computer Science and Information Technology
             from University of Engineering and Management, Kolkata
             <br/>
             <br/>
             I also like a bunch of other activities to do!
         </p>
         <ul>
            <li className="about-activity">
               <ImArrowRight/>  Painting
            </li>
            <li className="about-activity">
               <ImArrowRight/>  Reading Books
            </li>
            <li className="about-activity">
                <ImArrowRight/> Travelling
            </li>
         </ul>
     </blockquote>
  </Card.Body>
</Card>
)
}
export default AboutCard
