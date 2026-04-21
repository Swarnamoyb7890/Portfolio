import React, { useState, useEffect, useRef } from 'react';
import './SkillStrip.css';

function SkillStrip() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', level: 60, icon: '🟧', label: 'Intermediate' },
        { name: 'CSS', level: 65, icon: '🔵', label: 'Intermediate' },
        { name: 'JavaScript', level: 50, icon: '🟨', label: 'Intermediate' },
        { name: 'React', level: 50, icon: '⚛️', label: 'Intermediate' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 40, icon: '🟢', label: 'Intermediate' },
        { name: 'MongoDB', level: 45, icon: '🍃', label: 'Intermediate' },
        { name: 'REST APIs', level: 35, icon: '🚀', label: 'Beginner' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 40, icon: '📁', label: 'Beginner' },
        { name: 'Responsive Design', level: 50, icon: '📱', label: 'Beginner' },
        { name: 'Authentication', level: 40, icon: '🔒', label: 'Beginner' },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skill-strip" ref={sectionRef}>
      <div className="container skill-strip-inner">
        <h2 className="section-subtitle">Technical Expertise</h2>
        <div className="skills-categories">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-name-wrap">
                        <span className="skill-icon">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="skill-label">{skill.label}</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div
                        className={`skill-bar-fill ${isVisible ? 'animate' : ''}`}
                        style={{ '--target-width': `${skill.level}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillStrip;
