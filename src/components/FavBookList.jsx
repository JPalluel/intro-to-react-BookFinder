import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button'
import { faMinus } from '@fortawesome/free-solid-svg-icons';

function FavBookList(props){
    return(
    <div className='book-list'>
        <ListGroup variant="flush">
        {(props.title).map((title, index)=>{
            return (
            <ListGroup.Item key={index}>{title}
             <Button onClick= {() =>{props.onRemove(title)}} variant="light"><FontAwesomeIcon icon={faMinus} /></Button>{' '}</ListGroup.Item>
        )
        })}
        </ListGroup>
    </div>
    )
}

export default FavBookList;