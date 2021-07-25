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
      <small>Coded by Elleta McDaniel</small>
    </footer>
    </div>
    
  );
}

export default App;
