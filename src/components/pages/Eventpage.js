import React from 'react';
import ExpensesContainer from "../event/expenses/ExpensesContainer";

function Eventpage(props) {
    return (
        <div className="container">
            <h1>Details of expenses from an event</h1>
            <ExpensesContainer/>
        </div>
    );
}

export default Eventpage;