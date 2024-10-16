import { GiBellPepper, GiCorn } from "react-icons/gi";
import { LuWheat } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

export const CropsComponent = () => {
    return (
        <div className="col-span-12 rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-7">
            <div className="flex">
                <Link className="w-1/2 bg-white p-5 shadow-md m-2 mb-1 inline-block" href="/corn">
                    <Image src={`/images/crops/wheat.jpg`} alt="Bell Pepper" className="w-full h-40 object-cover mb-4 rounded" width={100} height={100} />
                    <div className="flex items-center">
                        <span className="text-xl font-bold mr-2">Wheat</span>
                        <LuWheat />
                    </div>
                </Link>
                <Link className="w-1/2 bg-white p-5 shadow-md m-2 mb-1 inline-block" href="/corn">
                    <Image src={`/images/crops/corn-field.webp`} alt="Corn" className="w-full h-40 object-cover mb-4 rounded" width={100} height={100} />
                    <div className="flex items-center">
                        <span className="text-xl font-bold mr-2">Corn</span>
                        <GiCorn />
                    </div>
                </Link>
                <Link className="w-1/2 bg-white p-5 shadow-md m-2 mb-1 inline-block" href="/corn">
                    <Image src={`/images/crops/bell-peppers.jpg`} alt="Bell Papers" className="w-full h-40 object-cover mb-4 rounded" width={100} height={100} />
                    <div className="flex items-center">
                        <span className="text-xl font-bold mr-2">Bell pepper</span>
                        <GiBellPepper />
                    </div>
                </Link>
            </div>
        </div>
    );
}
