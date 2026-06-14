const Loader = () => {
  return (
    <div
      className="
      fixed
      inset-0
      z-[9999]
      flex
      items-center
      justify-center
      bg-slate-950
      "
    >
      <div className="text-center">

        <div
          className="
          h-16
          w-16
          border-4
          border-red-500
          border-t-transparent
          rounded-full
          animate-spin
          mx-auto
          "
        />

        <p className="mt-5">
          Loading Safety Dashboard...
        </p>

      </div>
    </div>
  );
};

export default Loader;