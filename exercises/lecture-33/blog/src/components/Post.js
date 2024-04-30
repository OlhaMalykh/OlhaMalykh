

// lecture-36

/*import React, { useState, useEffect } from 'react';

const Post = () => {
  const [post, setPost] = useState({});
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://my-json-server.typicode.com/olhamalykh/db/posts/1');
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const likeThis = () => {
    setLikes(likes + 1);
  };

  return (
    <article className='post'>
      <div className='cover-container'>
        <img src={post.cover} alt={post.title} />
      </div>
      <div className='post-footer'>
        <h3>{post.title} {post.id}</h3>
        <p>{post.content}</p>
        <button id='like' onClick={likeThis}>
          Like this post <strong>{likes}</strong>
        </button>
      </div>
    </article>
  );
};

export default Post;
*/







// lecture-37

import React, { useState, useEffect, useContext, createContext } from 'react';

const PostContext = createContext();

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
};

const PostTitle = () => {
  const post = useContext(PostContext);
  return <h2>{post.title}</h2>;
};

const PostMain = () => {
  const post = useContext(PostContext);
  const [likes, setLikes] = useState(0);

  const likeThis = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post-main">
      <div className="cover-container">
        <img src={post.cover} alt={post.title} />
      </div>
      <div className="post-footer">
        <h3>
          {post.title} {post.id}
        </h3>
        <p>{post.content}</p>
        <button id="like" onClick={likeThis}>
          Like this post <strong>{likes}</strong>
        </button>
      </div>
    </div>
  );
};

const Post = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://my-json-server.typicode.com/olhamalykh/db/posts/1');
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <PostContext.Provider value={post}>
      <Layout>
        <PostTitle />
        <PostMain />
      </Layout>
    </PostContext.Provider>
  );
};

export default Post;





