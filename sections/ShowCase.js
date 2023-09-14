import { showcase } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const ShowCase = () => {
  return (
    <>
      <section className="showcase bg-top py">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="محصولات ما" /> <br />
            <br />
            <Title
              title="ایده های تازه به همراه امن ترین نوآوری ها"
              className="title-bg"
            />
          </div>
          <br />
          <br />
          <div className="grid-3 showcase-card">
            {showcase.map((item) => (
              <Card
                data={item}
                key={item.id}
                caption={item.post}
                path="showcases"
              />
            ))}
          </div>
          {/* <div className="py btn">
            <button className="secondary-button">
              <span style={{ fontFamily: "iran" }}>بیشتر...</span>
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ShowCase;
