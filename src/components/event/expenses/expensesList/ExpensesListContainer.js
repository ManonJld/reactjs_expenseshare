import { connect } from 'react-redux';
import ExpensesList from "./ExpensesList";
import {fetchExpenses} from "../../../../action/action"


// Envoyer des données dans les props
const mapStateToProps = state => ({
    expenses: state.front.expenses,
    error: state.front.error.expenses,
    errorEvent: state.front.error.event

})

// Envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    fetchExpenses: (eventId) => dispatch(fetchExpenses(eventId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpensesList)