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
import book from "../../Assets/Projects/book.png";
import socket from "../../Assets/Projects/socket.jpg";
import roots from "../../Assets/Projects/roots.png";
import freds from "../../Assets/Projects/freds.jpeg";
import plate from "../../Assets/Projects/plate.jpg";
import quest from "../../Assets/Projects/quest.png";

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
              imgPath={freds}
              isBlog={false}
              title="FREDS"
              description="FREDS is a decentralized social media project prioritizing user privacy and global expression."
               ghLink="https://github.com/niladri2002/FREDS"
              demoLink="https://youtu.be/PEVLJlpf_3M"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Personal BookShelf"
              description="Personal Bookshelf is a React web app that enables users to search for books using the Open Library API, efficiently handling API requests with debouncing. Users can save their favorite books to a personal bookshelf stored persistently using localStorage."
              ghLink="https://github.com/niladri2002/Personal-Bookshelf"
              demoLink="https://niladri2002-personal-bookshelf.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socket}
              isBlog={false}
              title="SocketPilot"
              description="SocketPilot is a remote access tool using socket programming. Features include checking files, changing directories, and opening files on connected systems. User-friendly interface ensures smooth remote operations."
              ghLink="https://github.com/niladri2002/SocketPilot"
              demoLink="https://github.com/niladri2002/SocketPilot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={roots}
              isBlog={false}
              title="RuralRoots"
              description="RuralRoots is an online village shop platform facilitating direct sales between sellers and customers, with a feature allowing customers to contact sellers directly via email."
               ghLink="https://github.com/niladri2002/RuralRoots"
              demoLink="https://github.com/niladri2002/RuralRoots"
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
              imgPath={quest}
              isBlog={false}
              title="QuestCraft"
              description="QuestCraft is a cutting-edge Question Paper Generator designed to streamline the process of creating customized question papers."
                 ghLink="https://github.com/niladri2002/QuestCraft"
              demoLink="https://github.com/niladri2002/QuestCraft"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plate}
              isBlog={false}
              title="PlateWatch"
              description="PlateWatch is a Automated Number Plate Recognition for Enhanced Traffic Management"
                ghLink="https://github.com/niladri2002/PlateWatch"
              demoLink="https://github.com/niladri2002/PlateWatch"
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
