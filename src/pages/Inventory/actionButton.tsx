import React, { useState, useRef, useEffect } from "react";

type DropdownOption = "Edit" | "Delete" | "View";

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: DropdownOption) => {
    console.log(`Selected: ${option}`);
    setIsOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Open Menu
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-10">
          {["Edit", "Delete", "View"].map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option as DropdownOption)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
