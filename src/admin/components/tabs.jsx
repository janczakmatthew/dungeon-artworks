import { useState } from "react";

/**
 * Tabs component
 * @param {Array} tabs - Array of { label: string, content: ReactNode }
 * @param {number} defaultIndex - Index of default active tab
 */
function Tabs({ tabs, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex bg-slate-800 border-b border-white">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 -mb-px font-semibold focus:outline-none transition-colors ${
              activeIndex === index
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-400 hover:text-blue-400"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 bg-slate-800">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
}

export default Tabs;
