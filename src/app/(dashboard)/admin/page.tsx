"use client";

import React from "react";
import { Card, Col, Row, Table, List, Typography, Skeleton } from "antd";
import { api } from "~/trpc/react";
import { useSession } from "next-auth/react";

const AdminPage = () => {
  const { data: courses, isLoading: coursesLoading } =
    api.courses.getAll.useQuery();
  const { data: courseCount, isLoading: courseCountLoading } =
    api.courses.getCount.useQuery();
  const { data: news, isLoading: newsLoading } = api.news.getAll.useQuery();
  const { data: courseMembers, isLoading: courseMembersLoading } =
    api.courses.getCoursesWithMembers.useQuery();

  const { data: session } = useSession();

  const courseColumns = [
    {
      title: "Course Title",
      dataIndex: "title",
      key: "title",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-8">
      <div className="flex h-full items-center justify-center">
        <div className="w-full max-w-6xl">
          <h1 className="py-4 text-3xl font-bold text-blue-600">Admin page</h1>

          <Row gutter={16} className="mb-8">
            <Col span={8}>
              <Card title="Courses">
                {courseCountLoading ? (
                  <Skeleton active />
                ) : (
                  <p>
                    Total Courses:
                    <span className="font-bold text-gray-900">
                      {courseCount}
                    </span>
                  </p>
                )}
                {coursesLoading ? (
                  <Skeleton active />
                ) : (
                  <List
                    dataSource={courses}
                    renderItem={(course) => (
                      <List.Item key={course.id}>{course.title}</List.Item>
                    )}
                  />
                )}
              </Card>
            </Col>
            <Col span={16}>
              <Card title="Welcome Admin">
                <p>
                  Hey there,
                  {session?.user?.email === "corneliuslochipi@gmail.com" && (
                    <span className="text-blue-500 px-2 font-bold">{session?.user.name}</span>
                  )}
                </p>
                <p>
                  Welcome to the admin panel. Here you can manage courses,
                  members, and news.
                </p>
              </Card>
            </Col>
          </Row>
          <section className="mb-8">
            <Typography.Title level={2}>Courses</Typography.Title>
            {coursesLoading ? (
              <Skeleton active />
            ) : (
              <Table
                dataSource={courses}
                columns={courseColumns}
                rowKey="id"
                pagination={false}
              />
            )}
          </section>
          <section className="mb-8">
            <Typography.Title level={2}>Course Members</Typography.Title>
            {courseMembersLoading ? (
              <Skeleton active />
            ) : (
              courseMembers?.map((course) => (
                <Card key={course.id} title={course.title} className="mb-6">
                  <List
                    dataSource={course.enrolled}
                    renderItem={(member) => (
                      <List.Item key={member.id}>{member.name}</List.Item>
                    )}
                    locale={{ emptyText: "No members enrolled" }}
                  />
                </Card>
              ))
            )}
          </section>
          <section className="mb-8">
            <Typography.Title level={2}>News</Typography.Title>
            {newsLoading ? (
              <Skeleton active />
            ) : (
              <List
                dataSource={news}
                renderItem={(newsItem) => (
                  <List.Item key={newsItem.id}>{newsItem.title}</List.Item>
                )}
              />
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
