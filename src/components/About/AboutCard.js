import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Niladri Sadhu </span>
            from <span className="purple"> Durgapur, West Bengal ,India.</span>
            <br /> I am  a pre-final year student at  <span className="purple">IIIT Kalyani</span> , an institute of national importance.
            With a passion for technology, I actively participated in  <span className="purple">Winter of Code 3.0</span>  conducted by IIIT Kalyani and successfully completed <span className="purple">Hacktoberfest 2022</span> 
            , gaining experience in <span className="purple">open-source contributions</span> and technologies like <span className="purple">ReactJS, HTML, CSS,</span> and more. I also have hands-on experience with <span className="purple">Node.js, Express.js, and MongoDB</span> . Additionally, I achieved notable ranks in coding competitions like <span className="purple">Codechef's December Long 2022 Division 3</span>  and <span className="purple">Codacharya.</span>
            <br />
           
            <br />
            <br />
           
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
