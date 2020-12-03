import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import NewExpenseContainer from "./newExpense/NewExpenseContainer";




function Expenses(props) {

    const {event, eventId, fetchEvent, error, closeEvent} = props;

    useEffect( () => {fetchEvent(eventId)}, [fetchEvent, eventId])

         if (error){
             return (
                 <div className="container">
                     <h2>cet évènement n'existe pas</h2>
                     <Link to="/join" className="btn btn-danger" onClick={() => closeEvent()}> Retour </Link>
                 </div>
             )
         }

    if(event === null){
        return null
    }

    return (

        <div className="container">
            <h2>List of expenses for {event.name}</h2>
            <p>Identifier: {event.slug}</p>

            <div className="container">
                <div className="row border border-info rounded">
                    <div className="col">
                        <NewExpenseContainer/>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Expenses;