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
        {/* Projects Showcase - EXACTLY LIKE IMAGE */}
        <section className="projects-showcase-section">
          <div className="projects-container">
            <div className="section-header">
              <h2 className="section-title">This helps potential clients or employers understand your capabilities.</h2>
            </div>
            
            <div className="projects-grid-container">
              {content.projects.items.map((project, index) => (
                <article key={index} className="project-card">
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-overlay">
                      <div className="overlay-content">
                        <div className="project-category">
                          <span className="category-tag">Data Project</span>
                        </div>
                        <div className="project-link">
                          {project.showLinks && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-action-btn">
                              <i className="fas fa-code"></i>
                            </a>
                          )}
                          {project.showVideo && (
                            <a href={project.video} target="_blank" rel="noopener noreferrer" className="project-action-btn">
                              <i className="fas fa-play"></i>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-status">
                        <div className="status-indicator"></div>
                        <span className="status-text">Completed</span>
                      </div>
                    </div>
                    
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}