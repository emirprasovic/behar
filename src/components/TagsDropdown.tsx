import { useState } from "react";
import { ChevronDown } from "lucide-react";

const AVAILABLE_TAGS = ["Art", "Bridge", "Nature"];

interface TagsDropdownProps {
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}

const TagsDropdown = ({ selectedTags, setSelectedTags }: TagsDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTag = (tag: string) => {
    setSelectedTags(
      selectedTags.includes(tag)
        ? selectedTags.filter((t) => t !== tag)
        : [...selectedTags, tag],
    );
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "Art":
        return "bg-blue-500 text-white";
      case "Bridge":
        return "bg-yellow-400 text-black";
      case "Nature":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border-primary-300 flex w-full items-center justify-between rounded-lg border bg-white px-4 py-2 text-left"
      >
        <span className="text-gray-700">Search tags</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="bg-primary-50 mt-2 space-y-2 rounded-lg border border-gray-300 p-3">
          {AVAILABLE_TAGS.map((tag) => (
            <label key={tag} className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={selectedTags.includes(tag)}
                onChange={() => toggleTag(tag)}
                className="h-4 w-4"
              />
              <span>{tag}</span>
            </label>
          ))}
        </div>
      )}

      {selectedTags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {selectedTags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-sm font-medium ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagsDropdown;
