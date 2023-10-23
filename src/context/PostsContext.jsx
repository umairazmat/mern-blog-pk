import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const BlogContext = createContext(null);

const BlogDispatchContext = createContext(null);

function blogReducer(blogs, action) {
  switch (action.type) {
    case "added": {
      return [
        ...blogs,
        {
          id: action.id,
          file: action.file,
          title: action.title,
          description: action.description,
          tags: action.tags,
        },
      ];
    }
    case "changed": {
      // Find the index of the blog to be updated
      const index = blogs.findIndex((blog) => blog.id === action.id);

      // If the blog with the provided ID exists, update it
      if (index !== -1) {
        const updatedBlog = {
          ...blogs[index],
          file: action.file || blogs[index].file,
          title: action.title || blogs[index].title,
          description: action.description || blogs[index].description,
          tags: action.tags || blogs[index].tags,
        };

        // Create a new array with the updated blog
        const updatedBlogs = [...blogs];
        updatedBlogs[index] = updatedBlog;

        return updatedBlogs;
      }
      // If the blog doesn't exist, return the original array
      return blogs;
    }
    case "deleted": {
      // Filter out the blog with the specified ID
      return blogs.filter((blog) => blog.id !== action.id);
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`);
    }
  }
}

const initialBlogs = [
  {
    id: 1,
    file: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    title: "Coming From Context",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    tags: ["#Iphone", "#Macbook", "#Watch"],
  },
  {
    id: 2,
    file: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    title: "Coming From Context",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    tags: ["#Iphone", "#Macbook", "#Watch"],
  },
  {
    id: 3,
    file: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    title: "Coming From Context",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    tags: ["#Iphone", "#Macbook", "#Watch"],
  },
];

export default function BlogProvider({ children }) {
  const [blogs, dispatch] = useReducer(blogReducer, initialBlogs);

  return (
    <BlogContext.Provider value={blogs}>
      <BlogDispatchContext.Provider value={dispatch}>
        {children}
      </BlogDispatchContext.Provider>
    </BlogContext.Provider>
  );
}

export function useBlogs() {
  return useContext(BlogContext);
}

export function useBlogDispatch() {
  return useContext(BlogDispatchContext);
}

BlogProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
