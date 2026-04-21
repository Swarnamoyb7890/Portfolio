import './About.css';

function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div className="services">
          <article className="service-card">
            <h3>Website Development</h3>
            <p>Responsive, user-focused web interfaces with modern frontend tooling.</p>
          </article>
          <article className="service-card">
            <h3>App Development</h3>
            <p>Reusable React component systems connected to robust backend services.</p>
          </article>
          <article className="service-card">
            <h3>Website Hosting</h3>
            <p>Deployable project setup with optimized builds and maintainable structure.</p>
          </article>
        </div>

        <div className="about-copy">
          <h2>About me</h2>
          <p>
            I am a student and aspiring web developer currently seeking an internship to apply my technical 
            skills in a professional environment. I focus on building responsive and user-friendly web 
            applications using modern technologies like React and Node.js.
          </p>
          <div className="stats">
            <div>
              <strong>3+</strong>
              <span>Personal Projects</span>
            </div>
            <div>
              <strong>7+</strong>
              <span>Core Technologies</span>
            </div>
            <div>
              <strong>Active</strong>
              <span>Learner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
