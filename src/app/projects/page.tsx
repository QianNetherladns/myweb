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

      <section className="projects-section" id="projects" style={{ paddingTop: "100px", minHeight: "100vh" }}>
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">{content.projects.subtitle}</p>
          
          <div className="projects-grid">
            {content.projects.items.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a href={project.site} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  {(project.showLinks || project.showVideo) && (
                    <div className="project-actions">
                      {project.showLinks && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn github-btn">
                          <i className="fab fa-github"></i>
                          <span>Code</span>
                        </a>
                      )}
                      {project.showVideo && (
                        <a href={project.video} target="_blank" rel="noopener noreferrer" className="action-btn video-btn">
                          <i className="fab fa-youtube"></i>
                          <span>Video</span>
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
