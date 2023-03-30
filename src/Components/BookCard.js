import React from 'react';
import { Link } from "react-router-dom";

function BookCard(props){
    return(
        <div className="book-card">
            <img src={props.data.img} alt={props.data.title} />
            <h3><b>{props.data.title}</b></h3>
            <h5><b>Author - </b>{props.data.authorName}</h5>
            <h5><b>Publish Date - </b>{props.data.publishDate}</h5>
            <h5><b>Rating - </b>{props.data.rating}</h5>
            <Link>Find out More </Link> 
        </div>
    );
}

export default BookCard;