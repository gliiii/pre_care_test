import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "毛球泡泡 | 宠物洗护店",
  description: "社区精品宠物洗护店，为猫狗提供低压洗护、皮毛护理、造型修剪和预约服务。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
