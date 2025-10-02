import { MapPin } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center p-8 text-gray-500">
      <MapPin className="mb-4 h-24 w-24" />
      <h2 className="mb-2 text-4xl font-bold">Tourism</h2>
      <p className="text-center text-lg">
        Start by searching for a location or exploring recommended ones
      </p>
    </div>
  );
};

export default LandingPage;
