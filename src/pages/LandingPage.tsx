import { MapPin } from "lucide-react";

const LandingPage = () => {
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
        <source src="/videos/landing/landing-video-1.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay*/}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <img src="/logo.png" className="mb-4 h-48 w-48" />
        <h2 className="mb-2 text-4xl font-bold text-white">
          {/* BEH<span className="font-extrabold">AR</span> */}
        </h2>
        <p className="text-center text-lg text-white">
          Start by searching for a location or exploring recommended ones
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
