import React from 'react';
import ExpensesContainer from "../event/expenses/ExpensesContainer";
import ExpensesListContainer from "../event/expenses/expensesList/ExpensesListContainer";



function Eventpage(props) {

    return (
        <div className="container">
            <h1>Details of expenses from an event</h1>

            <ExpensesContainer eventId={props.match.params.eventId}/>
            <ExpensesListContainer eventId={props.match.params.eventId}/>

        </div>
    );
}

export default Eventpage;