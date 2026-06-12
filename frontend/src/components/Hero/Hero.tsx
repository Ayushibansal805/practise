import { motion } from "framer-motion";
import { heroData } from "../../data/portfolioData";
import { FaShieldAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section
  className="
  relative
  flex
  min-h-screen
  items-center
  overflow-hidden
  command-grid
"
>

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-red-600/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-orange-500/20 blur-3xl" />

      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-8 md:grid-cols-2">

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <p className="mb-4 text-red-500">
            FIRE & LIFE SAFETY
          </p>

          <h1 className="text-7xl font-black leading-none">

            {heroData.name}

          </h1>

          <h2 className="mt-4 text-2xl text-orange-400">

            {heroData.role}

          </h2>

          <p className="mt-8 max-w-lg text-slate-300 leading-8">

            {heroData.tagline}

          </p>

          <button className="mt-8 rounded-xl bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700">

            Explore Experience

          </button>

        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="glass rounded-3xl p-10">

            <FaShieldAlt
              className="mb-6 text-5xl text-red-500"
            />

            <h3 className="text-slate-400">

              Current Position

            </h3>

            <h2 className="mt-2 text-4xl font-bold">

              Senior Executive

            </h2>

            <p className="mt-2 text-xl">
              JLL
            </p>

            <div className="mt-8 rounded-xl bg-red-600 p-5">

              Managing Safety Operations
              Across 16 Buildings

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;