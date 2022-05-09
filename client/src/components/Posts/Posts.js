import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";
const Posts = () => {
  const posts = useSelector((state) => {
    return state.posts;
  });
  const classes = useStyles();
  return (
    <div>
      <>
        <Post></Post>
        <h1>Posts</h1>
      </>
    </div>
  );
};

export default Posts;
