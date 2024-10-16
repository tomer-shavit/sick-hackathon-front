import React from "react";

interface SensorRowProps {
  sensor: {
    sensor_id: number;
    name: string;
    temp: string;
    soilTemp: string;
    moisture: string;
    phLevel: string;
    status: string;
  };
  isSelected: boolean;
  handleCheckboxChange: (sensorId: number) => void;
  selectable: boolean;
}

const SensorRow: React.FC<SensorRowProps> = ({
  sensor,
  isSelected,
  handleCheckboxChange,
  selectable,
}) => {
  return (
    <div
      className={`grid items-center ${
        selectable
          ? "grid-cols-[40px_1fr_1fr_1fr_1fr_1fr_1fr]"
          : "grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr]"
      } ${isSelected ? "bg-purple-100 dark:bg-purple-900" : ""} border-b border-stroke dark:border-dark-3`}
    >
      {selectable && (
        <div className="flex items-center justify-center p-4">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => handleCheckboxChange(sensor.sensor_id)}
          />
        </div>
      )}

      <div className="px-2 py-4">
        <p className="text-dark dark:text-white">{sensor.name}</p>
      </div>
      <div className="px-2 py-4">
        <p className="text-dark dark:text-white">{sensor.temp}</p>
      </div>
      <div className="px-2 py-4">
        <p className="text-dark dark:text-white">{sensor.soilTemp}</p>
      </div>
      <div className="px-2 py-4">
        <p className="text-dark dark:text-white">{sensor.moisture}</p>
      </div>
      <div className="px-2 py-4">
        <p className="text-dark dark:text-white">{sensor.phLevel}</p>
      </div>
      <div className="px-2 py-4">
        <p className="text-dark dark:text-white">{sensor.status}</p>
      </div>
    </div>
  );
};

export default SensorRow;
