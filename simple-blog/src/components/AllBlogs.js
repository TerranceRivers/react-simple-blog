import React from "react";
import BlogCard from "./BlogCard";

function AllBlogs({ blogs, deleteBlog }) {
  return (
    <div className="allBlogs">
      <h2>All Blogs</h2>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} deleteBlog={deleteBlog} />
      ))}
    </div>
  );
}

export default AllBlogs;
