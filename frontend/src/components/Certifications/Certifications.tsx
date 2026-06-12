const certifications = [
  "B.Sc in Fire & Safety",
  "Diploma in Fire & Safety Engineering",
  "Red Cross First Aid Certification",
  "HIRA Certification",
];

const Certifications = () => {
  return (
    <section className="bg-slate-900 py-32">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-16 text-center">

          <p className="uppercase tracking-widest text-red-500">
            Credentials
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Certifications & Education
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {certifications.map((cert) => (
            <div
              key={cert}
              className="
                rounded-3xl
                border
                border-slate-800
                bg-slate-950
                p-8
                hover:border-red-500
                transition-all
              "
            >
              <h3 className="text-xl font-semibold">
                {cert}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Certifications;