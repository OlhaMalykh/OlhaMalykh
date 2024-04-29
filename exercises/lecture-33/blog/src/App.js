import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Gallery from './components/Gallery';


// lecture-35
import Blog from './components/Blog';
import Vitelogo from './Vitelogo.svg';

//lecture-36
import Post from './components/Post';


function App() {
  // створити новий JSX-елемент з назвою jsxElement з таким вмістом:
  const jsxElement = <h1>I am a JSX element</h1>;

  // створити новий JSX-елемент header з таким вмістом:
  const header = (
    <div>
      <h1>Welcome to React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
    </div>
  );
    
   // створити новий JSX-фрагмент з таким вмістом
  const jsxFragment = (
  <>
    <h1>Welcome to React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </>
  );

  // створити новий JSX-елемент footer з таким вмістом:
  const footer = <p>Copyright &copy; 2024</p>;


  //lecture-35
  let post = {
    id: 1,
    title: "Programming Algorithm",
    content: `The word Algorithm means “a process or set of rules to be followed in calculations or other problem-solving operations”. Therefore Algorithm refers to a set of rules/instructions that step-by-step define how a work is to be executed upon in order to get the expected results.`,
    cover: "/Vitelogo.svg",
    likes: 5
  };



  return (
    <div className="App">
      <header className="App-header">
        
        <div className="App">
        <Navbar />
        </div>

        <img src={logo} className="App-logo" alt="logo" />
      
        {/* відобразити елемент jsxElement */}
        {jsxElement}

        {/* відобразити елемент header */}
        {header}

        {/* відобразити JSX-фрагмент */}
        {jsxFragment}

        {/* {    відобразити елемент footer} */}
        {footer}   

      </header>

      <div className="App">
      <Gallery />
      </div>

      <div className="App">
      <Footer />
      </div>


      {/* lecture-35 */}
       <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={Vitelogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> 
      <Blog post={post} key={post.id} />
    </>


    {/* lecture-36 */}
    <article className='post'>
      <Post />
    </article>

    
    </div>
  );
}





export default App;



