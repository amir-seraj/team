import React from "react";
import { Title } from "./common/Title";
import { brand } from "@/assets/data/dummydata";

const Brand = () => {
  return (
    <>
      <section className="brand">
        <div className="container">
          <div className="heading-title">
            <Title title="در کمال افتخار در اختیار شما هستیم" />
          </div>
          <div className="brand-content grid-6 py">
            {brand.map((item, i) => (
              <div className="images" key={i}>
                <img
                  src={item.cover}
                  alt={item.id}
                  width="100%"
                  height="100%"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
