import React from 'react';
import Badge from 'react-bootstrap/Badge'

function MyList(props){
    return(
        <h4 className="list">My List 
            <span className="list-counter"><Badge variant="secondary"> {props.num} </Badge></span>
        </h4>
    )
}

export default MyList;