import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-8">

        <div className="text-center mb-16">

          <p className="text-red-500 uppercase tracking-widest">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Get In Touch
          </h2>

          <p className="mt-4 text-slate-400">
            Available for Fire & Life Safety
            consultations, audits, training programs
            and emergency preparedness planning.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* CALL */}

          <a
            href="tel:+919311136878"
            className="
            rounded-3xl
            border
            border-slate-800
            bg-slate-900
            p-8
            flex
            items-center
            gap-5
            hover:border-red-500
            hover:-translate-y-1
            transition-all
            "
          >
            <FaPhone
              className="
              text-4xl
              text-red-500
              "
            />

            <div>
              <h3 className="text-xl font-bold">
                Call Now
              </h3>

              <p className="text-slate-400">
                Direct phone call
              </p>
            </div>
          </a>

          {/* WHATSAPP */}

          <a
            href="https://wa.me/919311136878"
            target="_blank"
            rel="noopener noreferrer"
            className="
            rounded-3xl
            border
            border-slate-800
            bg-slate-900
            p-8
            flex
            items-center
            gap-5
            hover:border-green-500
            hover:-translate-y-1
            transition-all
            "
          >
            <FaWhatsapp
              className="
              text-4xl
              text-green-500
              "
            />

            <div>
              <h3 className="text-xl font-bold">
                WhatsApp
              </h3>

              <p className="text-slate-400">
                Send a quick message
              </p>
            </div>
          </a>

          {/* EMAIL */}

          <a
            href="mailto:barundhyani2001@gmail.com"
            className="
            rounded-3xl
            border
            border-slate-800
            bg-slate-900
            p-8
            flex
            items-center
            gap-5
            hover:border-red-500
            hover:-translate-y-1
            transition-all
            "
          >
            <FaEnvelope
              className="
              text-4xl
              text-red-500
              "
            />

            <div>
              <h3 className="text-xl font-bold">
                Email
              </h3>

              <p className="text-slate-400">
                Send an email inquiry
              </p>
            </div>
          </a>

          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/barun-dhyani-8041571ba"
            target="_blank"
            rel="noopener noreferrer"
            className="
            rounded-3xl
            border
            border-slate-800
            bg-slate-900
            p-8
            flex
            items-center
            gap-5
            hover:border-blue-500
            hover:-translate-y-1
            transition-all
            "
          >
            <FaLinkedin
              className="
              text-4xl
              text-blue-500
              "
            />

            <div>
              <h3 className="text-xl font-bold">
                LinkedIn
              </h3>

              <p className="text-slate-400">
                Connect professionally
              </p>
            </div>
          </a>

        </div>

        <div
          className="
          mt-10
          rounded-3xl
          border
          border-slate-800
          bg-slate-900
          p-8
          flex
          items-center
          gap-5
          "
        >
          <FaMapMarkerAlt
            className="
            text-4xl
            text-red-500
            "
          />

          <div>
            <h3 className="text-xl font-bold">
              Location
            </h3>

            <p className="text-slate-400">
              Delhi NCR, India
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;