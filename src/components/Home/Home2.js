import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Niladri.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const mystyle = {
    height: '22em',
    border: '1px',
   
  };
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            ALLOW ME TO <span className="purple"> INTRODUCE </span>MYSELF
            </h1>
            <p className="home-about-body">
            I am a passionate developer with a love for coding and expertise in <b className="purple"> C, C++, Java, and Python</b>. Currently mastering <b className="purple"> MERN stack development</b>, I aspire to pursue a rewarding career in the field, contributing to innovative projects and making a positive impact.
              <br />
              
              
              <br />
              <br />
             
              <i>
              </i>
              
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
               <img src={myImg} style={mystyle}  className="img-fluid" alt="avatar" /> 
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/niladri2002"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/niladri_sadhu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/niladri-sadhu-251a0b22a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/noob_coder_10000/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.codechef.com/users/niladri_2002"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiCodechef />
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
