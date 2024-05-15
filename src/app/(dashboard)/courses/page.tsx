import { Card } from "antd";
import CareerCard from "src/app/_components/CareerCard";
import { newsData } from "~/app/_dummy_data/courses";

const CareerPathsPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#F5F6FA] px-4 py-4 md:px-8 md:py-8 xl:px-12 xl:py-12">
      <h1 className="text-xl font-semibold py-4 px-2">Career Paths</h1>

      <Card>
        <h2 className="px-2 py-4 font-light text-center">Browse Career Paths</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((careerPath) => (
            <CareerCard key={careerPath.id} careerPath={careerPath} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CareerPathsPage;
