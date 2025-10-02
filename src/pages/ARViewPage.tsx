import { Target, TowerControl, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ARViewPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full flex-col items-center justify-center p-8 text-gray-500">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/ar/ar-tabija.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay*/}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      {/* <div className="relative z-10 flex flex-col items-center">
        <img src="/logo.png" className="mb-4 h-48 w-48" />
        <h2 className="mb-2 text-4xl font-bold text-white">
         
        </h2>
        <p className="text-center text-lg text-white">
          Start by searching for a location or exploring recommended ones
        </p>
      </div> */}
      {/* <img
        src="/pinpoint.png"
        alt=""
        className="absolute top-16 left-1/2 h-48 w-48 -translate-x-1/2"
      /> */}

      <div className="absolute top-10 left-10 max-w-xs rounded-lg bg-white/95 p-4 text-center shadow-xl">
        <div className="flex items-center justify-center gap-2">
          {/* <Target /> */}
          <h3 className="mb-1 text-lg font-bold">Bijela Tabija</h3>
        </div>
        <p className="text-sm text-gray-700">Middle Age Fortress</p>
        <p className="text-xs text-gray-700">
          As far as the precise year of construction goes, differing opinions
          have been put forward. One of them proposes that Bijela Tabija was
          built around 1550...
        </p>
        <a
          href="https://en.wikipedia.org/wiki/Bijela_Tabija"
          target="_blank"
          className="text-primary-500 text-xs"
        >
          See more...
        </a>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 right-4 z-10 cursor-pointer rounded-full bg-white/90 p-2 shadow-lg transition-colors hover:bg-white"
      >
        <X className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ARViewPage;
