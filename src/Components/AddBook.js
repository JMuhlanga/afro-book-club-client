import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label htmlFor="img">Image</label>
      <input type="text" id="img" value={img} onChange={(e) => setImg(e.target.value)} />

      <label htmlFor="bookLink">Book Link</label>
      <input type="text" id="bookLink" value={bookLink} onChange={(e) => setBookLink(e.target.value)} />

      <label htmlFor="description">Description</label>
      <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddBook;
