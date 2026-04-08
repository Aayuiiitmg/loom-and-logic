import React, { useRef, useEffect } from 'react';

const TechBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h;
    let dots = [];
    const spacing = 30;
    let pulseX = -500;
    const pulseSpeed = 8;
    const pulseWidth = 400;

    const init = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      dots = [];
      for (let x = 0; x < w; x += spacing) {
        for (let y = 0; y < h; y += spacing) {
          dots.push({ x, y });
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      
      // Update pulse
      pulseX += pulseSpeed;
      if (pulseX > w + pulseWidth) {
        pulseX = -pulseWidth - Math.random() * 2000; // Delay before next pulse
      }

      dots.forEach(dot => {
        const dist = Math.abs(dot.x - pulseX);
        let size = 1;
        let opacity = 0.1;
        let color = '#3d4432';

        if (dist < pulseWidth) {
          const factor = 1 - dist / pulseWidth;
          opacity = 0.1 + factor * 0.8;
          size = 1 + factor * 1.5;
          // Interpolate to bright neon olive if needed
          color = `rgba(61, 68, 50, ${opacity})`;
        } else {
          color = `rgba(61, 68, 50, ${opacity})`;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    init();
    animate();

    return () => window.removeEventListener('resize', init);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none opacity-40"
      style={{ zIndex: 0 }}
    />
  );
};

export default TechBackground;
