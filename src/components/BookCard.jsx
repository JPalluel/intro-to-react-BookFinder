import React from'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function BookCard(props){
  
    return(
     <Card style={{ maxWidth: '15rem'}}>
      <Button onClick= {() =>{props.onAdd(props.title)}} variant="light"><FontAwesomeIcon icon={faPlus} /></Button>{' '}
      <Card.Img variant="top" src={props.url}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.author}
        </Card.Text>
        <a href={props.href}><Button variant="secondary">Discover More </Button> </a>
    </Card.Body>
    </Card>
    )
}
export default BookCard;