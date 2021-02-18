import React from'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../App.css'


function BookCard(props){
    return(
     <Card style={{ maxWidth: '15rem'}}>
      <Card.Img variant="top" src={props.url}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.author}
        </Card.Text>
        <a href={props.href}><Button variant="primary">Discover More </Button> </a>
    </Card.Body>
    </Card>
    )
}
export default BookCard;