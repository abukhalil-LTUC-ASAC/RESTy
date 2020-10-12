import React from 'react';
import './design/reset.css';
import './design/design.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Form/>
      </main>
      <Footer/>
    </>
  )
}

export default App;
