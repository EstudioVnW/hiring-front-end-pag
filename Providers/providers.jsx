"use client";
import { AppWrapper } from "@/Context";

export const Providers = ({ children }) => {
  return <AppWrapper>{children}</AppWrapper>;
};
