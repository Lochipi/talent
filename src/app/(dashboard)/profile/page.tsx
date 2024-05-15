"use client";

import React from "react";
import { Card } from "antd";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Tab 1",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Tab 2",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Tab 3",
    children: "Content of Tab Pane 3",
  },
];

const page = () => {
  return (
    <div className="min-h-screen w-full bg-[#F5F6FA] px-4 py-4 md:px-8 md:py-8 xl:px-12 xl:py-12">
      <h1 className="text-2xl font-bold">My profile</h1>
      <div className="md:mt-8">
        <Card bordered={false} className="mt-4">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </Card>
      </div>
    </div>
  );
};

export default page;
