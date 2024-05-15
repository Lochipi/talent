import React from "react";
import { Card, Image, Avatar } from "antd";
import Link from "next/link";

interface NewsItemProps {
  title: string;
  description: string;
  image: string;
  id: number;
  instructor: string;
  instructorImage?: string;
  imageUrl?: string;
}

const CareerCard: React.FC<{ careerPath: NewsItemProps }> = ({
  careerPath,
}) => {
  return (
    <Card className="career-card flex max-w-[250px] flex-col gap-8 rounded-lg border-2 border-gray-300 shadow-sm md:max-w-[400px] lg:max-w-[450px]">
      <div className="flex justify-center">
        <Image
          preview={false}
          src={careerPath?.imageUrl ?? "/hero.jpeg"}
          alt="career image"
          className="h-58 rounded-full object-cover md:h-74 border-2 border-gray-300"
        />
      </div>

      <div className="pt-2">
        <div>
          <h2 className="font-semibold text-gray-700">{careerPath?.title}</h2>
          <p className="text-sm text-gray-400">{careerPath?.description} </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Avatar
              src={
                careerPath?.instructorImage ??
                "https://via.placeholder.com/100"
              }
              className="mr-2"
            />
            <div>
              <h2 className="text-xs">Instructor</h2>
              <p className="text-xs">{careerPath?.instructor}</p>
            </div>
          </div>
          <div>
            <Link
              className="rounded-xl border-2 border-[#46BD61] px-2 py-1 text-xs text-[#46BD61]"
              type="link"
              href="/foo"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CareerCard;
