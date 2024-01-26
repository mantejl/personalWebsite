import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import PageFooter from "./components/Footer";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mantej Lamba",
  description: "Mantej Lamba Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="border-t-4 bg-white border-gray-300"></div>
        {children}
        <PageFooter />
      </body>
    </html>
  );
}
