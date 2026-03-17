"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { getSuggestions, searchGPU, type GPU } from "@/lib/gpu-search";
import { Search } from "lucide-react";

interface GPUSearchProps {
  onResult: (gpu: GPU | null) => void;
}

export default function GPUSearch({ onResult }: GPUSearchProps) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<GPU[]>([]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const handleChange = useCallback(
    (value: string) => {
      setQuery(value);
      setActiveIndex(-1);

      if (value.trim().length >= 2) {
        const results = getSuggestions(value);
        setSuggestions(results);
        setOpen(results.length > 0);
      } else {
        setSuggestions([]);
        setOpen(false);
        if (value.trim().length === 0) onResult(null);
      }
    },
    [onResult]
  );

  const selectGPU = useCallback(
    (gpu: GPU) => {
      setQuery(gpu.name);
      setSuggestions([]);
      setOpen(false);
      onResult(gpu);
    },
    [onResult]
  );

  const handleSearch = useCallback(() => {
    const result = searchGPU(query);
    onResult(result);
    setOpen(false);
  }, [query, onResult]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open) {
      if (e.key === "Enter") handleSearch();
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && suggestions[activeIndex]) {
        selectGPU(suggestions[activeIndex]);
      } else {
        handleSearch();
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.closest(".gpu-search-wrapper")?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const supportBadgeColor: Record<string, string> = {
    full: "text-green-500",
    partial: "text-yellow-500",
    none: "text-red-500",
  };

  const supportLabel: Record<string, string> = {
    full: "✅ Full",
    partial: "⚠️ Partial",
    none: "❌ No Support",
  };

  return (
    <div className="gpu-search-wrapper relative w-full max-w-xl mx-auto">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => suggestions.length > 0 && setOpen(true)}
            placeholder='Enter GPU model (e.g. "RTX 4070" or "3060")'
            className="pl-10 h-12 text-base"
            autoComplete="off"
            aria-autocomplete="list"
            aria-expanded={open}
            aria-haspopup="listbox"
          />
        </div>
        <button
          onClick={handleSearch}
          className="px-6 h-12 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition-colors"
        >
          Check
        </button>
      </div>

      {open && suggestions.length > 0 && (
        <ul
          ref={listRef}
          role="listbox"
          className="absolute z-50 w-full mt-1 bg-background border border-border rounded-md shadow-lg max-h-64 overflow-auto"
        >
          {suggestions.map((gpu, i) => (
            <li
              key={gpu.id}
              role="option"
              aria-selected={i === activeIndex}
              className={`flex items-center justify-between px-4 py-2.5 cursor-pointer text-sm hover:bg-accent ${
                i === activeIndex ? "bg-accent" : ""
              }`}
              onMouseDown={() => selectGPU(gpu)}
            >
              <span className="font-medium">{gpu.name}</span>
              <span className={`text-xs font-semibold ${supportBadgeColor[gpu.dlss5_support]}`}>
                {supportLabel[gpu.dlss5_support]}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
