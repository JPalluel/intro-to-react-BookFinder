import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

function FavBookList(props){
    return(
    <div className='book-list'>
        <ListGroup variant="flush">
        {(props.title).map((title, index)=>{
            return <ListGroup.Item key={index}>{title}</ListGroup.Item>
        })}
        </ListGroup>
    </div>
    )
}

export default FavBookList;