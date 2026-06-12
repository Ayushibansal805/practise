import { FaShieldAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-8 py-10">

        <div className="flex items-center gap-3">

          <FaShieldAlt className="text-red-500" />

          <h3 className="font-bold">
            BARUN DHYANI
          </h3>

        </div>

        <p className="text-slate-500 mt-4">
          Fire & Life Safety Professional
        </p>

      </div>

    </footer>
  );
};

export default Footer;