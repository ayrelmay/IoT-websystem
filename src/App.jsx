import React, { useState, useEffect } from "react";
import { Trash2, Lock, LockOpen } from "lucide-react";
import ProgressBar from "./components/ProgressBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const [fullness, setFullness] = useState(0);
  const [isLidClosed, setIsLidClosed] = useState(true);

  // Simulate IoT sensor data
  useEffect(() => {
    const interval = setInterval(() => {
      setFullness((prevFullness) => {
        const newFullness = prevFullness + Math.random() * 10 - 5;
        return Math.max(0, Math.min(100, newFullness));
      });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 flex items-center justify-center">
            <Trash2 className="mr-2" size={24} />
            Trashcan Monitor
          </h2>
          <ProgressBar fullness={fullness} />
          <div className="mt-6 text-center text-gray-600">
            <p
              className={`flex items-center justify-center ${
                !isLidClosed ? "text-red-500" : ""
              }`}
            >
              {isLidClosed ? (
                <>
                  <Lock className="mr-2" size={18} />
                  Lid Status: Closed
                </>
              ) : (
                <>
                  <LockOpen className="mr-2" size={18} />
                  Lid Status: Open
                </>
              )}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
