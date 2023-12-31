import React from "react";
import { Title } from "./common/Title";
import { showcase } from "@/assets/data/dummydata";
import { Card } from "./common/Card";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

const ShowCase = () => {
  return (
    <>
      <section className="showcase">
        <div className="container">
          <div className="heading-title">
            <Title title="محصولات منتخب" />
          </div>
          <div className="hero-content grid-3 py">
            {showcase.map((item, i) => (
              <Card data={item} key={i} path="showcases" />
            ))}
          </div>
          <div className="card links">
            <Link href="/showcase">
              <HiOutlineArrowRight className="link-icon" /> مشاهده تمام موارد
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCase;
