import { connect } from 'react-redux';
import NewExpense from "./NewExpense";
import {
    changeInputTitle,
    fetchCategories,
    selectCategory,
    selectPaid,
    changeInputUser,
    changeInputAmount,
    changeInputDate,
    fetchNewExpense
} from "../../../../action/action";


// Envoyer des données dans les props
const mapStateToProps = state => ({
    event: state.front.event,
    categories: state.front.categories,
    selectedCategory: state.front.newExpense.category,
    paid: state.front.newExpense.paid,
    title : state.front.newExpense.title,
    user: state.front.newExpense.user,
    amount: state.front.newExpense.amount,
    date: state.front.newExpense.date




})

// Envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories()),
    selectCategory: category => dispatch(selectCategory(category)),
    selectPaid: paid => dispatch(selectPaid(paid)),
    changeInputTitle: title => dispatch(changeInputTitle(title)),
    changeInputUser: user => dispatch(changeInputUser(user)),
    changeInputAmount : amount => dispatch(changeInputAmount(amount)),
    changeInputDate: date => dispatch(changeInputDate(date)),
    fetchNewExpense: () => dispatch(fetchNewExpense())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewExpense)