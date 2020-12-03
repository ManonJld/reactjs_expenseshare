import React from 'react';

function ExpenseCard(props) {

    const {expense} = props

    let category = expense.category.name;

    if (category === 'Hébergement'){
        category =  <p className="badge badge-pill badge-primary">Hébergement</p>
    } else if (category === 'Transport') {
        category =  <p className="badge badge-pill badge-success">Transport</p>
    } else if (category === 'Nourriture') {
        category =  <p className="badge badge-pill badge-warning">Nourriture</p>
    } else if (category === 'Activité'){
        category =  <p className="badge badge-pill badge-info">Activité</p>
    } else if (category === 'Autre'){
        category =  <p className="badge badge-pill badge-secondary">Activité</p>
    }

    let paid = ''
    if (expense.paid === false){
        paid = 'La dépense n\'est pas encore remboursée';
    } else {
        paid = 'La dépense a été remboursée';

    }

    return (
        <div className="card mb-3">
            <div className="card-header">
                <h2>{expense.title}</h2>
            </div>
            <div className="card-body">

                <p>Dépense effectuées par {expense.user} le {new Date(expense.createdAt).toLocaleDateString()}</p>
                <p>Montant : {expense.amount} €</p>
                <p>{paid}</p>
                {category}
            </div>
        </div>
    );
}

export default ExpenseCard;