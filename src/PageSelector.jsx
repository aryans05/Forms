import React, { useState } from "react";

export default function PagesSelector({
  pages = ["Page 1", "Page 2", "Page 3", "Page 4"],
  initialSelected = [],
  onDone = (selected) => console.log(selected),
}) {
  const [selected, setSelected] = useState(() =>
    Array.isArray(initialSelected)
      ? initialSelected.filter((s) => pages.includes(s))
      : []
  );

  const allSelected = pages.length > 0 && selected.length === pages.length;

  function togglePage(name) {
    setSelected((s) =>
      s.includes(name) ? s.filter((x) => x !== name) : [...s, name]
    );
  }

  function toggleAll() {
    setSelected(allSelected ? [] : [...pages]);
  }

 
  const fontStyle = {
    fontFamily:
      '"Montserrat", system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    fontWeight: 500,
    color: "#1A1A1A",
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 p-6"
      style={fontStyle}
    >
     
      <div className="relative w-[360px] bg-white rounded-md shadow-[0_14px_30px_rgba(15,23,42,0.08)] p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[14px] leading-[1.4] tracking-[0.01em]">
            All pages
          </span>

          <button
            type="button"
            onClick={toggleAll}
            aria-pressed={allSelected}
            aria-label={allSelected ? "Unselect all pages" : "Select all pages"}
            className={`w-6 h-6 rounded-md flex items-center justify-center transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 ${
              allSelected
                ? "bg-[#1a73e8] shadow-sm"
                : "bg-white border border-gray-300"
            }`}
            title={allSelected ? "Unselect all" : "Select all"}
          >
            {allSelected && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="white"
                className="w-3 h-3"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            )}
          </button>
        </div>

        <hr className="border-gray-200 mb-4" />

        {/* Rows */}
        <div className="space-y-4">
          {pages.map((p, idx) => {
            const checked = selected.includes(p);
            return (
              <button
                key={`${p}-${idx}`}
                type="button"
                onClick={() => togglePage(p)}
                aria-pressed={checked}
                aria-label={`${p}${checked ? " selected" : ""}`}
                className="w-full flex items-center justify-between px-0 py-1 cursor-pointer select-none focus:outline-none focus:bg-gray-50"
              >
                <span className="text-[14px] leading-[1.4] tracking-[0.01em] text-left">
                  {p}
                </span>

                <span
                  className={`inline-flex items-center justify-center w-6 h-6 rounded-md transition-all duration-150 ${
                    checked
                      ? "bg-[#1a73e8] shadow-sm"
                      : "bg-white border border-gray-300"
                  }`}
                  aria-hidden
                >
                  {checked && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      aria-hidden
                    >
                      <path
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        <hr className="border-gray-200 my-5" />

   
        <button
          type="button"
          onClick={() => onDone(selected)}
          className="w-full py-3 rounded-md text-sm text-[#1A1A1A] bg-[#FFD43B] hover:bg-[#ffca2c] shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-200"
          style={{ fontWeight: 500 }}
        >
          Done
        </button>
      </div>
    </div>
  );
}
