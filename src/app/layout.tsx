import type { Metadata } from "next";
import Header from "./Header/page"
import Footer from "./Footer/page";
import Home from "./page";
import "./Page.css"

export const metadata: Metadata = {
  title: "LinkCar",
};

export default function RootLayout({
  children,}: Readonly<{
    children: React.ReactNode;
  }>) {
    return(
      <html lang="en">
        <body>
          <Header/>
          {children}
          <Footer/>
        </body>
      </html>
    )
  }