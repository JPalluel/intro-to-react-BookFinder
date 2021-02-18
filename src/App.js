
import 'bootstrap/dist/css/bootstrap.min.css'
import BookCard from './components/BookCard'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import { useState } from 'react';
import Button from 'react-bootstrap/Button'

function App() {
  const [result, setResult] = useState(([]))
  const apiKey = "AIzaSyDg3BvbTu5Wb-aP1hWU-RCR6S6lhC_pbNM"
  

    function submitHandler(book){
      !book ? alert("you must fill the form") : 
        fetch("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key="+ apiKey+ "&maxResults=10", {
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

      <SearchBar onSearched={submitHandler} onClickButton={(e) =>{ e.preventDefault()}}/>

      <div className="cards-container">
        {result.map( (book, index) => {
        return <BookCard key= {index} id={index} title={book.volumeInfo.title} author={book.volumeInfo.authors} url={book.volumeInfo.imageLinks.smallThumbnail} href={book.volumeInfo.infoLink} />
          })
        }
        
       </div> 

    </div>
  );
}

export default App;
