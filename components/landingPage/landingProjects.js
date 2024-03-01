import Sprikle from "../elements/sprikle";
import { IoIosLink } from "react-icons/io";
import LandingContainer from "./landingContainer";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import projectData from "@/config/projectData";

const LandingProjects = () => {
  return (
    <div className="relative" id="projects">
      <LandingContainer>
        <div className="md:w-2/3 lg:w-1/2">
          <Sprikle />
          <h2 className="mb-4 text-2xl font-bold uppercase text-gray-700 dark:text-white md:text-2xl">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {projectData.map((company, index) => (
            <ProjectCard key={index} {...company} />
          ))}
        </div>
      </LandingContainer>
    </div>
  );
};

export default LandingProjects;

const ProjectCard = ({ logoSrc, name, description, website, label, chart }) => {
  const [graph, setGraphs] = useState(false);
  useEffect(() => {
    setGraphs(true);
  });

  return (
    <div className="flex flex-col gap-4 border rounded-xl min-h-min p-4 text-gray-700">
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
        <img src={`/images/logos/${logoSrc}`} alt="" className="h-8 w-8" />
      </div>
      <div className="flex flex-col gap-2">
        <a
          href={website}
          target="_blank"
          className="text-lg font-bold text-zinc-800 dark:text-white flex hover:text-primary items-center gap-2"
        >
          {name} <IoIosLink />
        </a>
        <p className="text-gray-700 dark:text-white">{description}</p>
      </div>

      {graph && chart && (
        <div className="text-xs">
          <AreaChart width={300} height={150} data={chart}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey={Object.keys(chart[0])[1]}
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </div>
      )}
    </div>
  );
};
