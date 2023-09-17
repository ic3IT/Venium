function Marquee() {
  return (
    <div className="relative bg-gray-500 flex overflow-x-hidden">
      <div className="py-4 animate-marquee whitespace-nowrap bg-purple-800 flex items-center">
        {Array(6).fill(null).map((_, index) => (
          <span key={index} className="flex text-2xl mx-4 text-white font-akira">
            Scrollium
            <img className="ml-2 h-8 w-8" src="/assets/images/logo.png" alt="Logo" />
          </span>
        ))}
      </div>

      <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap bg-purple-800 flex items-center">
        {Array(6).fill(null).map((_, index) => (
          <span key={index} className="flex text-2xl mx-4 text-white font-akira">
            Scrollium
            <img className="ml-2 h-8 w-8" src="/assets/images/logo.png" alt="Logo" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
