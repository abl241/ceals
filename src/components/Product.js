import React, { useEffect, useRef, useState } from 'react';
import './Product.css';
import ModelGlove from './Model';

function Product() {
  const sectionRefs = useRef([]);
  const [currentLayer, setCurrentLayer] = useState(0);
  
  const layersList = [
    "Outer Shell: Heat-resistant Aramid Fabric",
    "Layer 2: Self-Healing Polyimide - seals microtears, protects inner lining",
    "Layer 3: Mechanical Support Frame - lightweight exoskeleton with actuators",
    "Layer 4: Thermal Insulation Foam - minimizes conductive heat",
    "Layer 5: Inner Comfort Liner - breathable, moisture-wicking material"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLayer((prev) => (prev + 1) % layersList.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const specs = [
    {
      title: "Enhanced Grip",
      value: "200%",
      description: "Increase in grip strength",
      icon: "💪"
    },
    {
      title: "Durability",
      value: "5000hrs",
      description: "Operational lifespan",
      icon: "⚡"
    },
    {
      title: "Response Time",
      value: "0.1s",
      description: "Activation speed",
      icon: "⚡"
    },
    {
      title: "Weight",
      value: "280g",
      description: "Ultra-lightweight design",
      icon: "🪶"
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-5%',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        // Calculate opacity based on intersection ratio
        const opacity = Math.min(entry.intersectionRatio * 1.5, 1);
        const translateY = 30 * (1 - entry.intersectionRatio);
        const scale = 0.9 + (entry.intersectionRatio * 0.1);
        
        // Apply smooth transitions
        entry.target.style.opacity = opacity;
        entry.target.style.transform = `translateY(${translateY}px) scale(${scale})`;
        
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          entry.target.classList.add('visible');
        } else if (!entry.isIntersecting) {
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="product-section">
      <div className="product-hero" ref={el => sectionRefs.current[0] = el}>
        <h1 className="product-title">GripTech Pro</h1>
        <p className="product-subtitle">Next-Generation Rescue Gear</p>
      </div>

      <div className="product-showcase" ref={el => sectionRefs.current[1] = el}>
        <div className="product-info-text">
          <div className="product-info-title">Experience the Future of Rescue</div>
          <div className="product-info-blurb">
            The GripTech Pro glove combines advanced materials and smart engineering to give first responders the power, dexterity, and safety they need in the field. Explore our interactive 3D model to see every detail.
          </div>
        </div>
        <div className="product-image-container">
          <ModelGlove />
        </div>
      </div>

      <div className="product-specs" ref={el => sectionRefs.current[2] = el}>
        <h2 className="specs-title">Technical Specifications</h2>
        <div className="specs-grid">
          {specs.map((spec, index) => (
            <div 
              key={index} 
              className="spec-card"
              ref={el => sectionRefs.current[index + 3] = el}
            >
              <div className="spec-icon">{spec.icon}</div>
              <div className="spec-content">
                <h3>{spec.title}</h3>
                <div className="spec-value">{spec.value}</div>
                <p>{spec.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="product-features" ref={el => sectionRefs.current[7] = el}>
        <div className="feature-content">
          <h2>Multi-layered Design</h2>
          <div className="carousel-container">
            {layersList.map((layer, index) => (
              <div
                key={index}
                className={`carousel-slide ${currentLayer === index ? 'active' : ''}`}
              >
                {layer}
              </div>
            ))}
            <div className="carousel-indicators">
              {layersList.map((_, index) => (
                <div
                  key={index}
                  className={`carousel-indicator ${currentLayer === index ? 'active' : ''}`}
                  onClick={() => setCurrentLayer(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;