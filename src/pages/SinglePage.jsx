import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SinglePage() {
  const data = useParams();

  const [blog, setBlog] = useState({});

  const navigate = useNavigate();

  async function fetchBlog() {
    const response = await axios.get(
      "https://687af360abb83744b7ee46fc.mockapi.io/blogs/" + data.id
    );
    console.log(response.data);
    if (response.status == 200) {
      setBlog(response.data);
    } else {
      alert("Failed to fetch blog");
    }
  }

  useEffect(() => {
    fetchBlog();
  }, []);

  async function deleteBlog() {
    const response = await axios.delete(
      "https://687af360abb83744b7ee46fc.mockapi.io/blogs/" + data.id
    );
    if (response.status == 200) {
      alert("Blog deleted successfully");
      navigate("/");
    } else {
      alert("Failed to fetch blog");
    }
  }

  return (
    <div>
      <Navbar hideAddButton={true} />
      <div>
        <div className="flex flex-row items-center justify-center mt-2">
          <div className="w-120 h-120 bg-white p-6 rounded-l-lg shadow-md">
            <h2 className="tracking-widest text-l title-font font-medium text-gray-400 mb-1">
              {blog.author}
            </h2>
            <h1 className="title-font text-3xl font-medium text-gray-900 mb-3">
              {blog.title}
            </h1>
            <p className="leading-relaxed mb-3">{blog.description}</p>
          </div>
          <img
            src={blog.image}
            alt="Blog Post"
            className="w-120 h-120 object-cover flex justify-self-end rounded-r-lg shadow-md"
          />
        </div>
      </div>

      <div className="flex flex-row justify-center mt-2" >
        <Link to={"/edit/" + data.id} className="flex justify-center">
        <button className="flex justify-center ">
          <span className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Edit Blog
          </span>
        </button>
        </Link>

        <button className="flex justify-center ml-2" onClick={deleteBlog}>
          <span className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
            Delete Blog
          </span>
        </button>
      </div>
    </div>
  );
}

export default SinglePage;
