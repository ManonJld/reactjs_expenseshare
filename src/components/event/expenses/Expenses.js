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
    //permet d'éviter une erreur 'event is null' si l'id entré n'existe pas car il veut afficher les infos du return principal mais ne peut pas
    if(event === null){
        return null
    }

    return (

        <div className="container">
            <h2>Liste des dépenses pour l'évènement {event.name}</h2>
            <p>Identifiant: {event.slug}</p>

            <div className="container">
                <div className="row border border-info rounded mb-3 pb-3 pt-3">
                    <div className="col">
                        <NewExpenseContainer/>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Expenses;