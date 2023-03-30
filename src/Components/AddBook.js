import React from "react";

function AddBook(){
    const [state, setState] = ({
        title:"",
        img:"",
        bookLink:"",
        description:"",
        author:"",
    });

    function handleChange(e) {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch("http://127.0.0.1:3000/users",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(state),
        }).then((response)=>{
            if(response.ok){
                Window.location.href ='/login';
            }
        })
    }

    return(
        <div>
            <h3>Kindly provide  details about the Book Below</h3>
            
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder='Enter Title Here' value={state.title} onChange={handleChange} />
                <input type="text" name="img" placeholder='Enter Image Link' value={state.img} onChange={handleChange} />
                <input type="text" name="bookLink" placeholder='Enter Title Here' value={state.bookLink} onChange={handleChange} />
                <input type="text" name="description" placeholder='Enter Title Here' value={state.description} onChange={handleChange} />
                
                <button type="submit" >Register</button>
            </form>

        </div>
    );
}

export default AddBook;