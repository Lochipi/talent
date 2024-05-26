import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Course_desc from "./Course_desc";


const Course_Slug: React.FC<{ params: { slug: number } }> = ({ params }) => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Overview",
      children: <Course_desc params={params.slug} />,
    },
    {
      key: "2",
      label: "Curriculum",
      children: (<h2 className="text-lg font-bold text-green-800">Coming sooon, just wait for it!</h2>),
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} />;
};

export default Course_Slug;
