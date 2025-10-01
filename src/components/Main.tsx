import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import "../assets/styles/Main.scss";
import pfp1 from "../assets/images/Miyamoto Musashi.jpg";
// import pfp2 from "../assets/images/toji.jpg";
function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={pfp1} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/niranjandukhande"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/niranjan-dukhande/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a href="mailto:progsolos@gmail.com" rel="noreferrer">
              <MailIcon />
            </a>
          </div>
          <h1>Niranjan Dukhande</h1>
          <p>Developer.</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/niranjandukhande"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/niranjan-dukhande/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a href="mailto:progsolos@gmail.com" rel="noreferrer">
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
