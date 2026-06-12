const flow = [
  "Emergency Detected",
  "Alarm Activation",
  "ERT Response",
  "Evacuation",
  "Situation Control",
  "Incident Closure",
];

const EmergencyFlow = () => {
  return (
    <section className="bg-slate-950 py-32">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-16 text-center">

          <p className="uppercase tracking-widest text-red-500">
            Emergency Response
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Incident Management Flow
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-6">

          {flow.map((step) => (
            <div
              key={step}
              className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-900
                p-6
                text-center
                transition-all
                hover:border-red-500
                hover:-translate-y-2
              "
            >
              <p className="font-medium">
                {step}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default EmergencyFlow;