import React, { useState } from 'react';
import '../Styles/AddBooks.css';

function AddBook({ userId, onFormSubmit }) {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [bookLink, setBookLink] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const user_Id = sessionStorage.getItem('userId');

    const bookData = {title, img, bookLink, description, user_Id};
    fetch('/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    })
    .then(response => {
      if (response.ok) {
        // Redirect to /books page
        window.location.href = '/books';
      } else {
        // Handle error response
        console.log('Error:', response.statusText);
      }
    })
    .catch(error => {
      console.log('Error:', error);
    });
  };
  

  return (
    <div className="container">
      <div className="background-layer"></div>
      <div className="form-wrapper">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="title" className="label">Title</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="input" />

            <label htmlFor="img" className="label">Image</label>
            <input type="text" id="img" value={img} onChange={(e) => setImg(e.target.value)} className="input" />

            <label htmlFor="bookLink" className="label">Book Link</label>
            <input type="text" id="bookLink" value={bookLink} onChange={(e) => setBookLink(e.target.value)} className="input" />

            <label htmlFor="description" className="label">Description</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="input" />

            <button type="submit" className="button">Submit</button>
          </form>
          </div>
      </div>
    </div>

    
  );
}

export default AddBook;
