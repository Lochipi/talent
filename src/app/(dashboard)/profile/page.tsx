"use client";

import React from "react";
import { Card } from "antd";
import { Tabs } from "antd";
import UserProfileForm from "~/app/_components/dashboard_components/profile_components/prifile";
import ResumeUpload from "~/app/_components/dashboard_components/profile_components/resume";

const { TabPane } = Tabs;

const page = () => {
  return (
    <div className="min-h-screen w-full bg-[#F5F6FA] px-4 py-4 md:px-8 md:py-8 xl:px-12 xl:py-12">
      <h1 className="text-2xl font-bold">My profile</h1>
      <div className="md:mt-8">
        <Card bordered={false} className="mt-4 min-h-[70vh]">
          <Tabs>
            <TabPane tab="Overview" key="1">
              <div className="flex gap-4 md:gap-6">
                <div className="flex-1/3">
                  <h1>What Others see</h1>
                  <p>What the industry will see when viewing your profile</p>
                </div>
                <div className="flex-3/4">
                  <h2>profile Overview here</h2>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Profile" key="2">
              <div className="flex gap-4 md:gap-6">
                <UserProfileForm />
              </div>
            </TabPane>
            <TabPane tab="Resume/CV" key="3">
              <div className="flex gap-4 md:gap-6">
                <ResumeUpload />
              </div>
            </TabPane>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default page;
