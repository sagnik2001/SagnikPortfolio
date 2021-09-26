import React from 'react';
import Typewriter from "typewriter-effect";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css"

const Header=()=>{
  return(

       <Container fluid className="home-section" id="home">

         <Container className="home-content">
           <Row>
             <Col md={7} className="home-header">
               <h1 style={{ paddingBottom: 15 }} className="heading">
                 Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
               </h1>

               <h1 className="heading-name">
                 I'M
                 <strong className="main-name"> SAGNIK PAL</strong>
               </h1>

               <div style={{ padding: 50, textAlign: "left" }}>
               <Typewriter
      options={{
        strings: [
          "Developer",
          "Programmer",
          "Front End Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
               </div>
             </Col>

             <Col md={5} style={{ paddingBottom: 20 }}>
               <img src="https://github.com/soumyajit4419/Portfolio/blob/master/src/Assets/about.png?raw=true" alt="home pic" className="img-fluid" />
             </Col>
           </Row>
         </Container>
       </Container>

  )
}
export default Header
