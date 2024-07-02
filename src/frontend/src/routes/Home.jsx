import blogFetch from "../axios/config";

import {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';

import "./routes/Home.css";

const Home = () => {
  
  const [posts, setPosts] = useState([]);
  
  const getPosts = async () => {

   try {

  const response = await blogFetch.get('/posts');

  const data = response.data;

  setPosts(data);
  } catch (error) {
    console.error(error);
   }
  };
  
  useEffect(() => {

    getPosts();

  }, []);

  return (
    <div className="home">
      <h1>Úlltimos Posts</h1>
      {posts.length === 0 ? (<p>Carregando...</p>) : (
        posts.map((post) => ( 
          <div className="post" key={post.id}> <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link className="btn" to={`/posts/${post.id}`}>Ler mais
          </Link>
    </div>
        ))
      )}
      </div>
  );
};

export default Home