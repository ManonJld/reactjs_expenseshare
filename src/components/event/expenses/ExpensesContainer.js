import { connect } from 'react-redux';
import Expenses from "./Expenses";
import {closeEvent, fetchEvent} from "../../../action/action";


// Envoyer des données dans les props
const mapStateToProps = state => ({
    event: state.front.event,
    error: state.front.error.event


})

// Envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    closeEvent: () => dispatch(closeEvent())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Expenses)