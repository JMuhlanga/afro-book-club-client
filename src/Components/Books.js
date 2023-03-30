
import React, { useState } from 'react';
import BookCard from './BookCard';

function Books(props){
    const bookId = props;
    const booksData = ;
    
    return(
        <>
            <div className="books-cards-container">
                {booksData.map(data)=>(
                    <BookCard props={booksData} />
                )}
            </div>

        </>
        
    );
}

export default Books;