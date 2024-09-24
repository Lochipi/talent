"use client";

import { Card, Image, Skeleton, Avatar } from "antd";
import Button from "./Button";
import Link from "next/link"; // Assuming you're using Next.js
import { api } from "~/trpc/react";

const Paths = () => {
  const coursesData = api.courses.getAll.useQuery();

  return coursesData.isLoading ? (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Skeleton active />
    </div>
  ) : (
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
        <div className="flex flex-wrap justify-center gap-4">
          {coursesData.data?.length === 0 ? (
            <p>No career paths available at the moment.</p>
          ) : (
            coursesData.data?.map((course) => (
              <div className="flex gap-2" key={course.id}>
                <Card className="career-card flex max-w-[300px] flex-col gap-8 rounded-lg border-2 border-gray-300 shadow-sm md:max-w-[400px] lg:max-w-[450px]">
                  <div className="flex justify-center">
                    <Image
                      preview={false}
                      src={course.image ?? "/hero.jpeg"}
                      alt="career image"
                      className="h-48 rounded-full border-2 border-gray-300 object-cover md:h-64"
                    />
                  </div>

                  <div className="pt-2">
                    <div>
                      <h2 className="font-semibold text-gray-700">
                        {course.title}
                      </h2>
                      <p className="text-sm text-gray-400">{course.content}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Avatar
                          src={"https://via.placeholder.com/100"}
                          className="mr-2"
                        />
                        <div>
                          <h2 className="text-xs">Instructor</h2>
                          <p className="text-xs">{course.instructor}</p>
                        </div>
                      </div>
                      <div>
                        <Link
                          className="rounded-xl border-2 border-[#46BD61] px-2 py-1 text-xs text-[#46BD61]"
                          type="link"
                          href="#"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="my-4 flex flex-col items-center md:mt-8">
        <Button text="Explore All Paths" url="/#" color="#46BD61" />
      </div>
    </div>
  );
};

export default Paths;
