import { connect } from 'react-redux';
import NewExpense from "./NewExpense";


// Envoyer des données dans les props
const mapStateToProps = state => ({
    event: state.front.event




})

// Envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewExpense)