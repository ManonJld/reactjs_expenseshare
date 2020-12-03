import { connect } from 'react-redux';
import NewEvent from "./NewEvent";
import {changeInputEvent, fetchNewEvent} from "../../../action/action";


// Envoyer des données dans les props
const mapStateToProps = state => ({
    newEvent: state.front.newEvent




})

// Envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    changeInputEvent: event => dispatch(changeInputEvent(event)),
    fetchNewEvent: () => dispatch(fetchNewEvent()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewEvent)