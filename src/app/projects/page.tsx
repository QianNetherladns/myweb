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

    // 清理函数
    return () => {
      document.querySelector('.menu-toggle')?.removeEventListener('click', handleMenuClick);
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

      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <div className="projects-hero-content">
            <h1 className="projects-hero-title">My Projects</h1>
            <p className="projects-hero-subtitle">{content.projects.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-showcase">
        <div className="container">
          <div className="projects-grid-modern">
            {content.projects.items.map((project, index) => (
              <div key={index} className="project-card-modern">
                <div className="project-image-modern">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay-modern">
                    <a href={project.site} target="_blank" rel="noopener noreferrer" className="project-link-modern">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="project-content-modern">
                  <div className="project-header">
                    <h3 className="project-title-modern">{project.title}</h3>
                    <div className="project-status">
                      <span className="status-dot"></span>
                      <span className="status-text">Active</span>
                    </div>
                  </div>
                  <p className="project-description-modern">{project.description}</p>
                  <div className="project-technologies-modern">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag-modern">{tech}</span>
                    ))}
                  </div>
                  {(project.showLinks || project.showVideo) && (
                    <div className="project-actions-modern">
                      {project.showLinks && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn-modern github-btn-modern">
                          <i className="fab fa-github"></i>
                          <span>View Code</span>
                        </a>
                      )}
                      {project.showVideo && (
                        <a href={project.video} target="_blank" rel="noopener noreferrer" className="action-btn-modern video-btn-modern">
                          <i className="fab fa-youtube"></i>
                          <span>Watch Video</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
