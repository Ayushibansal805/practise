import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const update = () => {
      const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const current =
        (window.scrollY / total) * 100;

      setScroll(current);
    };

    window.addEventListener(
      "scroll",
      update
    );

    return () =>
      window.removeEventListener(
        "scroll",
        update
      );
  }, []);

  return (
    <div
      className="
      fixed
      top-0
      left-0
      z-[999]
      h-1
      bg-red-500
      "
      style={{
        width: `${scroll}%`,
      }}
    />
  );
};

export default ProgressBar;