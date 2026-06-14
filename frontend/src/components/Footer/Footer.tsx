import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-black py-12">
      <div className="mx-auto max-w-7xl px-8">

        <h2 className="text-2xl font-bold">
          BARUN DHYANI
        </h2>

        <p className="mt-3 text-slate-400">
          Fire & Life Safety Professional
        </p>

        <div className="mt-8 flex flex-wrap gap-6">

          <a
            href="tel:+919311136878"
            className="hover:text-red-500"
          >
            <FaPhone />
          </a>

          <a
            href="mailto:barundhyani2001@gmail.com"
            className="hover:text-red-500"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.linkedin.com/in/barun-dhyani-8041571ba"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <FaLinkedin />
          </a>

        </div>

        <p className="mt-10 text-slate-600">
          © 2026 Barun Dhyani. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;