import React, { useEffect, useRef } from 'react';
import './Mission.css';

function Mission() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10%',  // Trigger slightly before the element leaves viewport
      threshold: [0.1, 0.5, 0.9],  // Multiple thresholds for smoother transitions
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Get the element's opacity based on intersection ratio
        const opacity = Math.min(entry.intersectionRatio * 2, 1);
        const translateY = 50 * (1 - entry.intersectionRatio);
        
        // Apply smooth transitions based on scroll position
        entry.target.style.opacity = opacity;
        entry.target.style.transform = `translateY(${translateY}px)`;
        
        // Add/remove visible class for additional effects
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          entry.target.classList.add('visible');
        } else if (!entry.isIntersecting) {
          entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const inspirationSections = [
    {
      icon: '🚒',
      title: 'Born from Need',
      description: 'Developed after extensive research with firefighters who identified grip strength as a critical factor in emergency situations.',
      image: '/fireman.jpg'
    },
    {
      icon: '💪',
      title: 'Enhanced Performance',
      description: 'Cutting-edge technology that amplifies natural grip strength, allowing first responders to handle heavy equipment with greater control and confidence.',
      image: '/nasa.png'
    },
    {
      icon: '❤️',
      title: 'Saving Lives',
      description: 'Every feature is designed with one goal in mind: helping first responders save more lives while keeping themselves safe.',
      image: '/firefighter2.jpg'
    }
  ];

  return (
    <section className="mission-section">
      <div className="mission-hero" 
           ref={el => sectionRefs.current[0] = el}>
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p className="mission-statement">
            Empowering first responders with enhanced grip technology to save more lives.
          </p>
          <p className="mission-description">
            Every second counts in emergency response. Our innovative grip-enhancing gloves 
            give firefighters and first responders the extra strength they need when it 
            matters most.
          </p>
        </div>
      </div>

      <div className="inspiration-sections">
        {inspirationSections.map((section, index) => (
          <div 
            key={index}
            className="inspiration-section"
            ref={el => sectionRefs.current[index + 1] = el}
          >
            <div className="inspiration-content">
              <div className="section-icon">{section.icon}</div>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
            <div 
              className="section-image"
              style={{ backgroundImage: `url(${section.image})` }}
            />
          </div>
        ))}
      </div>

        <div className="stats-container">
          <div className="stat-item">
            <h3>200%</h3>
            <p>Grip Strength Increase</p>
          </div>
          <div className="stat-item">
            <h3>10K+</h3>
            <p>First Responders</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Emergency Ready</p>
          </div>
        </div>

    </section>
  );
}


export default Mission;