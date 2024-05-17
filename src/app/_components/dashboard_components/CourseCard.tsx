import { Card, Image } from "antd";
import Link from "next/link";

const CourseCard = () => {
  return (
    <div>
      <Card
        title="My Courses"
        bordered={false}
        extra={<Link href="#">Explore Courses</Link>}
      >
        <div className="flex items-center justify-between">
          <div className="md:px-4">
            <h2 className="text-sm font-extrabold">Software Engineering</h2>
            <p className="text-xs">Moringa & Computer Pride</p>
          </div>
          <div>
            <Image
              preview={false}
              src="https://via.placeholder.com/70"
              alt="news"
              className="max-h-[80px] w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CourseCard;
