
import React, { useEffect, useState } from 'react';

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
        <div className="featured-books">
          {books.map(book => (
            <div key={book.id} className="card">
              <img src={book.img} alt={book.title} />
              <div className="card-body">
                <h3>{book.title}</h3>
                <p>{book.user ? book.user.username : ''}</p>
                <button>Find out More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Books;
