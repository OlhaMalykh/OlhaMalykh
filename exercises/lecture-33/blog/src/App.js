import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Gallery from './components/Gallery';

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

    </div>
  );
}

export default App;
