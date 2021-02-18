
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

function SearchBar(props){
  const [book, setBook]= useState('');
   
    function searchHandler(event){
        const newBook = event.target.value;
        setBook(newBook)
    }

    return(
        <form   className="search-bar">
            <input type="text" placeholder="Search for an author, a book..." onChange={searchHandler} value={book}></input>
              <Button  onClick= {()=> {props.onSearched(book)}}  type="button" variant="secondary">Search</Button>{' '}
        </form>
    )
}

export  default SearchBar
