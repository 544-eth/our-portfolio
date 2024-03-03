import { Abel } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

const inter = Abel({ subsets: ["latin"], weight: ["400"]  });

export const metadata = {
  title: "Our Portfolio",
  description: "We Do Everything Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" w-screen h-screen  ">
          <div className=" h-16">
            <Navbar/>
          </div>

          <div className=" h-[calc(100vh-4rem)]" >
            {children}
          </div>

          <div className="">
              <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
