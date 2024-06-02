"use client";

import { Button, Flex, Menu } from "antd";
import { LeftCircleTwoTone, RightCircleTwoTone } from "@ant-design/icons";
import { RiAdminLine } from "react-icons/ri";
import { FaUserCheck } from "react-icons/fa";

import {
  UserOutlined,
  ProfileOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { data: session } = useSession();
  const isAdmin = session?.user?.email === "corneliuslochipi@gmail.com";
  return (
    <Sider
      trigger={null}
      style={{ animationDuration: "2000" }}
      collapsible
      collapsed={collapsed}
    >
      <Flex align="center" justify="start">
        <div className="mx-2 my-6">
          <Link href="/dashboard" className="text-black">
            <h2 className="xs:text-xl text-2xl">Talent space</h2>
          </Link>
        </div>
      </Flex>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="flex flex-col gap-4 font-extrabold"
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: <Link href="/dashboard">Dashboard</Link>,
          },
          {
            key: "2",
            icon: <CarryOutOutlined />,
            label: <Link href="/news">News</Link>,
          },
          {
            key: "3",
            icon: <OrderedListOutlined />,
            label: <Link href="/courses">Courses</Link>,
          },
          {
            key: "4",
            icon: <ProfileOutlined />,
            label: <Link href="/events">Events</Link>,
          },
          {
            key: "5",
            icon: <FaUserCheck />,
            label: <Link href="/profile">Profile</Link>,
          },
          ...(isAdmin
            ? [
                {
                  key: "7",
                  icon: <RiAdminLine />,
                  label: <Link href="/admin">Admin</Link>,
                },
              ]
            : []),
          {
            key: "6",
            icon: <LogoutOutlined />,
            label: <Link href="/api/auth/signout">Logout</Link>,
          },
        ]}
      ></Menu>
      <Button
        type="text"
        icon={collapsed ? <RightCircleTwoTone /> : <LeftCircleTwoTone />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: "50px",
          height: "50px",
          position: "fixed",
          bottom: "0",
          left: "10px",
        }}
      ></Button>
    </Sider>
  );
};

export default Sidebar;
