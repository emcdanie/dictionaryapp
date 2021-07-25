import logo from "./logo.png";
import './App.css';
import Dictionary from './Dictionary.js';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo img-fluid" alt="logo" />
      <main>
        <Dictionary/>
      </main>
</header>
    <footer className="App-footer">
      <small>This project was coded by{""}
          <a 
          href="https:/elletamcdaniel.com" 
          target="_blank">
            Elleta McDaniel
          </a>{""}
          and is{" "}
          <a
            href="https://github.com/emcdanie"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://romantic-banach-8cf215.netlify.app"
            target="_blank"
          >
            hosted on Netlify
          </a> </small>

    </footer>
    </div>
    
  );
}

export default App;
