import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DestinationCard from "./DestinationCard";
import { mockDestinations } from "../data/mockData";

interface DestinationListProps {
  searchQuery: string;
  selectedTags: string[];
}

const ITEMS_PER_PAGE = 8;

const DestinationList = ({
  searchQuery,
  selectedTags,
}: DestinationListProps) => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredDestinations = mockDestinations.filter((dest) =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const visibleDestinations = filteredDestinations.slice(0, visibleCount);
  const hasMore = visibleCount < filteredDestinations.length;

  const handleSelectDestination = (id: number) => {
    navigate(`/destination/${id}`);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + ITEMS_PER_PAGE, filteredDestinations.length),
    );
  };

  return (
    <>
      <div className="space-y-3">
        {visibleDestinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            destination={dest}
            onClick={() => handleSelectDestination(dest.id)}
          />
        ))}
      </div>

      {hasMore && (
        <button
          onClick={handleLoadMore}
          className="bg-primary-100 hover:bg-primary-200 mt-4 w-full rounded-lg py-2 text-black transition-colors"
        >
          Load More ({filteredDestinations.length - visibleCount} remaining)
        </button>
      )}

      {!hasMore && filteredDestinations.length > ITEMS_PER_PAGE && (
        <div className="mt-4 text-center text-sm text-gray-500">
          All {filteredDestinations.length} destinations loaded
        </div>
      )}

      {filteredDestinations.length === 0 && (
        <div className="mt-4 text-center text-gray-500">
          No destinations found
        </div>
      )}
    </>
  );
};

export default DestinationList;
