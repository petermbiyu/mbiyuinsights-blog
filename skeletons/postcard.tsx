const Postcard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-6xl mx-5 sm:mx-auto items-stretch justify-center">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col animate-pulse relative bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] w-full mx-auto md:max-w-87.5 rounded-sm"
        >
          <div className="relative bg-zinc-400 h-48 w-full"></div>
          <div className="flex flex-col space-y-2 px-2">
            <p className="text-sm">
              <span className="w-20 h-4 bg-zinc-400 inline-block"></span>
              {" | "}
              <span className="w-20 h-4 bg-zinc-400 inline-block"></span>
            </p>
            <h2 className="bg-zinc-400 h-4 w-40"></h2>
            <p className="bg-zinc-400 h-4 w-40"></p>
          </div>
          <p className="bg-zinc-400 h-4 w-20"></p>
        </div>
      ))}
    </div>
  );
};

export default Postcard;
