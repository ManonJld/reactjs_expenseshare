import React from 'react';
import {Redirect} from "react-router-dom";

function Expenses(props) {
    const {event} = props;

    if(event === null){
        return <Redirect to={'/join'}/>
    }

    return (
        <div className="container">
            <button className="btn btn-danger" onClick={() => props.closeEvent()} >Fermer</button>
            <h2>List of expenses for {event.name}</h2>
            <p>Identifier: {event.slug}</p>
        </div>
    );
}

export default Expenses;