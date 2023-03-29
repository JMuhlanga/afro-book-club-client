import React, { useState } from 'react';

function Book(){
    return(
        <div className="book-page">
            
                <h2>{dataObj.title}</h2>
                <img src={dataObj.img} alt={dataObj.title} />
                <h3><b>Author - </b></h3>
                
        </div>
    );
}

export default Book;