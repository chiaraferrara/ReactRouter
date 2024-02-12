import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function Post() {
  const [postDetail, setPostDetail] = useState<any>([]);
  const { id } = useParams();
  const getPostDetail = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    setPostDetail(data);
  };

  useEffect(() => {
    getPostDetail();
  }, []);

  return (
    <>
      <NavLink to="/">Go back</NavLink>
      <div>Dettaglio Bookmark {id}</div>
      <div key={postDetail.id}>
        <h1>{postDetail.title}</h1>
        <p>{postDetail.body}</p>
      </div>
    </>
  );
}

export default Post;
