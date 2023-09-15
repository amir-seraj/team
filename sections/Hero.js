import { home } from "@/assets/data/dummydata";
import landing from "@/assets/images/land.png";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="landing">
            <div>
              <TitleLogo title="داس لند" caption="" className="logobg" />
              <h1 className="hero-title">
                ما تجربه ای دلنشین برای مشتریان شما می سازیم.
              </h1>
            </div>
            <Image src={landing} className="landingVector" />
          </div>
          <div className="sub-heading">
            <TitleSm title="وب سایت" /> <span>.</span>
            <TitleSm title="برندینگ" /> <span>.</span>
            <TitleSm title="دیجیتال مارکتینگ" />
          </div>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="پرشی بزرگ به سمت موفقیت" />
            <p>
              ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ورم
              ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ورم ایپسوم متن ساختگی
              با تولید سادگی نامفهوم از صنعت چاپ، و
            </p>
          </div>
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className="text-center">
        <Title title="آخرین اخبار و مقالات" />
      </div>
      <BlogCard />
    </>
  );
};

export default Hero;
