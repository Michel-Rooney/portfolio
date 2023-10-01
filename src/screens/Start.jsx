import "../styles/Start.css";

function Start() {
  return (
    <>
      <section className="Start-container">
        <div className="Start-title-container">
          <img
            src="/assets/terminal.png"
            alt="Terminal Simbolo"
            className="Start-title-icon"
          />
          <div className="Start-title">
            <h1 className="Start-title-h1">Michel Rooney</h1>
            <h2 className="Start-title-h2">DESENVOLVEDOR</h2>
          </div>
        </div>
        <div className="Start-social-container">
          <a
            href="https://github.com/Michel-Rooney/"
            target="_blank"
            rel="noreferrer"
            className="Start-Social-item"
          >
            <img
              src="/assets/technologies/github.png"
              alt="GitHub Logo"
              title="GitHub"
              className="Start-Social-item-image"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/michel-rooney-aabb63234/"
            target="_blank"
            rel="noreferrer"
            className="Start-Social-item"
          >
            <img
              src="/assets/linkedin.png"
              alt="Linkedin Logo"
              title="LinkedIn"
              className="Start-Social-item-image"
            />
          </a>
          <a
            href="/assets/Currículo-Michel-Rooney-2023.pdf"
            download="Currículo-Michel-Rooney-2023"
            target="_blank"
            rel="noreferrer"
            className="Start-Social-item"
          >
            <img
              src="/assets/docs.png"
              alt="Currículo Logo"
              title="Currículo"
              className="Start-Social-item-image"
            />
          </a>
          <a
            href="mailto:michelrooney16@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="Start-Social-item"
          >
            <img
              src="/assets/gmail.png"
              alt="Gmail Logo"
              title="Gmail"
              className="Start-Social-item-image"
            />
          </a>
        </div>
      </section>
      <section className="Start-about-container">
        
      </section>
    </>
  );
}

export default Start;
