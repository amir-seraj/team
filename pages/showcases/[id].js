import { showcase } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = showcase.find((post) => post.id === parseInt(id));

  return (
    <>
      <Head>{/* <h3>{post.title}</h3> */}</Head>
      <section className="post-details bg-top py">
        <div className="container">
          <div className="heading-title">
            {/* <Title title={post.title} className="title-bg" /> */}
            <div className="img py">
              <img
                src={post?.cover}
                width="100%"
                height="100%"
                className="round"
              />
            </div>
            <div className="desc">
              <TitleSm title={post?.heading} />
              <p className="desc-p">{post?.desc}</p>
            </div>
          </div>
          <Banner />
        </div>
      </section>
    </>
  );
};

export default SinglePost;
