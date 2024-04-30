import React, { useContext } from 'react';
import Posts from '../components/Posts';
import { createContext } from 'react';

const BlogContext = createContext('');

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      <Header />
      {children}
    </div>
  );
};

const Header = () => {

  const blogName = useContext(BlogContext);

  return (
    <header className="flex items-center justify-between py-4">
      <h1 className="text-2xl font-bold">{blogName}</h1>
    </header>
  );
};

const BlogInfo = () => {

  const blogName = useContext(BlogContext);

  return (
    <div className="py-4">
      <p>Цей блог створено, щоб...</p>
      <a href="#" className="text-blue-500 underline">Дізнатися більше</a>
    </div>
  );
};

function Blog() {
  const blogName = 'Назва вашого блогу';

  return (
    <BlogContext.Provider value={blogName}>
      <Layout>
        <BlogInfo />
        <Posts />
      </Layout>
    </BlogContext.Provider>
  );
}

export default Blog;




