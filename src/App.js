import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Books from './Components/Books';
import Authors from './Components/Authors';
import About from './Components/About';
import FooterSection from './Components/Footer';
import Login from './Components/Login';
import Book from './Components/Book';
import Register from './Components/Register';
import ForgotPass from './Components/ForgotPass';
import AddBook from './Components/AddBook';
import User from './Components/User';
import MyBooks from './Components/MyBooks';
import EditBook from './Components/EditBook';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://apple-pie-07675.herokuapp.com/books')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong while fetching the books.');
      })
      .then(data => setBooks(data))
      .catch(error => {
        console.log(error);
      });
  }, []);

  const bookRoutes = books.map(book => (
    <Route key={book.id} path={`/books/${book.id}`} element={<Book book={book} />} />
  ));

  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/books" element={<Books />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpass" element={<ForgotPass />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/user" element={<User />} />
          <Route path="/mybooks" element={<MyBooks />} />
          <Route path="/books/:id/edit" element={<EditBook />} />

          {bookRoutes}
        </Routes>

        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
