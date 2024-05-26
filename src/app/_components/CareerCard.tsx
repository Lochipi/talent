"use client";

import React from "react";
import { Card, Image, Avatar, Skeleton } from "antd";
import Link from "next/link";
import { api } from "~/trpc/react";

const CareerCard = () => {
  const coursesData = api.courses.getAll.useQuery();
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {coursesData.isLoading ? (
        <Skeleton active />
      ) : coursesData.data?.length === 0 ? (
        <div className="min-h-screen w-full bg-[#F5F6FA] px-4 py-4 md:px-8 md:py-8 xl:px-12 xl:py-12">
          <h1 className="text-2xl font-bold">Courses</h1>
          <div className="md:mt-8">
            <Card bordered={false} className="mt-4">
              <div className="flex flex-col items-center justify-center">
                <div>
                  <Image
                    preview={false}
                    src="https://via.placeholder.com/150"
                    alt="news"
                    className="max-h-[80px] w-full rounded-3xl object-cover"
                  />
                </div>
                <div className="text-center">
                  <h2 className="font-semibold">No Upcoming Courses</h2>
                  <p>All your upcoming news will appear here.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ) : (
        coursesData.data?.map((course) => (
          <Card
            key={course.id}
            className="career-card flex max-w-[200px] flex-col gap-8 rounded-lg border-2 border-gray-300 shadow-sm md:max-w-[400px] lg:max-w-[450px]"
          >
            <div className="flex justify-center">
              <Image
                preview={false}
                src={course.image ?? "/hero.jpeg"}
                alt="career image"
                className="h-48 md:h-64 rounded-full border-2 border-gray-300 object-cover"
              />
            </div>

            <div className="pt-2">
              <div>
                <h2 className="font-semibold text-gray-700">{course.title}</h2>
                <p className="text-sm text-gray-400">{course.content} </p>
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
                    href={`/courses/${course.id}`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        ))
      )}
    </div>
  );
};

export default CareerCard;
