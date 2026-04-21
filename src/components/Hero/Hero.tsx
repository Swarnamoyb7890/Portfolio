import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Hello</p>
          <h1 className="hero-title">I&apos;m Swarnamoy</h1>
          <h2 className="hero-role">Software Developer</h2>
          <p className="hero-text">
            I build fast, clean web experiences with React, Node.js, and modern UI patterns.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Got a project?
            </a>
            <a className="btn btn-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">
              My Resume
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glow-ring" />
          <div className="logo-watermark">
            <img src="/Portfolio/logo.png" alt="" aria-hidden="true" />
          </div>
          <div className="profile-circle">
            <img src="/Portfolio/profile.png" alt="Swarnamoy Banerjee" className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
