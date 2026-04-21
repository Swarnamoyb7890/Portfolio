import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact-card">
        <h2 className="section-title contact-title">Let&apos;s work together</h2>
        <p className="contact-intro">
          Open to internships, full-time roles, and collaboration on impactful products. If you have an
          idea, project, or opportunity, I&apos;d love to connect.
        </p>
        <div className="contact-meta">
          <span>Based in India</span>
          <span>Available for remote collaboration</span>
          <span>Quick response within 24 hours</span>
        </div>
        <div className="contact-links">
          <a href="mailto:swarnamoyb7890@gmail.com">swarnamoyb7890@gmail.com</a>
          <a href="tel:+918252473945">+91 82524 73945</a>
          <a href="https://github.com/Swarnamoyb7890" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/swarnamoybanerjee" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="contact-actions">
          <a className="btn btn-primary" href="mailto:swarnamoyb7890@gmail.com">
            Send Email
          </a>
          <a className="btn btn-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
