import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Home(){
    const {authenticated}: any = useContext(MyContext);
    const [posts, setPosts] = useState<string[]>([]);

    useEffect(() =>{
        getPosts()
    },[]);

    const navigate = useNavigate();

    const goToPostDetail = (id : string) =>{
        navigate(`post/${id}`)
    }

  
    const getPosts = async () =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
    }

    if(!posts) return <div>Loading</div>
    return(
        <>
     
      {posts.map((post: any) => (
        <div key={post.id}>
          <button
            onClick={() => {
              goToPostDetail(post.id)
            }}
          >
            {post.title}
          </button>
        </div>
      ))}
    </>
  );
}

export default Home;