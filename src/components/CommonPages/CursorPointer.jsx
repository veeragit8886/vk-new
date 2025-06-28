import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      if (dotRef.current && ringRef.current) {
        dotRef.current.style.transform = `translate(${clientX - 4}px, ${clientY - 4}px)`;
        ringRef.current.style.transform = `translate(${clientX - 16}px, ${clientY - 16}px)`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Blue Dot (8x8px) */}
      <div
        ref={dotRef}
        className="fixed top-0 hidden md:block left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-linear"
      ></div>

      {/* Ring (32x32px) */}
      <div
        ref={ringRef}
        className="fixed top-0 hidden md:block left-0 w-8 h-8 border border-blue-400 rounded-full pointer-events-none z-[9998] transition-transform duration-150 ease-out"
      ></div>
    </>
  );
};

export default CustomCursor;
