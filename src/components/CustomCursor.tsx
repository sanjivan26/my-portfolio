import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hoveredEl, setHoveredEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setDotPos({ x: clientX, y: clientY });

      requestAnimationFrame(() => {
        setRingPos((prev) => ({
          x: prev.x + (clientX - prev.x) * 0.15,
          y: prev.y + (clientY - prev.y) * 0.15,
        }));
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable = target.closest("a, button, .hoverable");
      if (hoverable) {
        setHoveredEl(hoverable as HTMLElement);
      } else {
        setHoveredEl(null);
      }
    };

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 300);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  // Get bounding box for hoverable element
  const hoverBox = hoveredEl?.getBoundingClientRect();
  const ringStyle = hoveredEl
    ? {
        width: `${hoverBox?.width}px`,
        height: `${hoverBox?.height}px`,
        transform: `translate(${hoverBox?.left}px, ${hoverBox?.top}px)`,
        borderRadius: "12px",
        borderColor: "#00ffff",
      }
    : {
        width: `48px`,
        height: `48px`,
        transform: `translate(${ringPos.x - 24}px, ${ringPos.y - 24}px)`,
        borderRadius: "9999px",
        borderColor: "#5ce4f6ff",
      };

  return (
    <>
      {/* Outer ring (now can morph into border) */}
      <div
        className="fixed top-0 left-0 z-[9998] pointer-events-none border-2"
        style={{
          ...ringStyle,
          transition:
            "width 200ms ease, height 200ms ease, transform 200ms ease, border-radius 200ms ease",
        }}
      />

      {/* Inner dot (remains at center of pointer) */}
      <div
        className="fixed z-[9999] pointer-events-none rounded-full bg-violet-500"
        style={{
          width: `12px`,
          height: `12px`,
          transform: `translate(${dotPos.x - 6}px, ${dotPos.y - 6}px)`,
        }}
      >
        {clicked && (
          <div className="absolute inset-0 animate-ping rounded-full bg-violet-300 opacity-50" />
        )}
      </div>
    </>
  );
}
