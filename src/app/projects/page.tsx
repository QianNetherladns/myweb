'use client';

import { useEffect } from 'react';
import content from '../../config/content.json';

export default function Projects() {
  useEffect(() => {
    // 处理菜单点击
    const handleMenuClick = () => {
      const menu = document.querySelector('.menu');
      menu?.classList.toggle('active');
    };

    // 添加事件监听器
    document.querySelector('.menu-toggle')?.addEventListener('click', handleMenuClick);

    // Add/remove projects-page class to body
    document.body.classList.add('projects-page');

    // 清理函数
    return () => {
      document.querySelector('.menu-toggle')?.removeEventListener('click', handleMenuClick);
      document.body.classList.remove('projects-page');
    };
  }, []);

  return (
    <>
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
      </head>
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Leckerli+One&family=Lilita+One&family=Patrick+Hand&family=Shadows+Into+Light&display=swap" rel="stylesheet" />
      <link href="/style.css" rel="stylesheet" />

      <header>
        <nav id="navBar" className="navBar">
          <div className="name" onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}>
            <h1>{content.nav.name}</h1>
          </div>
          <div className="menu-toggle" id="menuToggle">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className="menu" id="menu">
            <ul>
              {content.nav.menu.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link} 
                    className={item.link === '/projects' ? 'nav-active' : ''}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content Wrapper */}
      <main className="projects-page-wrapper" style={{ paddingTop: "80px" }}>
        {/* Hero Section */}
        <section className="projects-hero-section">
          <div className="projects-container">
            <div className="projects-hero-content">
              <div className="hero-badge">
                <span className="badge-text">Portfolio</span>
              </div>
              <h1 className="projects-hero-title">My Projects</h1>
              <p className="projects-hero-subtitle">{content.projects.subtitle}</p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">{content.projects.items.length}</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4</span>
                  <span className="stat-label">Technologies</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Quality</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Showcase - Like Reference Site */}
        <section className="projects-showcase-section">
          <div className="projects-container">
            <div className="section-header">
              <h2 className="section-title">Our Projects</h2>
              <p className="section-subtitle">Here you can showcase your best work. Each project should include a brief description, the technologies used, and any notable achievements. This helps potential clients or employers understand your capabilities.</p>
            </div>
            
            <div className="projects-grid-container">
              {content.projects.items.map((project, index) => (
                <article key={index} className="project-card">
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                  </div>
                  
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    
                    {(project.showLinks || project.showVideo) && (
                      <div className="project-actions">
                        {project.showLinks && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-button github-button">
                            <i className="fab fa-github"></i>
                            <span>View Code</span>
                          </a>
                        )}
                        {project.showVideo && (
                          <a href={project.video} target="_blank" rel="noopener noreferrer" className="action-button video-button">
                            <i className="fab fa-youtube"></i>
                            <span>Watch Demo</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="projects-cta-section">
          <div className="projects-container">
            <div className="cta-content">
              <h2 className="cta-title">Interested in Working Together?</h2>
              <p className="cta-subtitle">Let's discuss your next project and how I can help bring your ideas to life.</p>
              <div className="cta-actions">
                <a href="#contact" className="cta-button primary">Get In Touch</a>
                <a href="/" className="cta-button secondary">View Homepage</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
