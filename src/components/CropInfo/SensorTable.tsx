"use client";
import { useEffect } from "react";
import useLocalStorage from "@/hooks/useLocalStorage"; // Ensure the correct path to the hook
import UpFade from "../Animations/UpFade";
import SensorRow from "./SensorRow";
import sensors from "@/constants/sensors";
import MainCard from "../common/Cards/MainCard";

interface SensorsTableProps {
  selectable?: boolean;
}

const SensorsTable: React.FC<SensorsTableProps> = ({ selectable = false }) => {
  const [selectedSensors, setSelectedSensors] = useLocalStorage<number[]>(
    "selectedSensors",
    [],
  );

  const handleCheckboxChange = (sensorId: number) => {
    setSelectedSensors((prevSelected) =>
      prevSelected.includes(sensorId)
        ? prevSelected.filter((id) => id !== sensorId)
        : [...prevSelected, sensorId],
    );
  };

  const toggleSelectAll = () => {
    if (selectedSensors.length === sensors.length) {
      setSelectedSensors([]);
    } else {
      setSelectedSensors(sensors.map((sensor) => sensor.sensor_id));
    }
  };

  useEffect(() => {
    if (!selectable) {
      setSelectedSensors([]);
    }
  }, [selectable, setSelectedSensors]);

  return (
    <MainCard title="Sensors Info" customClass="shadow-md mt-4">
      <div className="hide-scrollbar overflow-auto rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 dark:bg-gray-dark dark:shadow-card">
        <div className="min-w-[900px]">
          {selectable && (
            <div className="mb-4 flex items-center justify-start md:justify-between">
              <h3 className="text-lg font-semibold">Sensors</h3>
              <button
                onClick={toggleSelectAll}
                className="ml-6 rounded bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 md:ml-0"
              >
                {selectedSensors.length === sensors.length
                  ? "Deselect All"
                  : "Select All"}
              </button>
            </div>
          )}

          <div
            className={`grid ${selectable ? "grid-cols-[40px_1fr_1fr_1fr_1fr_1fr_1fr]" : "grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr]"}`}
          >
            {selectable && (
              <div className="px-3.5 pb-3.5">
                <input
                  type="checkbox"
                  checked={selectedSensors.length === sensors.length}
                  onChange={toggleSelectAll}
                />
              </div>
            )}
            <div className="px-2 pb-3.5">
              <h5 className="text-base font-bold uppercase">Name</h5>
            </div>
            <div className="px-2 pb-3.5">
              <h5 className="text-base font-bold uppercase">Temp</h5>
            </div>
            <div className="px-2 pb-3.5">
              <h5 className="text-base font-bold uppercase">Soil Temp</h5>
            </div>
            <div className="px-2 pb-3.5">
              <h5 className="text-base font-bold uppercase">Moisture %</h5>
            </div>
            <div className="px-2 pb-3.5">
              <h5 className="text-base font-bold uppercase">Ph Level</h5>
            </div>
            <div className="px-2 pb-3.5">
              <h5 className="text-base font-bold uppercase">Status</h5>
            </div>
          </div>
          {sensors.map((sensor, index) => (
            <UpFade key={index} delay={0.02 * index}>
              <SensorRow
                key={sensor.sensor_id}
                sensor={sensor}
                isSelected={selectedSensors.includes(sensor.sensor_id)}
                handleCheckboxChange={handleCheckboxChange}
                selectable={selectable}
              />
            </UpFade>
          ))}
        </div>
      </div>
    </MainCard>
  );
};

export default SensorsTable;
