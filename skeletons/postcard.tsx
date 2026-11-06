interface LimitProp {
  limit: number;
}
const Postcard = ({ limit }: LimitProp) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 sm:mx-auto items-stretch justify-center">
      {[...Array(limit)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col animate-pulse relative bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] w-full mx-auto md:max-w-87.5 rounded-sm"
        >
          {/* image */}
          <div className="relative bg-zinc-400 h-48 w-full rounded-t-sm"></div>
          {/* content */}
          <div className="flex flex-col space-y-2 px-2 my-2">
            <p className="text-sm">
              <span className="w-20 h-4 bg-zinc-400 inline-block"></span>{" "}
              <span className="w-20 h-4 bg-zinc-400 inline-block"></span>
            </p>
            <div className="space-y-2">
              <p className="bg-zinc-400 h-4 w-80"></p>
              <p className="bg-zinc-400 h-4 w-80"></p>
            </div>
            <div className="space-y-2">
              <p className="bg-zinc-400 h-4 w-60"></p>
              <p className="bg-zinc-400 h-4 w-60"></p>
              <p className="bg-zinc-400 h-4 w-40"></p>
            </div>
            <p className="bg-zinc-400 h-4 w-20"></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Postcard;
