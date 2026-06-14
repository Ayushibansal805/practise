import { motion } from "framer-motion";
import {
  FaBuilding,
  FaClipboardCheck,
} from "react-icons/fa";
import { heroData } from "../../data/portfolioData";

const Hero = () => {
  return (
    <section
      className="
      relative
      flex
      min-h-screen md:min-h-[90vh]
      items-center
      overflow-hidden
      command-grid
      "
    >
      <div className="absolute inset-0">

        <div
          className="
          absolute
          left-0
          top-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-red-600/20
          blur-3xl
          "
        />

        <div
          className="
          absolute
          bottom-0
          right-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-orange-500/20
          blur-3xl
          "
        />

      </div>

      <div
        className="
        relative
        mx-auto
        grid
        max-w-7xl px-6 md:px-8
        gap-16
        px-8
        md:grid-cols-[1.3fr_0.7fr]
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="
            mb-6
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-red-500/30
            px-5
            py-2
            "
          >
            <div
              className="
              h-3
              w-3
              rounded-full
              bg-green-500
              animate-pulse
              "
            />

            Safety Operations Active
          </div>

          <p className="mb-4 text-red-500 tracking-widest">
            FIRE & LIFE SAFETY PROFESSIONAL
          </p>

          <h1
            className="
            text-5xl md:text-7xl
            font-black
            leading-none
            "
          >
            {heroData.name}
          </h1>

          <h2 className="mt-4 text-2xl text-orange-400">
            {heroData.role}
          </h2>

          <p
            className="
            mt-8
            max-w-lg
            leading-8
            text-slate-300
            "
          >
            {heroData.tagline}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <div
              className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-slate-700
              px-4
              py-3
              "
            >
              <FaBuilding className="text-red-500" />
              16 Buildings Managed in DLF CyberCity
            </div>

            <div
              className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-slate-700
              px-4
              py-3
              "
            >
              <FaClipboardCheck className="text-red-500" />
              Audit Ready
            </div>

          </div>

           <a
    href="#experience"
    className="
    rounded-xl
    border
    border-slate-700
    px-8
    py-4
    font-semibold
    transition-all
    hover:border-red-500
    "
  >
    View Experience
  </a>
  <a
  href="/Barun-Dhyani-Resume.pdf"
  target="_blank"
  className="
  rounded-xl
  border
  border-slate-700
  px-8
  py-4
  font-semibold
  hover:border-red-500
  "
>
  Download Resume
</a>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="flex items-center justify-center"
>
  <div className="w-full max-w-md space-y-5">

    <div
      className="
      rounded-3xl
      border
      border-red-500/20
      bg-slate-900/80
      p-8
      "
    >
      <p className="text-slate-400 text-sm uppercase">
        Current Position
      </p>

      <h3 className="mt-2 text-3xl font-bold">
        Senior Executive
      </h3>

      <p className="mt-2 text-red-500">
        JLL
      </p>

      <div className="mt-6 h-px bg-slate-700" />

      <p className="mt-4 text-slate-300">
        Leading Fire & Life Safety operations
        across commercial properties,
        emergency response planning,
        compliance management and training.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-4">

      <div className="rounded-2xl bg-slate-900 p-6 text-center border border-slate-800">
        <h3 className="text-3xl font-bold text-red-500">
          16
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Buildings
        </p>
      </div>

      <div className="rounded-2xl bg-slate-900 p-6 text-center border border-slate-800">
        <h3 className="text-3xl font-bold text-red-500">
          50+
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Audits
        </p>
      </div>

      <div className="rounded-2xl bg-slate-900 p-6 text-center border border-slate-800">
        <h3 className="text-3xl font-bold text-red-500">
          100+
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Personnel Trained
        </p>
      </div>

      <div className="rounded-2xl bg-slate-900 p-6 text-center border border-slate-800">
        <h3 className="text-3xl font-bold text-red-500">
          4+
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Years Experience
        </p>
      </div>

    </div>

  </div>
</motion.div>
      </div>
    </section>
  );
};

export default Hero;