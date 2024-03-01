import LandingContainer from "./landingContainer";
import Sprikle from "../elements/sprikle";
import statsData from "@/config/statsData";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";

export default function LandingStatistics() {
  return (
    <div className="relative" id="stats">
      <LandingContainer>
        <div className="md:w-2/3 lg:w-1/2">
          <Sprikle />
          <h2 className="mb-4 mt-8 text-2xl font-bold uppercase text-gray-700 dark:text-white md:text-2xl">
            Statistics
          </h2>
        </div>
        <div className="flex gap-6 justify-center flex-wrap py-8">
          {statsData.map((stats) => (
            <StatsCard stats={stats} />
          ))}
        </div>
      </LandingContainer>
    </div>
  );
}

function StatsCard({ stats }) {
  return (
    <div className="flex p-4 w-full lg:w-[24%] sm:w-[45%] gap-4 bg-gray-50 rounded-2xl dark:bg-gray-800">
      <div className="w-10 text-primary text-2xl h-10 rounded-full bg-orange-100 flex justify-center items-center">
        {stats.icon}
      </div>
      <div>
        <p className="text-gray-500 dark:text-gray-300">{stats.label}</p>
        <div className="flex items-center gap-4">
          <p className="text-black text-3xl font-extrabold dark:text-white">
            {stats.number}
          </p>
          {stats.changeType ? (
            <p className="flex items-center text-green-500 font-semibold">
              <IoIosArrowRoundUp className="text-xl" /> {stats.change}%
            </p>
          ) : (
            <p className="flex items-center text-red-500 font-semibold">
              <IoIosArrowRoundDown className="text-xl" /> {stats.change}%
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
