import React, { useState } from 'react';
import { Link } from "react-router-dom";

function BookCard(props){
    const { data } = props;
    return(
        <div className = "book-card">
            
            <img src={data.img} alt ={data.title} />
            <h3><b>{data.title}</b></h3>
            <h5><b>Author - </b>{data.authorName}</h5>
            <h5><b>Publish Date - </b>{data.publishDate}</h5>
            <h5><b>Rating - </b>{data.rating}</h5>
            <Link to={'/books/${data.id}'}>Find out More </Link> 

        </div>
    );
}

export default BookCard;