import React from 'react';
import {Link} from "react-router-dom";

function JoinFom(props) {
    const {loading, eventId} = props;

    if(loading) {
        return <div>Chargement en cours...</div>
    }

    // if(event !== null){
    //     return <Redirect to={'/event/' + eventId}/>
    // }

    return (
        <div className="container">
            <h1>Join</h1>

                <div className="form-row align-items-center">
                    <div className="col-auto">
                        <label>Event identifier</label>
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control" onChange={eventId =>props.changeEventId(eventId.target.value)} value={eventId}/>
                    </div>
                    <div className="col-auto">
                        <Link to={'/event/' + eventId} className="btn btn-info">Valider</Link>
                        {/*<button className="btn btn-info" onClick={() => {*/}
                        {/*    props.fetchEvent();*/}
                        {/*    props.fetchExpenses();*/}
                        {/*} }>Valider</button>*/}
                    </div>
                </div>

        </div>
    );
}

export default JoinFom;