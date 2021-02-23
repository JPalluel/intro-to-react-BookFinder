import React from'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookCard from './components/BookCard';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Badge from './components/Badge';
import FavBookList from './components/FavBookList';

function App() {
  const [result, setResult] = useState(([]));
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);


function addBook(title){
  setCount(count + 1);
  setList((prevBook) =>{return [...prevBook, title]})
  console.log(list);
}

function deleteBook(title){
    if(list.length === 0){
    setCount(0)
  }
  const newList = list.filter((item) => item !== title);
  setList(newList);
  setCount(count-1);
}

function submitHandler(book){
  !book ? alert("you must fill the form") : 
  fetch("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key="+ process.env.REACT_APP_API_KEY + "&maxResults=10", {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response =>{
      return response.json()
    })
    .then(data =>{
      setResult(data.items)
    })
    .catch(err => console.log(err))
}

return (
    <div className="App">
      <Header />
      <Badge num={count}/>
      <FavBookList title={list} onRemove={deleteBook} />
      <SearchBar onSearched={submitHandler} onClickButton={(e) =>{ e.preventDefault()}}/>

      <div className="cards-container">
        {result.map( (book, index) => {
        return (
        <BookCard key= {index} 
        id={index} 
        title={book.volumeInfo.title} 
        author={book.volumeInfo.authors} 
        url={book.volumeInfo.imageLinks.smallThumbnail}
        href={book.volumeInfo.infoLink}
        onAdd={addBook} />
          )
        })
        } 
      </div> 
    </div>
  );
}

export default App;
