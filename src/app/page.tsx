'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import content from '../config/content.json';

export default function Home() {
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
                    className={item.link === '/' ? 'nav-active' : ''}
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
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Hello, I'm <span className="auto-type">{content.hero.name}</span></h1>
            <p className="hero-subtitle">{content.hero.title}</p>
            <p className="hero-description">{content.hero.description}</p>
            <div className="hero-buttons">
              <a href="/projects" className="btn btn-primary">{content.hero.buttons.projects.text}</a>
            </div>
            <div className="hero-info">
              <div className="base-info">
                <span className="base-text">📍 Based in Tilburg, Netherlands</span>
              </div>
              <div className="follow-me">
                <span className="follow-text">Follow Me</span>
                <div className="hero-social">
                  {content.contact.social.map((social, index) => (
                    <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                      <img src={`/images/${social.icon}.svg`} alt={social.name} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-hexagon">
              {/* 嵌套六边形结构 - 同心圆排列 */}
              <div className="hexagon-layer hexagon-1"></div>
              <div className="hexagon-layer hexagon-2"></div>
              <div className="hexagon-layer hexagon-3"></div>
              <div className="hexagon-layer hexagon-4"></div>
              <div className="hexagon-layer hexagon-5"></div>
              
              {/* 三条对角线 */}
              <div className="diagonal-line diagonal-1"></div>
              <div className="diagonal-line diagonal-2"></div>
              <div className="diagonal-line diagonal-3"></div>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">{content.contact.description}</p>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href={`mailto:${content.contact.info.email}`}>{content.contact.info.email}</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>{content.contact.info.location}</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 