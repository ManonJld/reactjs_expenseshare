import React from 'react';

function NewExpense(props) {
    const {event} = props;
    return (
        <div>
            <h3>Ajouter une dépense pour le groupe {event.name}</h3>
        </div>
    );
}

export default NewExpense;