import React from "react";

const TECHNOLOGY_OPTIONS = ["Inkjet", "Laser", "Laser (B/W)"];
const USAGE_CATEGORY_OPTIONS = ["Home", "Office", "Mobile", "Photo"];
const ALL_IN_ONE_OPTIONS = ["Multifunction", "Single Function"];
const WIRELESS_OPTIONS = ["Yes", "No"];
const MAIN_FUNCTION_OPTIONS = ["Print", "Scan", "Copy", "Fax", "Print Only"];

export default function ProductFilter({ filters, onChange }) {
  const handleCheckbox = (field, value) => {
    const arr = filters[field] || [];
    const newArr = arr.includes(value)
      ? arr.filter((v) => v !== value)
      : [...arr, value];
    onChange && onChange({ ...filters, [field]: newArr });
  };

  const handleSelect = (field, value) => {
    onChange && onChange({ ...filters, [field]: value });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 flex flex-wrap gap-6">
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-2">Brand</label>
        <select
          className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={filters.brand || ""}
          onChange={(e) => handleSelect("brand", e.target.value)}
        >
          <option value="">Select</option>
          <option value="HP">HP</option>
          <option value="Canon">Canon</option>
          <option value="Epson">Epson</option>
          <option value="Brother">Brother</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-2">Technology</label>
        <div className="flex flex-wrap gap-3">
          {TECHNOLOGY_OPTIONS.map((opt) => (
            <label key={opt} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.technology?.includes(opt)}
                onChange={() => handleCheckbox("technology", opt)}
              />
              <span className="text-xs font-bold text-blue-700">{opt}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-2">Usage Category</label>
        <div className="flex flex-wrap gap-3">
          {USAGE_CATEGORY_OPTIONS.map((opt) => (
            <label key={opt} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.usageCategory?.includes(opt)}
                onChange={() => handleCheckbox("usageCategory", opt)}
              />
              <span className="text-xs font-bold text-blue-700">{opt}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-2">All-in-One Type</label>
        <div className="flex flex-wrap gap-3">
          {ALL_IN_ONE_OPTIONS.map((opt) => (
            <label key={opt} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.allInOneType?.includes(opt)}
                onChange={() => handleCheckbox("allInOneType", opt)}
              />
              <span className="text-xs font-bold text-purple-700">{opt}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-2">Wireless</label>
        <select
          className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          value={filters.wireless || ""}
          onChange={(e) => handleSelect("wireless", e.target.value)}
        >
          <option value="">Select</option>
          {WIRELESS_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-2">Main Function</label>
        <div className="flex flex-wrap gap-3">
          {MAIN_FUNCTION_OPTIONS.map((opt) => (
            <label key={opt} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.mainFunction?.includes(opt)}
                onChange={() => handleCheckbox("mainFunction", opt)}
              />
              <span className="text-xs font-bold text-green-700">{opt}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-2">Sort By Price</label>
        <select
          className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={filters.sort || ""}
          onChange={(e) => handleSelect("sort", e.target.value)}
        >
          <option value="">Select</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}
