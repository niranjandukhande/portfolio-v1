import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const frontendLabels = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Responsive Design",
  "UI Libraries",
];

const backendLabels = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Mongoose",
  "Prisma",
  "Drizzle",
  "REST API",
  "Authentication",
  "JWT",
  "Error Handling",
];

const devopsLabels = [
  "Git & GitHub",
  "Docker",
  "CI/CD",
  "Deployment",
  "Environment Variables",
  "Cloud Basics",
];
function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Frontend Development</h3>
            <p>
              Building responsive web apps with React, Next.js, and TypeScript.
              Skilled in Tailwind CSS, UI libraries, and WebSockets for dynamic
              user experiences.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {frontendLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faNodeJs} size="3x" />
            <h3>Backend Development</h3>
            <p>
              Developing scalable backend APIs with Node.js, Express, MongoDB,
              and PostgreSQL. Experienced with JWT authentication and ORMs like
              Mongoose, Prisma, and Drizzle.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {backendLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>Devops Basics</h3>
            <p>
              Managing deployments with Git, Docker, and CI/CD pipelines.
              Familiar with environment setup and basic cloud operations for
              smooth production workflows.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {devopsLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
