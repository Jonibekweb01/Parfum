import React from "react";
import MainImg from "../assets/MainImg.png";
export default function MainHome() {
  return (
    <main>
      <section className="chance">
        <div className="container">
          <div className="chance_inner">
            <img
              src={MainImg}
              alt="Img of the section"
              width={380}
              height={570}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
