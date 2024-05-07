"use client";

import React, { useState } from "react";
import {
  AppstoreOutlined,
  HomeOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Drawer } from "antd";
import { MdJoinRight } from "react-icons/md";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "About",
    key: "about",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Partner With Us",
    key: "partner",
    icon: <MdJoinRight />,
  },
  {
    key: "login",
    label: (
      <Link href="/api/auth/signin" rel="noopener noreferrer">
        Log in
      </Link>
    ),
  },
];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState("home");
  const [visible, setVisible] = useState(false);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
 
  return (
    <div className="flex shadow-lg w-full items-center justify-between px-4 sticky top-0 z-50 bg-white">
      <h2 className="text-xl font-semibold">Talent Space</h2>
      <div className="md:block hidden">
        <Menu
          className="justify-end py-4"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
      <div className="md:hidden block">
        <MenuOutlined onClick={showDrawer} />
        <Drawer
          title="Menu"
          placement="right"
          onClick={onClose}
          onClose={onClose}
          visible={visible}
        >
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="vertical"
            items={items}
          />
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;