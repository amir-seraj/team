import React from "react";
import { Title, TitleLogo } from "./common/Title";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div>
            <Title title="پروژه بعدیتون با ما" /> <br />
            <TitleLogo title="فرصتی برای گسترش بیزینس شما" />
          </div>
          <div>
            <button className="button-primary">درخواست تماس</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
