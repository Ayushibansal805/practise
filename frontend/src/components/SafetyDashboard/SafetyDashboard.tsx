import {
  FaBuilding,
  FaUsers,
  FaClipboardCheck,
  FaFireExtinguisher,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaBuilding />,
    value: "16+",
    label: "Buildings Managed",
  },
  {
    icon: <FaUsers />,
    value: "100+",
    label: "Employees Trained",
  },
  {
    icon: <FaClipboardCheck />,
    value: "50+",
    label: "Safety Audits",
  },
  {
    icon: <FaFireExtinguisher />,
    value: "4+",
    label: "Years Experience",
  },
];

const SafetyDashboard = () => {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-8">

        <div className="mb-16 text-center">

          <p className="text-red-500 uppercase tracking-widest">
            Safety Operations
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Safety Command Center
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((item) => (
            <div
              key={item.label}
              className="
                bg-slate-900
                border border-slate-800
                rounded-3xl
                p-8
                hover:border-red-500
                transition-all
              "
            >
              <div className="text-4xl text-red-500 mb-5">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold">
                {item.value}
              </h3>

              <p className="text-slate-400 mt-2">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default SafetyDashboard;