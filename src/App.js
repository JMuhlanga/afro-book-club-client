import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Book from './Components/Book';
import Books from './Components/Books';
import Authors from './Components/Authors';
import Author from './Components/Author';
import User from './Components/User';
import Login from './Components/Login';
import Register from './Components/Register';
import ForgotPass from './Components/ForgotPass';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <NavBar />
      
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/books" element={<Books />} />
        <Route exact path="/books/:id" element={<Book />} />
        <Route exact path="/Authors" element={<Authors />} />
        <Route exact path="/Authors/:id" element={<Author />} />
        <Route exact path="/profile/:id" element={<User />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <<Route exact path="/forgotpass" element={<ForgotPass />} />

      </Routes>

      <Footer />

    </>
  );
}

export default App;
