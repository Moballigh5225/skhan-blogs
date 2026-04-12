"use client"; // This file is for client components

import "./globals.css"; // Importing global styles
import { RecoilRoot } from "recoil";
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
          </head>
          <body>
            <div className="flex flex-col justify-start min-h-screen bg-white">
              <Navbar />
              {children}
              <Footer />
            </div>
          </body>
        </html>
      </DataProvider>
    </RecoilRoot>
  );
};

export default RootLayout;
