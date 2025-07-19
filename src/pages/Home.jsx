import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import axios from "axios";

function Home() {
  const [blogs, setBlogs] = useState([]);

  async function fetchBlogs() {
    const response = await axios.get(
      "https://687af360abb83744b7ee46fc.mockapi.io/blogs"
    );
    console.log(response.data);
    if (response.status == 200) {
      setBlogs(response.data);
    } else {
      alert("Failed to fetch blogs");
    }
  }

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("Home component rendered");
  return (
    <>
      <Navbar/>
      <h1 className="text-3xl font-bold ml-14 mt-8 mb-1">Latest Blogs</h1>
      <div className="flex flex-wrap">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            author={blog.author}
            title={blog.title}
            description={blog.description}
            image={blog.image}
          />))
        }

      </div>
    </>
  );
}

export default Home;
