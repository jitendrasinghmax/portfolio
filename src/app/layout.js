import Contact from "../../component/contact";
import Navbar from "../../component/navbar";
import { primery } from "../../lib/fonts";
import "./globals.css";




export const metadata = {
  title: "Freelancer Portfolio",
  description: "A portfolio website showcasing projects and skills of a freelancer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${primery.className} antialiased  md:w-[700px] lg:w-[800px] xl:w-[900px] mx-auto flex flex-col relative `}
      >
        <Navbar />
        <div id="pattern-container" className="w-full px-3 sm:px-5 md:px-8 flex-1 flex flex-col">
          <div className="w-full h-full pt-13 sm:pt-15 bg-container flex-1">
            {children}
          </div>
          <div className="h-fit">
            <section id="about"><Contact /></section>
          </div>
        </div>
      </body>
    </html>
  );
}
