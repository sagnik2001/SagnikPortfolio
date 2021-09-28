import {React,useState,useEffect} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { BsBoxArrowUpRight } from "react-icons/bs";
import Resumecontent from "./ResumeContent"
import pdf from "./pdf/resume-sample.pdf"
import "./Resume.css"
const Resume=()=>{
  const url="https://portfoliodata-77693-default-rtdb.firebaseio.com/message.json/"
  const [cgpa,Setcgpa]=useState(0)
  const [sem,Setsem]=useState(0)
  const [gfg,Setgfg]=useState(0)
  useEffect(()=>{
    const fetchMarks = async () => {
      try {
        const response = await fetch(url);
        const responseData = await response.json();
        console.log(responseData);
        Setcgpa(responseData.cgpa)
        Setsem(responseData.sem)
        Setgfg(responseData.geeksforgeeks)

      } catch (e) {
        console.log(e);
      }

   }
   fetchMarks()
  },[])

  return(
     <Container fluid className="resume-section">
        <Container>
        <Row style={{justifyContent: 'center',position: 'relative' }} className="boton">
        <Button variant="primary" href={pdf} target="_blank">
           <BsBoxArrowUpRight/>
           &nbsp;Download CV
           </Button>
           </Row>
           <Row className="resume">
              <Col md={6} className="resume-left">
                <h3 className="resume-title">Experience</h3>
                <Resumecontent
                  title="No Internship yet"
                  date="No date"
                  content={[

                    "Not done anything yet",

                  ]}
                />
                <h3 className="resume-title">Extracurricular Activities</h3>
                <Resumecontent
                  title="Web Developer [Uem Web Battle Hackathon]"
                  content={[
                    "Worked on building front-end UI design using HTML, CSS, JavaScript ,React.",
                  ]}
                />
              </Col>
              <Col md={6} className="resume-right">
                <h3 className="resume-title">Education</h3>
                <Resumecontent
                  title="Schooling-Methodist School Dankuni,Hoogly"
                  date="2007- 2020"
                  content={["ISC Marks-92.5%"]}
                />
                <Resumecontent
                  title="University Of Engineering And Management "
                  date="2020 - Present"
                  content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
                />



                <h3 className="resume-title">Ranks and Achivements</h3>
                <Resumecontent
                  title=""
                  content={[
                    `Current score in Gfg ${gfg}`,
                   "No more hope for more.."
                  ]}
                />
              </Col>
            </Row>
            <Row style={{ justifyContent: "center", position: "relative" }} className="boton" >
              <Button variant="primary" href={pdf} target="_blank">
                <BsBoxArrowUpRight />
                &nbsp;Download CV
              </Button>
              </Row>

      </Container>
      </Container>
  )
}
export default Resume
