"use client";

import { Card, Skeleton } from "antd";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { api } from "~/trpc/react";

const CourseCard = () => {
  const { data: session } = useSession();
  const { data: coursesApplied, isLoading } =
    api.courses.getCoursesAppliedByUser.useQuery({
      userId: session?.user?.id ?? "",
    });
  return (
    <div>
      <Card
        title="My Courses - Applied"
        bordered={false}
        extra={<Link href="/courses">Explore Courses</Link>}
      >
        {isLoading ? (
          <Skeleton active />
        ) : (
          coursesApplied?.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`}>
              <h2 className="cursor-pointer py-1 font-bold text-green-900">
                {course.title}
              </h2>
            </Link>
          ))
        )}
      </Card>
    </div>
  );
};

export default CourseCard;
