import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/EditBook.css';

function EditBook() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const userId = sessionStorage.getItem('userId');

  useEffect(() => {
    fetch(`https://apple-pie-07675.herokuapp.com/users/${userId}/books`)
      .then(response => response.json())
      .then(data => setBook(data));
  }, [id, userId]);

  const handleSubmit = event => {
    event.preventDefault();
    fetch(`/books/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    }).then(() => {
      window.location.href = `/books/${id}`;
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setBook(prevBook => ({ ...prevBook, [name]: value }));
  };

  return (
    <div className="edit-book-page">
      <div className="edit-book-container">
        <h1>Edit Book</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" value={book.title} onChange={handleChange} />
          </label>
          <br />
          <label>
            Image:
            <input type="text" name="img" value={book.img} onChange={handleChange} />
          </label>
          <br />
          <label>
            Book link:
            <input type="text" name="bookLink" value={book.bookLink} onChange={handleChange} />
          </label>
          <br />
          <label>
            Description:
            <textarea name="description" value={book.description} onChange={handleChange} />
          </label>
          <br />
          <input type="submit" value="Save" />
        </form>
      </div>
    </div>
  );
}

export default EditBook;
