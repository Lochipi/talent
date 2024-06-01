"use client";

import { api } from "~/trpc/react";

const Course_desc = ({ params }: { params: number }) => {
  const overview_info = api.courses.getOne.useQuery({ id: params });

  return (
    <div>
      <h2 className="text-2xl font-semibold">Description</h2>
      <p className="mt-2 text-gray-600">{overview_info.data?.content}</p>
      <h2 className="mt-8 text-2xl font-semibold">Course Outcomes</h2>
      <p className="mt-2 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias
        optio nisi. Repellendus pariatur accusamus earum rerum consequuntur
        soluta non vitae voluptatibus, necessitatibus quia iure, id ipsam ea
        libero neque.
      </p>
      <h2 className="mt-8 text-2xl font-semibold">Instructor</h2>
      <p className="text-lg">
        <span className="font-semibold text-blue-700 underline pr-2">
          {overview_info.data?.instructor}
        </span>
        will be taking this course.
      </p>
    </div>
  );
};

export default Course_desc;
