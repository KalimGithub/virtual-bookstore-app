import './App.css';
import "./style.css";
import { Navbar } from './Components/Navbar';
import Books from './Components/Books';
// import { useState } from 'react';


function App() {
// const [books, setBooks] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Books />
    </div>
  );
}

export default App;
