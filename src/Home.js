import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";
export default function Home() {
    const [posts, setPosts] = useState([]);
    const [name, setName] = useState("");
    const [id, setId] = useState(0);
    const [title, setTitle] = useState("title");
    
    function handleClick() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            var postresponse = response.data;
            console.log(postresponse, 'posts')
            setId(1)
            setName("DHANU")
            setPosts(postresponse)
            });
    }
    useEffect(()=>{axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        var postresponse = response.data;
        console.log(postresponse, 'posts')
        /*setId(1)
        setName("DHANU")
       /* setPosts(postresponse)*/
       setTitle("Dhanu")
        });})
    
     return(
     <>
     <button onClick={handleClick}> Click </button>
     <h2>{id}</h2>
     <h2>{name}</h2>

     {posts.map((item, index) => {
        return (
        <>
        <h2>id:{item.id}</h2>
        <h2>title:{item.title} </h2>
        </>);
        })}
        <h2>{title}</h2>
    </>
    )
}