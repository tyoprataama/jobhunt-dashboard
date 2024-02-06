import Sidebar from "@/components/layout/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import Mainbar from "@/components/layout/Mainbar";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <main>
          <div className="bg-background">
            <div className="flex flex-row">
              <div className="hidden lg:block w-[20%] border-r">
                <Sidebar />
              </div>
              <div className="col-span-3 overflow-auto lg:col-span-5 w-[80%]">
                <Mainbar />
                {children}
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
