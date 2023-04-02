import React, { useState } from 'react';
import '../Styles/Book.css';

function Book({ book }) {
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    const user_id = sessionStorage.getItem('userId');
    const book_id = book.id;
    const content = commentText;

    const commentData = { user_id, book_id, content };

    fetch('http://apple-pie-07675.herokuapp.com/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => {
        if (response.ok) {
          // Redirect to /books page
          window.location.href = '/books';
        } else {
          // Handle error response
          console.log('Error:', response.statusText);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  const authorName = book.user ? book.user.username : 'Unknown';

  return (
    <div className="book-container">
      <div className="book-details">
        <h2>{book.title}</h2>
        <img src={book.img} alt={book.title} />
        <p>
          <b>Author: </b>
          {authorName}
        </p>
        <p>
          <b>Published:</b> {book.created_at}
        </p>

        <p>
          <b>Link: </b>
          {book.bookLink}
        </p>
        <p>{book.description}</p>

        {book.comments && book.comments.length > 0 && (
          <div>
            <h3>Comments:</h3>
            {book.comments.map((comment) => (
              <div key={comment.id}>
                <p>{comment.content}</p>
                <p>
                  <b>comment by:</b> {comment.user.username}
                </p>
              </div>
            ))}
          </div>
        )}

        <form onSubmit={handleCommentSubmit}>
          <label htmlFor="comment-text">Add a comment:</label>
          <br />
          <textarea
            id="comment-text"
            value={commentText}
            onChange={(event) => setCommentText(event.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Book;
