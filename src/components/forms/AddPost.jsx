import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import blogData from "../../data/blogData.json";
import { useBlogDispatch } from "../../context/PostsContext";

export default function AddPost() {
  const nextId = 2;

  const [title, setTitle] = useState("");
  const [editorValue, setEditorValue] = useState("");
  const [tags, setTags] = useState([]);
  const [file, setFile] = useState(null);
  const dispatch = useBlogDispatch();

  const handleChange = (newTags) => {
    setTags(newTags);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  const renderData = () => {
    return (
      <div>
        <h1>File: {file?.fileLink}</h1>
        <h1>Title: {title}</h1>
        Description:
        {/* eslint-disable-next-line */}
        <div dangerouslySetInnerHTML={{ __html: editorValue }} />
        <p>Tags: {tags.join(",")} </p>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "added",
      id: nextId + 1,
      file,
      title,
      description: editorValue,
      tags,
    });

    const formData = {
      file,
      title,
      description: editorValue,
      tags,
    };

    // eslint-disable-next-line
    console.log(formData);
    // eslint-disable-next-line
    console.log(blogData);

    const updatedBlogData = [...blogData, formData];
    // eslint-disable-next-line
    console.log(updatedBlogData);

    const formDataJSON = JSON.stringify(formData);
    localStorage.setItem("formData.json", formDataJSON);

    setFile(null);
    setTitle("");
    setEditorValue("");
    setTags([]);
  };

  return (
    <div className="container">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <span>
            <svg
              width="30"
              height="30"
              viewBox="0 0 50 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-10 w-auto"
            >
              <path
                d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                fill="black"
              />
            </svg>
          </span>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Blog Pk CRUD Operation
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="" onSubmit={handleSubmit}>
            {/* Blog Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Post Title
                <input
                  required
                  id="title"
                  name="title"
                  type="text"
                  autoComplete="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </label>
            </div>
            {/* React QUILL */}
            <div>
              <h6 className="block text-sm font-medium leading-6 text-gray-900">
                Post Description
              </h6>
              <ReactQuill
                required
                id="description"
                name="description"
                value={editorValue}
                placeholder="Add Blog Description here..."
                onChange={(value) => setEditorValue(value)}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ color: [] }, { background: [] }],
                    ["image", "code-block"],
                    [{ font: [] }],
                    [{ script: "sub" }, { script: "super" }],
                    ["blockquote", "code-block"],
                    [{ script: "sub" }, { script: "super" }],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [{ size: ["small", false, "large", "huge"] }],
                    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
                    ["link", "image", "video"],
                    ["clean"],
                  ],
                }}
                theme="snow"
              />
            </div>
            {/* Blog Image  */}
            {/* New file upload section */}
            <div className="mt-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Upload file
                <input
                  required
                  id="file_input"
                  name="file_input"
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="file_input_help"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
              <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>

            {/* Blog Multiple tags */}
            <div className="container">
              <TagsInput
                required
                placeholder="Enter Tags"
                value={tags}
                onChange={handleChange}
              />
            </div>
            {/* Blog BTN */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:border-none hover:bg-white hover:text-black focus-visible:border-solid focus-visible:outline-black focus-visible:text-black "
              >
                Add Blog
              </button>
            </div>
          </form>
          {renderData()}
        </div>
      </div>
    </div>
  );
}
