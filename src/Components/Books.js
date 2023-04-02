import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Books.css';

function Books() {
  const [books, setBooks] = useState([]);
  const userId = sessionStorage.getItem("userId");

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

  return (
    <div className="container">
      <section>
        
        <div className="featured-books">
          <div>
              <h2><b>Here are Some of the Books on our site</b></h2>
          </div>
          <div className="card-container">
            {books.map(book => (
              <div key={book.id} className="card">
                <img src={book.img || '../Images/stock.jpg'} alt={book.title}  />
                <div className="card-body">
                  <h3>{book.title}</h3>
                  <p>{book.user ? book.user.username : ''}</p>
                  <Link to={`/books/${book.id}`}>Find out More</Link>
                </div>
              </div>
            ))}
          </div>
            
          </div>

          {userId && (
              <div className="addmore-container">
                <Link to="/addbook">Add Book</Link>
              </div>
            )}
          
      </section>
    </div>
  );
}

export default Books;
