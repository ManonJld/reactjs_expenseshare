import React from 'react';
import ExpensesContainer from "../event/expenses/ExpensesContainer";
import ExpensesListContainer from "../event/expenses/expensesList/ExpensesListContainer";



function Eventpage(props) {

    return (
        <div className="container">
            <ExpensesContainer eventId={props.match.params.eventId}/>
            <ExpensesListContainer eventId={props.match.params.eventId}/>

        </div>
    );
}

export default Eventpage;