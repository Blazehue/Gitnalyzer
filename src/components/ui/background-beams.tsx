"use client";

import { useEffect, useRef } from "react";

export const BackgroundBeams = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const beams: Array<{
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 15; i++) {
      beams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        length: Math.random() * 100 + 100,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      beams.forEach((beam) => {
        const gradient = ctx.createLinearGradient(
          beam.x,
          beam.y,
          beam.x,
          beam.y + beam.length
        );
        gradient.addColorStop(0, `rgba(184, 148, 59, 0)`);
        gradient.addColorStop(0.5, `rgba(184, 148, 59, ${beam.opacity})`);
        gradient.addColorStop(1, `rgba(184, 148, 59, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(beam.x, beam.y, 2, beam.length);

        beam.y += beam.speed;

        if (beam.y > canvas.height) {
          beam.y = -beam.length;
          beam.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};