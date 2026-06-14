import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
      fixed
      bottom-6
      right-6
      z-50
      rounded-full
      bg-red-600
      p-4
      hover:bg-red-700
      "
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;