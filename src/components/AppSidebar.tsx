import { useState } from "react";
import { MapPin } from "lucide-react";
import SearchBar from "./SearchBar";
import TagsDropdown from "./TagsDropdown";
import DestinationList from "./DestinationList";

const AppSidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <aside className="h-screen overflow-y-auto border-r border-gray-300 bg-gray-100">
      <div className="p-6">
        <div className="mb-6 flex items-center justify-center gap-3">
          {/* <MapPin className="h-8 w-8" />
          <h1 className="text-2xl font-bold">
            BEH<span className="font-extrabold">AR</span>
          </h1> */}
          <img src="/logo.png" alt="BEHAR LOGO" className="h-24 w-24" />
        </div>

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <TagsDropdown
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />

        <DestinationList
          searchQuery={searchQuery}
          selectedTags={selectedTags}
        />
      </div>
    </aside>
  );
};

export default AppSidebar;
