import React, { useEffect, useState } from "react";
import "./HeroTitle.css";

export default function HeroTitle() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger fade-in when component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); // slight delay for smoothness

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      <div
        className="hero-background"
        style={{ backgroundImage: `url("/hero-bg.jpg")` }}
      ></div>

      <div className="hero-content">
        <h1 className={`hero-title ${animate ? "visible" : ""}`}>
          Welcome to My Site
        </h1>
        <h2 className={`hero-subtitle ${animate ? "visible" : ""}`}>
          Discover Something Extraordinary
        </h2>
      </div>
    </section>
  );
}
