import React, { useState } from "react";
import CreateForm from "./components/CreateForm";
import AllBlogs from "./components/AllBlogs";
import BlogCard from "./components/BlogCard";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="App">
      <CreateForm addBlog={addBlog} />
      <AllBlogs blogs={blogs} deleteBlog={deleteBlog} />
    </div>
  );
}

export default App;
