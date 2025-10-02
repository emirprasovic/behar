import { Search } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border-primary-300 w-full rounded-lg border bg-white px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <Search className="absolute top-2.5 right-3 h-5 w-5 text-gray-500" />
    </div>
  );
};

export default SearchBar;
