import React from "react";
import SubCard from "../common/Cards/SubCard";
import { IoResize } from "react-icons/io5";
import {
  FaSeedling,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTint,
} from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";

interface CropDataProps {
  fieldSize: string;
  cropType: string;
  fieldLocation: string;
  plantingDate: string;
  soilPH: string;
  rainfall: string;
}

const CropData: React.FC<CropDataProps> = ({
  fieldSize,
  cropType,
  fieldLocation,
  plantingDate,
  soilPH,
  rainfall,
}) => {
  const cropInfo = [
    {
      label: "Field Size",
      value: fieldSize,
      icon: <IoResize className="mr-1" />,
    },
    {
      label: "Crop Type",
      value: cropType,
      icon: <FaSeedling className="mr-1" />,
    },
    {
      label: "Field Location",
      value: fieldLocation,
      icon: <FaMapMarkerAlt className="mr-1" />,
    },
    {
      label: "Planting Date",
      value: plantingDate,
      icon: <FaCalendarAlt className="mr-1" />,
    },
    {
      label: "Avg Soil PH",
      value: soilPH,
      icon: <GiWaterDrop className="mr-1" />,
    },
    {
      label: "Rainfall",
      value: rainfall,
      icon: <FaTint className="mr-1" />,
    },
  ];

  return (
    <SubCard customClass="mr-4 p-6 h-full">
      <h2 className="text-xl font-semibold text-dark dark:text-white">
        Crop Information
      </h2>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {cropInfo.map((info, index) => (
          <SubCard key={index}>
            <strong className="mb-2 flex items-center text-black">
              {/* {info.icon} */}
              {info.label}
            </strong>
            <div className="flex justify-start text-center">
              <p className="text-lg text-dark dark:text-white">{info.value}</p>
            </div>
          </SubCard>
        ))}
      </div>
    </SubCard>
  );
};

export default CropData;
