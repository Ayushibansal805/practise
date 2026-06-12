import { FaShieldAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      className="
      fixed
      top-0
      left-0
      z-50
      w-full
      border-b
      border-red-500/10
      bg-slate-950/80
      backdrop-blur-xl
      "
    >
      <div
        className="
        mx-auto
        flex
        max-w-7xl
        items-center
        justify-between
        px-8
        py-5
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <FaShieldAlt className="text-xl text-red-500" />

          <h1
            className="
            text-xl
            font-bold
            tracking-wider
            text-white
            "
          >
            BARUN
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 md:flex">
          <a
            href="#about"
            className="
            text-slate-300
            transition-all
            duration-300
            hover:text-red-500
            "
          >
            About
          </a>

          <a
            href="#experience"
            className="
            text-slate-300
            transition-all
            duration-300
            hover:text-red-500
            "
          >
            Experience
          </a>

          <a
            href="#contact"
            className="
            text-slate-300
            transition-all
            duration-300
            hover:text-red-500
            "
          >
            Contact
          </a>

          <a
            href="#contact"
            className="
            rounded-xl
            bg-red-600
            px-5
            py-2
            font-medium
            text-white
            transition-all
            duration-300
            hover:bg-red-700
            hover:scale-105
            "
          >
            Contact Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;