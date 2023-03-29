import React from "react";
import { Link } from "react-router-dom";

function BookCard(props){
    const { data } = props;
    return(
        <div className = "book-card">
            <img src={data.img} alt ={data.title} />
            <h3>{data.title}</h3>
            <h5>Author - {data.authorName}</h5>
            <h5>Publish Date - {data.publishDate}</h5>
            <h5>Rating - {data.rating}</h5>
            <Link to={'/books/${data.id}'}>Find out More </Link> 

        </div>
    );
}

export default BookCard;