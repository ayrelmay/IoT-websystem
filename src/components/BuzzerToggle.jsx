import React from "react";
import { Bell } from "lucide-react";

export default function BuzzerToggle({ isBuzzerOn, setIsBuzzerOn }) {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
      <span className="text-sm font-medium text-gray-700 flex items-center">
        <Bell className="mr-2" size={18} />
        Buzzer Alert
      </span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isBuzzerOn}
          onChange={() => setIsBuzzerOn(!isBuzzerOn)}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );
}
