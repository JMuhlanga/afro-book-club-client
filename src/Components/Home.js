import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://apple-pie-07675.herokuapp.com/books')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);
  

  return (
    <div className="container">
      <section className="hero-section">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Welcome to Afro Book Club</h1>
            <p>
              The art of being an author is a very underrated discipline, we know of some of the famous African Authors such
              as Chinua Achebe and Chimamanda Ngozi who inspired while informing through their literal works. This sometimes
              plays an important role of Showcasing the African Mindset while also entertaining us.
            </p>
            <Link to={'/register'}>Join us!</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="featured-books">
          <div className="card-container">
            {books.map((book) => (

                <div key={book.id} className="card">
                    {book.img ? (
                        <img src={book.img || '../Images/stock.jpg'} alt={book.title}  />

                    ) : (
                        <div className="placeholder-image" />
                    )}
                    <div className="card-body">
                        <h3>{book.title}</h3>
                        <p>{book.user && book.user.username}</p>
                        <Link to={`/books/${book.id}`}>Find out More</Link>
                    </div>
                </div>
            
            
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
