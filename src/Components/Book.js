import React, { useState,useEffect } from 'react';

function Book(bookId){

    const [bookObj, setBookObj] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:3000/books/{$bookid}")
          .then((r) => r.json())
          .then((dataObj) => setBookObj(dataObj))
      },[setBookObj])

    return(
        <div className="book-page">
            
                <h2>{bookObj.title}</h2>
                <img src={bookObj.img} alt={bookObj.title} />
                <h3><b>Author - {bookObj.user.username} </b></h3>
                
        </div>
    );
}

export default Book;