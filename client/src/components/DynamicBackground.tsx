import { useEffect, useRef } from "react";

export function DynamicBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return; // Disable on mobile for performance
      if (!glowRef.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glowRef.current.style.left = `${x}px`;
      glowRef.current.style.top = `${y}px`;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
    >
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Animated glow effect that follows mouse */}
      <div
        ref={glowRef}
        className="absolute w-96 h-96 bg-primary/15 rounded-full blur-3xl transition-all duration-100 ease-out transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          filter: "blur(80px)",
          boxShadow: "0 0 120px rgba(88, 166, 255, 0.4)",
        }}
      />

      {/* Secondary glow for depth */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-32 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse pointer-events-none" />
    </div>
  );
}
