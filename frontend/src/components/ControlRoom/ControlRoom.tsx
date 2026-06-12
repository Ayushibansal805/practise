const ControlRoom = () => {
  return (
    <section className="py-32 bg-slate-950">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-center text-5xl font-bold mb-16">
          Safety Operations Dashboard
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="glass p-8 rounded-3xl">
            <h3>Building Status</h3>

            <p className="text-green-500 text-4xl mt-5">
              Operational
            </p>
          </div>

          <div className="glass p-8 rounded-3xl">
            <h3>Audit Readiness</h3>

            <p className="text-yellow-500 text-4xl mt-5">
              98%
            </p>
          </div>

          <div className="glass p-8 rounded-3xl">
            <h3>Emergency Teams</h3>

            <p className="text-red-500 text-4xl mt-5">
              Active
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ControlRoom;