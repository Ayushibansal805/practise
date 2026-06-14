const experiences = [
  {
    year: "2025 - Present",
    company: "JLL",
    role: "Senior Executive",
    points: [
      "Managing safety operations across 16 buildings",
      "Fire Warden Training",
      "Safety Audits",
      "Emergency Response Planning",
      "Mock Drill Management",
    ],
  },
  {
    year: "2024 - 2025",
    company: "Phoenix Citadel",
    role: "Senior Executive Fire Life Safety",
    points: [
      "Retail Safety Compliance",
      "ERT Management",
      "Fitout Monitoring",
      "Safety Training",
      "Audit Readiness",
    ],
  },
  {
    year: "2021 - 2024",
    company: "ITC Maurya",
    role: "Fire & Safety Supervisor",
    points: [
      "Fire Systems Monitoring",
      "Fire Drills",
      "EHS Documentation",
      "Emergency Preparedness",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-center text-5xl font-bold mb-20">
          Career Timeline
        </h2>

        <div className="relative">

          <div className="absolute left-6 top-0 h-full w-1 bg-red-600" />

          {experiences.map((item) => (
            <div
              key={item.company}
              className="relative pl-16 md:pl-20 mb-16"
            >
              <div
                className="
                absolute
                left-0
                top-2
                h-12
                w-12
                rounded-full
                bg-red-600
                border-4
                border-slate-900
                "
              />

              <div
                className="
                bg-gradient-to-br
                from-slate-950
                to-slate-900
                border
                border-red-500/20
                rounded-3xl
                p-8
                shadow-lg
                shadow-red-900/20
                "
              >
                <p className="text-red-500">
                  {item.year}
                </p>

                <h3 className="text-2xl md:text-3xl font-bold mt-2">
                  {item.company}
                </h3>

                <p className="text-slate-400 mt-2">
                  {item.role}
                </p>

                <ul className="mt-6 space-y-3">

                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="text-slate-300"
                    >
                      ✓ {point}
                    </li>
                  ))}

                </ul>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;