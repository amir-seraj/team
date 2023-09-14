import React from "react";
import { Card } from "./common/Card";
import { blogdata } from "@/assets/data/dummydata";

const BlogCard = () => {
  return (
    <>
      <div className="container blog-card grid-2 py">
        {blogdata.map((item, i) => (
          <Card data={item} key={i} path="blogs" />
        ))}
      </div>
    </>
  );
};

export default BlogCard;
