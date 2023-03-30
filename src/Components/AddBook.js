import React, { useState } from 'react';

function AddBookForm({ userId, onFormSubmit }) {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [bookLink, setBookLink] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { title, img, bookLink, description, authorId: userId };
    onFormSubmit(formData);
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

export default AddBookForm;
