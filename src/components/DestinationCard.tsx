import { useParams } from "react-router-dom";
import { ThumbsUp, Navigation, CheckCircle } from "lucide-react";
import type { Destination } from "../types";

interface DestinationCardProps {
  destination: Destination;
  onClick: () => void;
}

const DestinationCard = ({ destination, onClick }: DestinationCardProps) => {
  const { id } = useParams();
  const isSelected = id === destination.id.toString();

  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-lg p-3 transition-colors ${
        isSelected ? "bg-gray-300" : "bg-white hover:bg-gray-200"
      }`}
    >
      <div className="h-12 w-12 flex-shrink-0 rounded bg-gray-800"></div>
      <div className="flex-grow text-left">
        <div className="flex items-center gap-2">
          <span className="font-semibold">{destination.name}</span>
          {destination.verified && (
            <CheckCircle className="h-4 w-4 text-blue-500" />
          )}
        </div>
        <div className="mt-1 flex items-center gap-3 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <ThumbsUp className="h-4 w-4" />
            {(destination.likes / 1000).toFixed(1)}k
          </span>
          <span className="flex items-center gap-1">
            <Navigation className="h-4 w-4" />
            {destination.distance}
          </span>
        </div>
      </div>
      <button className="text-gray-500 hover:text-gray-700">
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </button>
    </button>
  );
};

export default DestinationCard;
