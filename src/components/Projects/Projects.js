import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Tetris from "../../Assets/Projects/Tetris.png";
import toe from "../../Assets/Projects/toe.png";
import podify from "../../Assets/Projects/podify.png";
import voting from "../../Assets/Projects/voting.png";
import Todo from "../../Assets/Projects/Todo.png";
import Gita from "../../Assets/Projects/Gita.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voting}
              isBlog={false}
              title="E-CHOICE"
              description="Smart Voting System on Polygon Network - A groundbreaking blockchain-based solution with face recognition security for fair and secure elections. Built on Polygon for scalability and efficiency, ensuring immutability of voting records"
              ghLink="https://github.com/niladri2002/Smart_Voting_System"
              demoLink="https://devfolio.co/projects/smart-voting-system-5e7d"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gita}
              isBlog={false}
              title="GITA-GPT"
              description="GitaGPT: Blending Bhagavad Gita's timeless wisdom and cutting-edge AI tech to offer profound insights and solutions for real-life challenges. Empowering individuals to navigate life with clarity and purpose"
              ghLink="https://github.com/niladri2002/GitaGPT"
              demoLink="https://gita-gpt-74713.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={podify}
              isBlog={false}
              title="PODIFY"
              description="Presenting PodifyApp, the ultimate podcast app where creators can upload and share their captivating videos and audios. Dive into a world of diverse content, discover new perspectives, and engage with a vibrant community. Unleash your creativity, and join the PodifyApp."
              ghLink="https://github.com/niladri2002/flipr_hackathon2023"
              demoLink="https://poddify.000webhostapp.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tetris}
              isBlog={false}
              title="TETRIS"
              description="Introducing TetrisMania - a captivating Tetris game built using Pygame! Experience the classic retro gameplay with a modern twist. Stack blocks, clear lines, and challenge your skills in this addictive puzzle adventure. Dive into the fun and test your reflexes. Get ready to embrace nostalgia and enjoy hours of endless entertainment with TetrisMania! "
              ghLink="https://github.com/niladri2002/Tetris"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toe}
              isBlog={false}
              title="TIC-TAC-TOE"
              description="Presenting Tic Tac Toe Android - a classic game built with Java for endless fun and friendly competition. Challenge your friends or play against AI, strategize your moves, and aim for victory in this timeless game. Experience the nostalgia on your Android device and relive the excitement of Tic Tac Toe. Get ready to make your mark and enjoy hours of entertainment with Tic Tac Toe Android!"
              ghLink="https://github.com/niladri2002/TIC-TAC-TOE"
              demoLink="https://drive.google.com/file/d/1xrk5bYj1gYw6Gnkvtyg5xbPU9ouCPnJy/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              isBlog={false}
              title="TODO-LIST"
              description="Introducing TaskEase - a feature-rich Todo web app that helps you stay organized and productive. Easily create, manage, and prioritize tasks in a user-friendly interface. Never miss a deadline again! Experience seamless collaboration and sync your tasks across devices. Start simplifying your life and boosting productivity with TaskEase!"
              ghLink="https://github.com/niladri2002/To-do2"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
