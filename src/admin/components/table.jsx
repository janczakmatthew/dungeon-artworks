import React from "react";
import DelayedLoading from "../utils/DelaySkeleton";

import StatusChip from "../components/chip"

function DynamicTable({ columns, data, onAction, loading = false }) {
  const showLoading = DelayedLoading(loading, 1000);

  if (showLoading) {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white border-b">
              {columns.map((col, idx) => (
                <th key={idx} className="px-4 py-2 text-left">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, rowIndex) => (
              <tr
                key={rowIndex}
                className={`animate-pulse ${
                  rowIndex % 2 === 0 ? "bg-gray-900" : "bg-gray-950"
                }`}
              >
                {columns.map((_, colIndex) => (
                  <td key={colIndex} className="px-4 py-2">
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-slate-800 text-white border-b">
            {columns.map((col, idx) => (
              <th key={idx} className="px-4 py-2 text-left">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={row.id || rowIndex}
              className={`hover:bg-slate-900 ${
                rowIndex % 2 === 0 ? "bg-gray-900" : "bg-gray-950"
              }`}
            >
              {columns.map((col, colIndex) => {
                const value = col.accessor ? col.accessor(row) : row[col.key];
                return (
                  <td key={colIndex} className="px-4 py-2">
                    {col.key === "status" ? (
                      <StatusChip value={value} />
                    ) : col.render ? (
                      col.render(value, row)
                    ) : (
                      value
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DynamicTable;
