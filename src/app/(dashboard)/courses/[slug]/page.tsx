"use client";

import { Card, Button } from "antd";
import Image from "next/image";
import Course_Slug from "~/app/_components/dashboard_components/course_application/Course_Slug";
import { api } from "~/trpc/react";

const page = ({ params }: { params: { slug: string } }) => {
  const numericSlug = parseInt(params.slug, 10);
  const newParams = { slug: numericSlug };
  const course_data = api.courses.getOne.useQuery({ id: newParams.slug });

  return (
    <div className="min-h-screen w-full bg-[#F5F6FA] px-4 py-4 md:px-8 md:py-8 xl:px-12 xl:py-12">
      <h1 className="px-2 py-4 text-xl font-semibold">Career Paths</h1>

      <Card>
        <div className="p-4">
          <div className="flex md:gap-20 md:px-12">
            <div className="flex items-center gap-4 md:gap-8">
              <Image
                src={course_data.data?.image ?? ""}
                alt="news"
                width={150}
                height={150}
                className="rounded-full object-cover"
              />
              <div>
                <h1 className="text-4xl font-bold">
                  {course_data.data?.title}
                </h1>
                <div className="mt-2 flex gap-2">
                  <div>
                    <p className="font-semibold md:text-lg">
                      Training Partner:
                    </p>
                    <p className="font-semibold md:text-lg">Location:</p>
                    <p className="font-semibold md:text-lg">Duration:</p>
                    <p className="font-semibold md:text-lg">Cost:</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 md:text-lg">
                      Andela
                    </p>
                    <p className="font-semibold text-gray-500 md:text-lg">
                      Fully Online Instructor Led Training
                    </p>
                    <p className="font-semibold text-gray-500 md:text-lg">
                      6 months
                    </p>
                    <p className="font-semibold text-gray-500 md:text-lg">
                      Ksh 150,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-auto items-end">
              <Button shape="round" type="primary" size="large">
                Apply Now
              </Button>
            </div>
          </div>
          <hr className="my-8 border-2" />
          <div className="p-4">
            <Course_Slug params={newParams} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default page;
