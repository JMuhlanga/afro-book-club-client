import React, { useState } from 'react';
import '../Styles/Book.css';

function Book({ book }) {
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    const userId = sessionStorage.getItem('user_id');

    if (!userId) {
      console.error('User not logged in.');
      return;
    }

    fetch('/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        content: commentText,
        book_id: book.id,
        user_id: userId,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong with the network request.');
      })
      .then((data) => {
        console.log(data);
        setCommentText('');
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className="book-container">
      <div className="book-details">
        <h2>{book.title}</h2>
        <img src={book.img} alt={book.title} />
        <p>
          <b>Author: </b>
          {book.author}
        </p>
        <p>
          <b>Published:</b> {book.created_at}
        </p>

        <p>{book.description}</p>

        {book.comments && book.comments.length > 0 && (
          <div>
            <h3>Comments:</h3>
            {book.comments.map((comment) => (
              <div key={comment.id}>
                <p>{comment.content}</p>
                <p>
                  <b>Username:</b> {comment.user.username}
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
