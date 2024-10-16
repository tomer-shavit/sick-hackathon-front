import { GiBellPepper, GiCorn } from "react-icons/gi";
import { LuWheat } from "react-icons/lu";
import Image from "next/image";
import MainCard from "../common/Cards/MainCard";

export const CropsComponent = () => {
  return (
    <MainCard title="Crops" customClass="mt-4">
      <div className="col-span-12 rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-7">
        <div className="flex">
          <div className="m-2 w-1/2 bg-white p-5 shadow-md">
            <Image
              src={`/images/crops/wheat.jpg`}
              alt="Bell Pepper"
              className="mb-4 h-40 w-full rounded object-cover"
              width={100}
              height={100}
            />
            <div className="flex items-center">
              <span className="mr-2 text-xl font-bold">Wheat</span>
              <LuWheat />
            </div>
          </div>
          <div className="m-2 w-1/2 bg-white p-5 shadow-md">
            <Image
              src={`/images/crops/corn-field.webp`}
              alt="Corn"
              className="mb-4 h-40 w-full rounded object-cover"
              width={100}
              height={100}
            />
            <div className="flex items-center">
              <span className="mr-2 text-xl font-bold">Corn</span>
              <GiCorn />
            </div>
          </div>
          <div className="m-2 w-1/2 bg-white p-5 shadow-md">
            <Image
              src={`/images/crops/bell-peppers.jpg`}
              alt="Bell Papers"
              className="mb-4 h-40 w-full rounded object-cover"
              width={100}
              height={100}
            />
            <div className="flex items-center">
              <span className="mr-2 text-xl font-bold">Bell pepper</span>
              <GiBellPepper />
            </div>
          </div>
        </div>
      </div>
    </MainCard>
  );
};
