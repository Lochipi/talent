import CareerCard from "./CareerCard";

const Paths = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-gray-400">
      <div className="my-4">
        <h1 className="text-3xl font-semibold text-gray-600">
          Featured Career Paths
        </h1>
        <p className="text-whitesmoke md:pt-4">
          Join a career path and explore a new skill.
        </p>
      </div>
      <div className="max-h-[40vh] w-full">
        <CareerCard />
      </div>
    </div>
  );
};

export default Paths;
