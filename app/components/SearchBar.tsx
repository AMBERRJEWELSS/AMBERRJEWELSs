"use client";
import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  return (
    <div className="hidden md:flex justify-center py-2 bg-white/80 shadow-sm w-full">
      <div className="relative w-full max-w-md">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-accent">
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-10 pr-8 py-2 rounded-full border border-accent focus:outline-none focus:ring-2 focus:ring-accent bg-white text-secondary transition-all"
        />
        {search && (
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-accent"
            onClick={() => setSearch("")}
            aria-label="Clear search"
            type="button"
          >
            <FaTimes />
          </button>
        )}
      </div>
    </div>
  );
} 