const projects = [
  {
    title: "DLF Cyber City Operations",
    description:
      "Managing safety operations across 16 commercial buildings.",
  },
  {
    title: "Fire Warden Training Program",
    description:
      "Training client teams on evacuation and emergency response.",
  },
  {
    title: "Audit Management",
    description:
      "Preparing sites for third-party and safety council audits.",
  },
  {
    title: "Mock Drill Execution",
    description:
      "Coordinating emergency drills and response teams.",
  },
];

const Projects = () => {
  return (
    <section className="py-32 bg-slate-950">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-center text-5xl font-bold mb-20">
          Major Safety Initiatives
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
                p-8
                rounded-3xl
                border
                border-slate-800
                bg-slate-900
                hover:border-red-500
                transition
              "
            >
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 text-slate-400">
                {project.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;
