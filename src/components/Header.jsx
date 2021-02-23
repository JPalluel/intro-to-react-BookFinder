import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
function Header(){
    return(
        <header className="header">
            <h1><FontAwesomeIcon icon={faBook} />  Find a Book</h1>
        </header>
    )
}

export default Header;