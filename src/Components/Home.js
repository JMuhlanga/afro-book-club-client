import React, { useState } from 'react';
import BookCard from "./BookCard";

function Home(){
    
    return(
        <>
            <div className = "hero-image">

                <div className = "hero-text">

                    <h1 style="font-size:50px">Welcome to Afro Book Club</h1>
                    <p>
                        The art of being an author is a very underrated discipline, we know of some of the famous African
                        Authors such as Chinua Achebe and Chimamanda Ngozi who inspired while informing through
                        their literal works. This sometimes plays an important role of Showcasing the African Mindset
                        while also entertaining us.
                    </p>
                    <button>Join-us</button>

                </div>
                

            </div>

            <div className = "featured Books">

            </div>
        </>
        
    );
}

export default Home;