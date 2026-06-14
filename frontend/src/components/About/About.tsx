import {
  FaShieldAlt,
  FaFireExtinguisher,
  FaUsers,
  FaClipboardCheck,
} from "react-icons/fa";

const expertise = [
  {
    icon: <FaShieldAlt />,
    title: "Risk Assessment",
  },
  {
    icon: <FaFireExtinguisher />,
    title: "Fire Safety Systems",
  },
  {
    icon: <FaUsers />,
    title: "ERT / FRT Training",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Audit Compliance",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 py-32"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="grid gap-16 md:grid-cols-2">

          {/* Left Side */}
          <div>
            <p className="text-red-500 uppercase tracking-widest">
              About Me
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Dedicated Fire &
              <br />
              Life Safety Professional
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              Experienced in building management,
              fire safety audits, emergency response,
              mock drills, compliance monitoring,
              safety training and risk assessment.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Currently leading safety operations
              across multiple commercial buildings
              while ensuring compliance with
              industry standards and emergency
              preparedness protocols.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">

              {expertise.map((item) => (
                <div
                  key={item.title}
                  className="
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-900
                    p-5
                    transition-all
                    hover:border-red-500
                  "
                >
                  <div className="mb-3 text-3xl text-red-500">
                    {item.icon}
                  </div>

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>
                </div>
              ))}

            </div>

          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center">

            <img
  src="/barun.jpeg"
  alt="Barun"
  className="
    h-[500px]
    w-[400px]
    object-cover
    rounded-3xl
    border
    border-red-500/20
  "
/>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;