import React from 'react';

function Book({book}){


    return(
        <div className="book-details">
            <h2>{book.title}</h2>
            <img src={book.img} alt={book.title} />
            <p><b>Author: </b>{book.author}</p>
            <p><b>Published:</b> {book.created_at}</p>
            
            <p>{book.description}</p>
        </div>
    );
}

export default Book;