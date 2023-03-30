import React, { useEffect, useState }  from 'react';

function Home(){
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        fetch("/books")
          .then(response => response.json()) // extract the JSON data
          .then(data => {
            setBooks(data); // set the state with the data
          })
          .catch(error => {
            console.log(error);
          });
    }, []);

    
    
    return(
        <>
        <section>
            <div className = "hero-image">

                <div className = "hero-text">

                    <h1>Welcome to Afro Book Club</h1>
                    <p>
                        The art of being an author is a very underrated discipline, we know of some of the famous African
                        Authors such as Chinua Achebe and Chimamanda Ngozi who inspired while informing through
                        their literal works. This sometimes plays an important role of Showcasing the African Mindset
                        while also entertaining us.
                    </p>
                    <button>Join-us</button>

                </div>


            </div>
        </section>

        <section>

            <div className = "featured Books">

                <div className="card-container">
                    {books.map(book => (
                        <div key={book.id} className="card">
                            <img src={book.img} alt={book.title} />
                            <div className="card-body">
                            <h3>{book.title}</h3>
                            <p>{book.user && book.user.username}</p>
                            <button>Find out More</button>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </section>
            

            
        </>
        
    );
}

export default Home;