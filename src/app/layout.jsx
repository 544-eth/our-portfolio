import { Nanum_Gothic } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";

const inter = Nanum_Gothic({ subsets: ["latin"], weight: ["400"]  });

export const metadata = {
  title: "Our Portfolio",
  description: "We Do Everything Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" w-screen h-screen bg-black text-[gold]">
          <div className=" h-16">
            <Navbar/>
          </div>

          <div className=" h-[calc(100vh - 4rem)]" >
            {children}
          </div>
          
        </div>
      </body>
    </html>
  );
}
