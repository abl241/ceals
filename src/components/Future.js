import React, { useEffect, useRef } from 'react';
import './Future.css';

function Future() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="future-section" ref={sectionRef}>
      <h2 className="future-title">Our Future Plans & Expansion</h2>
      <div className="future-content">
        <p>
          We're just getting started. Our vision is to expand our technology to support all first responders, from firefighters to paramedics and beyond. We're working on new features, broader distribution, and partnerships to make our gloves available worldwide. Join us as we build the future of rescue technology.
        </p>
        <ul className="future-list">
          <li>Next-gen smart gloves with biometric feedback</li>
          <li>Expansion to international markets</li>
          <li>Collaborations with leading safety organizations</li>
          <li>Continuous R&D for new rescue gear</li>
        </ul>
        <div className="waitlist-container">
          <button className="waitlist-btn">Join the Waitlist</button>
        </div>
      </div>
    </section>
  );
}

export default Future;
