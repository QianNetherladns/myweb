'use client';

import { useEffect } from 'react';
import content from '../../config/content.json';

export default function About() {
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
        <link href="https://fonts.googleapis.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Leckerli+One&family=Lilita+One&family=Patrick+Hand&family=Shadows+Into+Light&display=swap" rel="stylesheet" />
        <link href="/style.css" rel="stylesheet" />
      </head>

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
                    className={item.link === '/about' ? 'nav-active' : ''}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <section className="about-comprehensive" id="about" style={{ paddingTop: "100px", minHeight: "100vh" }}>
        {/* 页面标题区域 */}
        <div className="page-header">
          <h1 className="page-title">{content.about.title}</h1>
          <p className="page-subtitle">{content.about.subtitle}</p>
        </div>

        <div className="about-container">
          {/* 主要内容区域 */}
          <div className="main-content">
            {/* 个人介绍卡片 */}
            <div className="intro-card">
              <div className="intro-content">
                <h2>{content.about.intro.title}</h2>
                <p>{content.about.intro.description}</p>
                
                <div className="key-highlights">
                  {content.about.highlights.map((highlight, index) => (
                    <div key={index} className="highlight-item">
                      <div className="highlight-icon">{highlight.icon}</div>
                      <div className="highlight-text">
                        <h4>{highlight.title}</h4>
                        <p>{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 技能展示区域 */}
            <div className="skills-showcase">
              <h2>{content.about.skills.title}</h2>
              <div className="skills-grid">
                {content.about.skills.categories.map((category, index) => (
                  <div key={index} className="skill-category">
                    <h3>{category.title}</h3>
                    <div className="skill-tags">
                      {category.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 工作经验时间轴 */}
            <div className="experience-timeline">
              <h2>{content.experience.title}</h2>
              <div className="timeline-container">
                {content.experience.timeline.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker">
                      <div className="marker-dot"></div>
                      <div className="timeline-line"></div>
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h3>{item.title}</h3>
                        <span className="timeline-company">{item.company}</span>
                      </div>
                      <div className="timeline-period">{item.period}</div>
                      <p className="timeline-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 侧边栏 */}
          <div className="sidebar">
            {/* 个人照片 */}
            <div className="profile-card">
              <div className="profile-image">
                <img src={content.about.profile.image} alt="Profile" />
              </div>
              <div className="profile-info">
                <h3>{content.about.profile.name}</h3>
                <p className="profile-title">{content.about.profile.title}</p>
                <p className="profile-location">{content.about.profile.location}</p>
              </div>
            </div>

            {/* 联系方式 */}
            <div className="contact-card">
              <h3>{content.about.contact.title}</h3>
              <p>{content.about.contact.description}</p>
              
              <div className="contact-methods">
                <a href={`mailto:${content.about.contact.email}`} className="contact-method">
                  <div className="method-icon">✉️</div>
                  <div className="method-text">
                    <span>Email</span>
                    <small>{content.about.contact.email}</small>
                  </div>
                </a>
                
                <div className="social-links">
                  <h4>Follow Me</h4>
                  <div className="social-icons">
                    {content.contact.social.map((social, index) => (
                      <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src={`/images/${social.icon}.svg`} alt={social.name} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
