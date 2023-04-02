import { useState, useEffect } from 'react';
import "../Styles/Mybooks.css";
function MyBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    fetch(`https://apple-pie-07675.herokuapp.com/users/${userId}/books`)
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.log(error));
  }, []);

  function handleDelete(bookId) {
    fetch(`/books/${bookId}`, { method: 'DELETE' })
      .then(() => setBooks(books.filter(book => book.id !== bookId)))
      .catch(error => console.log(error));
  }

  function handleEdit(bookId) {
    window.location.href = `/books/${bookId}/edit`;
  }

  return (
    <div className="my-books-container">
      <h1>My Books</h1>

      <ul>
        {books.map(book => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <img src={book.img} alt={book.title} />
            <p>{book.description}</p>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
            <button onClick={() => handleEdit(book.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyBooks;
