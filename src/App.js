import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
//import logo from './logo.svg';
import './css/style.css';
import './css/layout.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
