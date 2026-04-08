import React, { useRef, useEffect } from 'react';

class Node {
  constructor(w, h) {
    this.reset(w, h);
  }

  reset(w, h) {
    this.originX = Math.random() * w;
    this.originY = Math.random() * h;
    this.x = this.originX;
    this.y = this.originY;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.radius = Math.random() * 2 + 1;
    
    // Explosion random direction
    const angle = Math.random() * Math.PI * 2;
    const force = Math.random() * 400 + 200;
    this.explodeX = Math.cos(angle) * force;
    this.explodeY = Math.sin(angle) * force;
  }

  update(w, h, explosion) {
    // Base movement
    this.originX += this.vx;
    this.originY += this.vy;

    // Wrap around
    if (this.originX < 0) this.originX = w;
    if (this.originX > w) this.originX = 0;
    if (this.originY < 0) this.originY = h;
    if (this.originY > h) this.originY = 0;

    // Apply explosion offset
    this.x = this.originX + this.explodeX * explosion;
    this.y = this.originY + this.explodeY * explosion;
  }
}

const NetworkCanvas = ({ explosionProgress = 0, mousePos = { x: -1000, y: -1000 } }) => {
  const canvasRef = useRef(null);
  const nodesRef = useRef([]);
  const mouseRef = useRef(mousePos);
  const explosionRef = useRef(explosionProgress);
  const animationFrameId = useRef();
  
  const particlesCount = 80;
  const connectionDistance = 150;

  // Sync refs to avoid effect re-runs
  useEffect(() => {
    mouseRef.current = mousePos;
  }, [mousePos]);

  useEffect(() => {
    explosionRef.current = explosionProgress;
  }, [explosionProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      
      // Init nodes
      nodesRef.current = Array.from({ length: particlesCount }, () => new Node(w, h));
    };

    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      
      // Background base color
      ctx.fillStyle = '#fdfdfc'; 
      ctx.fillRect(0, 0, w, h);

      const nodes = nodesRef.current;
      const currentExplosion = explosionRef.current;
      const currentMouse = mouseRef.current;
      
      // Update nodes
      nodes.forEach(node => node.update(w, h, currentExplosion));

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const mouseDx = (nodes[i].x + nodes[j].x) / 2 - currentMouse.x;
            const mouseDy = (nodes[i].y + nodes[j].y) / 2 - currentMouse.y;
            const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
            
            let opacity = 1 - dist / connectionDistance;
            let lineWidth = 0.5;
            let color = 'rgba(61, 68, 50, 0.1)'; // Faint olive

            if (mouseDist < 150) {
              const mouseFactor = 1 - mouseDist / 150;
              opacity = Math.min(1, opacity + mouseFactor * 0.5);
              lineWidth = 0.5 + mouseFactor * 1.5;
              color = `rgba(61, 68, 50, ${opacity * 0.8})`; 
            }

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = color;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(61, 68, 50, 0.2)'; 
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []); 

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default NetworkCanvas;
