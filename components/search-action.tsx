"use client";

import { useState } from "react";

interface SearchActionbarProps {
  placeholder?: string;
  onSearch: (searchTerm: string) => void;
  value?: string;
  className?: string;
  onClear?: () => void;
}
export default function SearchActionbar(props: SearchActionbarProps) {
  const { placeholder, onSearch, value, className } = props;
  const [searchTerm, setSearchTerm] = useState(value || "");
  const [isSearching, setIsSearching] = useState(false);

  const clearSearch = () => {
    setSearchTerm("");
    props.onClear && props.onClear();
  };

  const onSearchClick = () => {
    setIsSearching(true);
    onSearch(searchTerm);
    setIsSearching(false);
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearchClick();
    }
  };

  return (
    <section className="flex flex-col">
      <div className="container mx-auto flex width-full text-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="fixed text-gray-500 h-16 w-16 p-4"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line
            onClick={clearSearch}
            x1="21"
            y1="21"
            x2="16.65"
            y2="16.65"
          ></line>
        </svg>

        <input
          className="w-full h-16 px-3 rounded mb-2 pl-16 focus:outline-none focus:shadow-outline text-black shadow-lg"
          type="search"
          value={searchTerm}
          onKeyDown={onSearchKeyDown}
          onChange={onSearchChange}
          placeholder={placeholder || "Search"}
        />
      </div>
      <div className="filters flex">
        <button
          className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-white rounded px-6 h-12"
          type="button"
          onClick={onSearchClick}
          disabled={isSearching && searchTerm === ""}
        >
          {isSearching ? "Searching..." : "Search"}
        </button>
      </div>
    </section>
  );
}
