import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
import { Link } from "react-router-dom";

function Home(){
    const {authenticated}: any = useContext(MyContext);
    const [posts, setPosts] = useState<string[]>([]);

    useEffect(() =>{
        getPosts()
    })

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