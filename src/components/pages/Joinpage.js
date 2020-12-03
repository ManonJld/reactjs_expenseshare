import React from 'react';
import JoinFormContainer from "../joinForm/JoinFormContainer";
import NewEventContainer from "../event/newEvent/NewEventContainer";


function Joinpage(props) {


    return (
        <React.Fragment>
            <JoinFormContainer/><br/>
            <NewEventContainer/>
        </React.Fragment>
    );
}

export default Joinpage;