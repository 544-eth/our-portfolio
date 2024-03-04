import { Abel } from "next/font/google";
import "./globals.css";
import TransitionProvider from "./component/transtion";

const inter = Abel({ subsets: ["latin"], weight: ["400"]  });

export const metadata = {
  title: "Our Portfolio",
  description: "We Do Everything Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
