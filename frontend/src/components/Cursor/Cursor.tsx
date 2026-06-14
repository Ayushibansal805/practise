import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
  }, []);

  return (
    <div
      className="
      fixed
      pointer-events-none
      z-[9999]
      h-5
      w-5
      rounded-full
      bg-red-500
      mix-blend-screen
      "
      style={{
        left: position.x - 10,
        top: position.y - 10,
      }}
    />
  );
};

export default Cursor;