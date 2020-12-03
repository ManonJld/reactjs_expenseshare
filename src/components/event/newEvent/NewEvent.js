import React from 'react';

function NewEvent(props) {

    const {newEvent, fetchNewEvent} = props;

    return (
        <div className="container">
            <form onSubmit={(event) => {
                fetchNewEvent();
                event.preventDefault()
            }}>
                <div className="form-row align-items-center">
                    <div className="col-auto">
                        <label>Créer un nouveau groupe</label>
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control" onChange={newEvent =>props.changeInputEvent(newEvent.target.value)} value={newEvent} name="name" required/>
                    </div>
                    <div className="col-auto">
                        <input type="submit" className="btn btn-success" value="Enregistrer"/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NewEvent;