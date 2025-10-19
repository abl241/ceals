import React, { useEffect, useRef } from 'react';
import './Team.css';

const teamMembers = [
  { name: 'Alex Lee', role: 'Computer Science & BBA', img: '/alex.png' },
  { name: 'Leo Song', role: 'Chemistry BS', img: '/leo.jpg' },
  { name: 'Ethan Xu', role: 'Chemistry BS', img: '/ethan.jpg' },
  { name: 'Anthony Wu', role: 'Finance and AI BBA', img: '/anthony.png' },
  { name: 'James Choi', role: 'Finance and Real Estate BBA', img: '/james.jpeg' },
  { name: 'Shaunak Mehta', role: 'History & Operations and Management BBA', img: '/shaunak.png' }
];

function Team() {
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
    <section className="team-section" ref={sectionRef}>
        <h2 className="team-title">Meet Our Team</h2>
        <div className="about-us">
          <p>
            We are a passionate team of engineers, designers, and innovators dedicated to empowering first responders. Our mission is to create technology that saves lives and makes rescue operations safer and more effective. With diverse backgrounds and a shared vision, we strive to push the boundaries of what's possible for those who serve our communities.
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div className="team-card" key={idx}>
              <div className="team-img-container">
                <img src={member.img} alt={member.name} className="team-img" />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}

export default Team;
