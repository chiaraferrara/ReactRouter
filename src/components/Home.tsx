import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
import { NavLink, useNavigate } from "react-router-dom";
import {  PostsWrap, Row, } from "../Style/Style";
import readmore from "../assets/readmore.svg"
import { read } from "fs";

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
        <PostsWrap>
          <h3>Lista dei Post:</h3>
      {posts.map((post: any) => (
      
        <ul key={post.id}>
          <Row>
          <li><NavLink to={`post/${post.id}`}>          
           {post.title} 
          </NavLink></li></Row>
        </ul>
      ))}
      </PostsWrap>
    </>
  );
}

export default Home;