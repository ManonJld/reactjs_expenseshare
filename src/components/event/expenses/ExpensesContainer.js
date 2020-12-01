import { connect } from 'react-redux';
import Expenses from "./Expenses";
import { closeEvent } from "../../../action/action";


// Envoyer des données dans les props
const mapStateToProps = state => ({
    event: state.front.event

})

// Envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    closeEvent: () => dispatch(closeEvent())

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Expenses)