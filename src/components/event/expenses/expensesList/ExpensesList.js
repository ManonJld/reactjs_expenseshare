import React, {useEffect} from 'react';
import ExpenseCard from "../card/ExpenseCard";

function ExpensesList(props) {

    const {fetchExpenses, eventId, errorEvent, expenses} = props;

    useEffect( () => {fetchExpenses(eventId)}, [fetchExpenses, eventId])

    const expenseJsx = expenses.map(expense => (<ExpenseCard key={expense.id} expense={expense}/>));

    if(errorEvent !== null){
        return null
    } else  if (expenses === []) {
        return <h2>Pas encore de dépenses pour cet évènement</h2>
    } else {
    return (
        <div>
            <div className="container">
                    {expenseJsx}
            </div>
        </div>
    );}
}

export default ExpensesList;