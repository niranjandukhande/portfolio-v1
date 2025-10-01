import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
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
      <p>
        &copy; {new Date().getFullYear()} Niranjan Dukhande. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
