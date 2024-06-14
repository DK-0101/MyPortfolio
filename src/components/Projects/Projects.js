import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import gym from "../../Assets/Projects/dkgym.png";
import ecommerce from "../../Assets/Projects/dkecommerce.png";
import jobsHere from "../../Assets/Projects/dkjobs.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="DKgym Fitness"
              description="Welcome to DKgym Fitness, your ultimate destination for all things fitness! Our site, built with React, RapidAPI, and Tailwind, offers a sleek and intuitive experience to help you achieve your fitness goals. 😃server on"
              ghLink="https://github.com/DK-0101/fitness-dkgym"
              demoLink="https://fitness-dkgym-seven.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce"
              description="Welcome to our eCommerce platform! Powered by Node.js and Express, our site offers a seamless shopping experience with secure login through JSON Web Tokens and robust data management using MongoDB. Discover a wide range of products, enjoy fast and secure transactions, and experience the future of online shopping with us. Shop now and join our community of satisfied customers! 😔server off"
              ghLink="https://github.com/DK-01-01/sscomerce"
              demoLink="https://sscomerces.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobsHere}
              isBlog={false}
              title="Jobs Here"
              description="Welcome to Find Here, your premier destination for job searching! Built with React, TailwindCSS, and MongoDB, and featuring secure login through Firebase, our site offers a user-friendly and secure platform to connect job seekers with their dream opportunities. Start your journey to a new career with Find Here today! 😔server off"
              ghLink="https://github.com/DK-0101/job-here"
              demoLink="https://job-here.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
