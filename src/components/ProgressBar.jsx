import React from "react";
import { Trash, PackageOpen } from "lucide-react";

export default function ProgressBar({ fullness }) {
  const getColor = () => {
    if (fullness < 50) return "bg-green-500";
    if (fullness < 80) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 flex items-center">
          <PackageOpen className="mr-1" size={18} />
          Empty
        </span>
        <span className="text-sm font-medium text-gray-700 flex items-center">
          Full
          <Trash className="ml-1" size={18} />
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className={`h-full rounded-full ${getColor()} transition-all duration-500 ease-in-out`}
          style={{ width: `${fullness}%` }}
        ></div>
      </div>
      <div className="mt-2 text-center">
        <span className="text-lg font-bold text-gray-700">
          {Math.round(fullness)}% Full
        </span>
      </div>
    </div>
  );
}
