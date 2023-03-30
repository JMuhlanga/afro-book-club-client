
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/books')
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
    <>
      <section>
        <div>
            <h2><b>Here are Some of the Books on our site</b></h2>
        </div>
        <div className="featured-books">
          {books.map(book => (
            <div key={book.id} className="card">
              <img src={book.img} alt={book.title} />
              <div className="card-body">
                <h3>{book.title}</h3>
                <p>{book.user ? book.user.username : ''}</p>
                <Link to={`/books/${book.id}`}>Find out More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Books;
