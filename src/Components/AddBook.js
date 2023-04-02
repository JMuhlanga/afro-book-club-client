import React, { useState } from 'react';
import '../Styles/AddBooks.css';

function AddBook() {
  const [bookData, setBookData] = useState({
    title: '',
    img: '',
    bookLink: '',
    description: '',
    user_Id: sessionStorage.getItem('userId')
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://apple-pie-07675.herokuapp.com/books', {
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
            <input type="text" id="title" name="title" value={bookData.title} onChange={handleChange} className="input" />

            <label htmlFor="img" className="label">Image</label>
            <input type="text" id="img" name="img" value={bookData.img} onChange={handleChange} className="input" />

            <label htmlFor="bookLink" className="label">Book Link</label>
            <input type="text" id="bookLink" name="bookLink" value={bookData.bookLink} onChange={handleChange} className="input" />

            <label htmlFor="description" className="label">Description</label>
            <textarea id="description" name="description" value={bookData.description} onChange={handleChange} className="input" />

            <button type="submit" className="button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
