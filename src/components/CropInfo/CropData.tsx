import React from "react";
import SubCard from "../common/Cards/SubCard";
import { IoResize } from "react-icons/io5";
import {
  FaSeedling,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTint,
  FaWater,
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
  return (
    <SubCard customClass="mr-4 p-6 h-full">
      <h2 className="text-xl font-semibold text-dark dark:text-white">
        Crop Information
      </h2>
      <div className="mt-4 space-y-2 text-lg text-dark dark:text-white">
        <p>
          <strong className="flex items-center">
            <IoResize className="mr-1" />
            Field Size:
          </strong>
          {fieldSize}
        </p>
        <p>
          <strong className="flex items-center">
            <FaSeedling className="mr-1" />
            Crop Type:
          </strong>
          {cropType}
        </p>
        <p>
          <strong className="flex items-center">
            <FaMapMarkerAlt className="mr-1" />
            Field Location:
          </strong>
          {fieldLocation}
        </p>
        <p>
          <strong className="flex items-center">
            <FaCalendarAlt className="mr-1" />
            Planting Date:
          </strong>
          {plantingDate}
        </p>
        <p>
          <strong className="flex items-center">
            <GiWaterDrop className="mr-1" />
            Avg Soil PH:
          </strong>
          {soilPH}
        </p>
        <p>
          <strong className="flex items-center">
            <FaTint className="mr-1" />
            Rainfall:
          </strong>
          {rainfall}
        </p>
      </div>
    </SubCard>
  );
};

export default CropData;
