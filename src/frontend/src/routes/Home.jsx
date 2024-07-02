import axios from 'axios';
import {useState, useEffect} from 'react';

import { Link } from 'react-router-dom'

import "./routes/Home.css";

const Home = () => {
  
  const [posts, setPosts] = useState([]);
  
  const getPosts = async () => {

   try {

  const response = await axios("https://jsonplaceholder.typicode.com/posts");

  const data = response.data;

  console.log(data);
  } catch (error) {
    console.error(error);
   }

  };
  
  useEffect(() => {

    getPosts();

  }, [])
  
  
  return (
    <div>home</div>
  )
}

export default Home