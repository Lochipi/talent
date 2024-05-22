"use client";

import { Card, Image } from "antd";
import { api } from "~/trpc/react";
import { Skeleton } from "antd";

const NewsPage = () => {
  const newsData = api.news.getAll.useQuery();

  if (newsData.isLoading) {
    return (
      <div className="min-h-screen w-full bg-[#F5F6FA] px-4 py-4 md:px-8 md:py-8 xl:px-12 xl:py-12">
        <h1 className="text-2xl font-bold">News</h1>
        <div className="md:mt-8">
          <Card bordered={false} className="mt-4">
            <div className="flex flex-col items-center justify-center">
              <Skeleton active />
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (!newsData.data?.length) {
    return (
      <div className="min-h-screen w-full bg-[#F5F6FA] px-4 py-4 md:px-8 md:py-8 xl:px-12 xl:py-12">
        <h1 className="text-2xl font-bold">News</h1>
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
                <h2 className="font-semibold">No Upcoming News</h2>
                <p>All your upcoming news will appear here.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen w-full bg-[#F5F6FA] px-4 py-4 md:px-8 md:py-8 xl:px-12 xl:py-12">
        <h1 className="text-2xl font-bold">News</h1>
        <div className="grid grid-cols-1 gap-4 md:mt-8">
          {newsData.data?.map((newsItem) => (
            <Card key={newsItem.id} bordered={false} hoverable={true}>
              <div className="p-4">
                <h2 className="mb-2 text-lg font-semibold">{newsItem.title}</h2>
                <p>{newsItem.content}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }
};

export default NewsPage;
