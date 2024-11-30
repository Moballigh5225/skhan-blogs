"use client"; // This file is for client components

import "./globals.css"; // Importing global styles
import { RecoilRoot } from "recoil";
import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";
import Layout from "./components/Layout"; // Your separate layout component
import DataProvider from "./components/DataProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Initialize the font
// const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <RecoilRoot>
      <DataProvider>
        <html lang="en">
          <head>
            <title>Shabbir Blog</title>
            <meta name="description" content="Shabbir Blog" />
            {/* Add the font import here */}
            <link
              href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&display=swap"
              rel="stylesheet"
            />
          </head>
          <body>
            <NextUIProvider>
              <div className="flex flex-col justify-start min-h-screen bg-white">
                <Navbar />
                {children}
                <Footer />
              </div>
            </NextUIProvider>
          </body>
        </html>
      </DataProvider>
    </RecoilRoot>
  );
};

export default RootLayout;
