"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { TRPCReactProvider } from "~/trpc/react";

interface MainProviderProps {
  children: React.ReactNode;
}

const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <>
      <TRPCReactProvider>
        <SessionProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </SessionProvider>
      </TRPCReactProvider>
    </>
  );
};

export default MainProvider;
