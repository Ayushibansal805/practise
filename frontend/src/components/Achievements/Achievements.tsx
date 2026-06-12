import {
  FaBuilding,
  FaUserShield,
  FaClipboardCheck,
  FaFireExtinguisher,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaBuilding />,
    title: "16 Buildings Managed",
    description:
      "Managing safety operations across multiple commercial buildings at DLF Cyber City.",
  },
  {
    icon: <FaUserShield />,
    title: "Fire Warden Training",
    description:
      "Conducted extensive training sessions for emergency preparedness and evacuation procedures.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Audit Management",
    description:
      "Prepared facilities for internal and third-party safety audits.",
  },
  {
    icon: <FaFireExtinguisher />,
    title: "Mock Drill Execution",
    description:
      "Planned and coordinated emergency response drills and exercises.",
  },
];

const Achievements = () => {
  return (
    <section className="py-32 bg-slate-900">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <p className="uppercase tracking-widest text-red-500">
            Key Contributions
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Major Safety Achievements
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {achievements.map((item) => (
            <div
              key={item.title}
              className="
              rounded-3xl
              bg-slate-950
              border
              border-slate-800
              p-8
              hover:border-red-500
              transition-all
              "
            >
              <div className="text-4xl text-red-500 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-slate-400 mt-4">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Achievements;