import { newsData } from "../_dummy_data/courses";
import Button from "./Button";
import CareerCard from "./CareerCard";

const Paths = () => {
  return (
    <div className="min-h-[80vh] w-full bg-gray-100 md:py-8">
      <div className="my-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-[#495057]">
          Featured Career Paths
        </h1>
        <p className="text-whitesmoke md:pt-4">
          Join a career path and explore a new skill.
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center md:gap-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-8 lg:grid-cols-3">
          {newsData.map((careerPath) => (
            <CareerCard key={careerPath.id} careerPath={careerPath} />
          ))}
        </div>
      </div>
      <div className="my-4 flex flex-col items-center md:mt-8">
        <Button text="Explore All Paths" url="/#" color="#46BD61" />
      </div>
    </div>
  );
};

export default Paths;
