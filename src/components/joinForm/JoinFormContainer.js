import { connect } from 'react-redux';
import JoinFom from "./JoinFom";
import {changeEventId, fetchEvent, fetchExpenses} from "../../action/action";

// Envoyer des données dans les props
const mapStateToProps = state => ({
    eventId: state.front.eventId,
    loading: state.front.loading.event,
    event: state.front.event
})

// Envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    changeEventId: event => dispatch(changeEventId(event)),
    fetchEvent: () => dispatch(fetchEvent()),
    fetchExpenses: () => dispatch(fetchExpenses())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JoinFom)