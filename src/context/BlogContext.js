import React, { createContext, useReducer } from "react";

const BlogContext = createContext();

const initialState = [
  {
    id: Math.floor(Math.random() * 99999),
    title: "Blog Post #0",
    content: "My big blog post today is all about xyz",
  },
  {
    id: Math.floor(Math.random() * 99999),
    title: "Blog Post #1",
    content: "My big blog post today is all about xyz",
  },
  {
    id: Math.floor(Math.random() * 99999),
    title: "Blog Post #2",
    content: "My big blog post today is all about xyz",
  },
  {
    id: Math.floor(Math.random() * 99999),
    title: "Blog Post #3",
    content: "My big blog post today is all about xyz",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.payload];
    case "DELETE_POST_BY_Id":
      const blogPosts = state.filter((post) => post.id !== action.payload);
      return [...blogPosts];
    case "EDIT_POST":
      const editedPost = state.filter((post) => post.id !== action.payload.id);
      return [...editedPost, action.payload];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export default BlogContext;
