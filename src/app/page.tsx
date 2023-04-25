"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import EditPage from "@/pages/editPage";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <EditPage />;
}
