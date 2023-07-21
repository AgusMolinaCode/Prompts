"use client";

import Feed from "@components/Feed";
import Footer from "@components/Footer";
import { ThemeContext } from "@context/ThemeContext";
import { useContext } from "react";
import Image from "next/image";

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-primary text-center">
          Descubre & Comparte <br className="max-md:hidden" />
          <span className="blue_gradient text-center">
            Poderosos AI Prompts
          </span>
        </h1>

        <p className="desc font-outfit text-center text-primary">
          Descubre & Comparte los mejores prompts para crear tus proyectos de
          una manera eficiente
        </p>

        <Feed />
        
      </section>

      <Footer />
    </div>
  );
};

export default Home;
