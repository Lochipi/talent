import { Card } from "antd";
import CareerCard from "src/app/_components/CareerCard";

const CareerPathsPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#F5F6FA] px-4 py-4 md:px-8 md:py-8 xl:px-12 xl:py-12">
      <h1 className="px-2 py-4 text-xl font-semibold">Career Paths</h1>

      <Card>
        <h2 className="px-2 py-4 text-center font-light">
          Browse Career Paths
        </h2>
        <div className="mt-8 grid grid-cols-1">
          <CareerCard />
        </div>
      </Card>
    </div>
  );
};

export default CareerPathsPage;
