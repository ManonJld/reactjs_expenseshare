import React, {useEffect} from 'react';


function NewExpense(props) {
    const {
        event,
        fetchCategories,
        categories,
        selectedCategory,
        selectCategory,
        paid,
        selectPaid,
        title,
        changeInputTitle,
        user,
        changeInputUser,
        amount,
        changeInputAmount,
        date,
        changeInputDate
    } = props;

    useEffect(() => {fetchCategories()}, [fetchCategories])


    const categoriesJsx = categories.map(category => <option key={category.id} value={category['@id']}>{category.name}</option> )

    return (
        <div>
            <h3>Ajouter une dépense pour le groupe {event.name}</h3>
            <form onSubmit={(event) => {
                props.fetchNewExpense();
                event.preventDefault();
            }}>
                <div className="form-group">
                    <label htmlFor="title">Dépense</label>
                    <input type="text" className="form-control" id="title" value={title}
                           onChange={event => changeInputTitle(event.target.value)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="user">Effectuée par</label>
                    <input type="text" className="form-control" id="user" value={user}
                           onChange={event => changeInputUser(event.target.value)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Montant</label>
                    <input type="number" className="form-control" id="amount" required value={amount}
                           onChange={event => changeInputAmount(event.target.value)}/>
                </div>
                <div className="custom-control custom-switch form-group">
                    <input type="checkbox" className="custom-control-input" id="paid" checked={paid}
                           onChange={event=> selectPaid(event.target.checked)}/>
                    <label className="custom-control-label" htmlFor="paid">Remboursée?</label>

                </div>
                <div className="form-group">
                    <label htmlFor="category">Catégorie</label>
                    <select className="form-control" id="category" value={selectedCategory}
                            onChange={event => selectCategory(event.target.value)}>
                        {categoriesJsx}
                    </select>
                </div>
                <div className="form-group">
                    <input type="date" name="date" required value={date}
                           onChange={event => changeInputDate(event.target.value)}/>
                </div>
                <input type="submit" value="Enregistrer la dépense" className="btn btn-danger"/>

            </form>
        </div>
    );
}

export default NewExpense;