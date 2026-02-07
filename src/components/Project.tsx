import gupshup from "../assets/images/Gupshup.png";
import enhancedDimaag from "../assets/images/enhancedDimaag.png";
import blockEstate from "../assets/images/BlockEstate.png";
import weatherNow from "../assets/images/WeatherNow.png";

import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://enhanced-dimaag.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={enhancedDimaag}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://enhanced-dimaag.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Enhanced Dimaag</h2>
          </a>
          <p>
            Built a content organization web app with React, Express, and
            PostgreSQL to save and manage YouTube links, generate AI summaries
            via Google Gen AI, and support private/public sharing with Clerk
            authentication.
          </p>
        </div>
        <div className="project">
          <a
            href="https://progsolos-chat-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gupshup} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://progsolos-chat-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>GupShup</h2>
          </a>
          <p>
            Developed a real-time, room-based chat app using WebSockets to
            explore and deepen understanding of live data communication.
          </p>
        </div>
        <div className="project">
          <a
            href="https://drive.google.com/file/d/1jODfUU6oYJC7Tv2CpyXz712Adrxn1b52/view"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={blockEstate}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1jODfUU6oYJC7Tv2CpyXz712Adrxn1b52/view"
            target="_blank"
            rel="noreferrer"
          >
            <h2>BlockEstate</h2>
          </a>
          <p>
            Developed a blockchain-based real estate system as a final year
            project, automating ownership verification and securing transactions
            by tokenizing properties as NFTs.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/niranjandukhande/WeatherNow"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={weatherNow}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/niranjandukhande/WeatherNow"
            target="_blank"
            rel="noreferrer"
          >
            <h2>WeatherNow</h2>
          </a>
          <p>
            Built a real-time weather app with interactive maps using
            OpenWeather API and Leaflet to explore geolocation-based data
            fetching and modern React patterns.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
