import React from "react";
import { Card, Image } from "antd";

const page = () => {
  return (
    <div className="min-h-screen w-full bg-[#F5F6FA] px-4 py-4 md:px-8 md:py-8 xl:px-12 xl:py-12">
      <h1 className="text-2xl font-bold">Events</h1>
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
              <h2 className="font-semibold">No Upcoming Event</h2>
              <p>All your upcoming events will appear here.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default page;
