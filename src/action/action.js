// Fetch an event
export function fetchEvent(eventId){
    return (dispatch) => {

        dispatch(fetchEventPending());
        fetch(process.env.REACT_APP_API_URL + '/events/' + eventId )
            .then(response => response.json())
            .then(data => {

                if (data["@type"] !== "Event"){
                    const err = "Cet évènement n'existe pas"
                    return dispatch(fetchEventFailure(err))
                } else {
                    // console.log(data)
                    return dispatch(fetchEventSuccess(data))
                }
            })
            .catch(err => dispatch(fetchEventFailure(err)))
    }
}

export const FETCH_EVENT_PENDING = 'FETCH_EVENT_PENDING';
function fetchEventPending(){
    return { type: FETCH_EVENT_PENDING}
}

export const FETCH_EVENT_SUCCESS = 'FETCH_EVENT_SUCCESS';
function fetchEventSuccess(selectedEvent) {
    return { type: FETCH_EVENT_SUCCESS, payload: selectedEvent };
}

export const FETCH_EVENT_FAILURE = 'FETCH_EVENT_FAILURE';
function fetchEventFailure(error) {
    return { type: FETCH_EVENT_FAILURE, payload: error};
}


// Fetch expenses
export function fetchExpenses(eventId){
    return (dispatch) => {
        dispatch(fetchExpensesPending());
        fetch(process.env.REACT_APP_API_URL + '/events/' + eventId + '/expenses')
            .then(response => response.json())
            .then(data => dispatch(fetchExpensesSuccess(data['hydra:member'])))
            .catch(err => dispatch(fetchExpensesFailure(err)))
    }
}

export const FETCH_EXPENSES_PENDING = 'FETCH_EXPENSES_PENDING';
function fetchExpensesPending(){
    return { type: FETCH_EXPENSES_PENDING}
}

export const FETCH_EXPENSES_SUCCESS = 'FETCH_EXPENSES_SUCCESS';
function fetchExpensesSuccess(selectedExpenses) {
    return { type: FETCH_EXPENSES_SUCCESS, payload: selectedExpenses };
}

export const FETCH_EXPENSES_FAILURE = 'FETCH_EXPENSES_FAILURE';
function fetchExpensesFailure(error) {
    return { type: FETCH_EXPENSES_FAILURE, payload: error};
}

// Fetch new event
export function fetchNewEvent(){
    return (dispatch, getState) => {
        const state = getState();
        const newEvent = state.front.newEvent;
        dispatch(fetchNewEventPending());
        fetch(process.env.REACT_APP_API_URL + '/events', {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: newEvent})
        })
            .then(response => response.json())
            .then(data => dispatch(fetchNewEventSuccess(data)))
            .catch(err => dispatch(fetchNewEventFailure(err)))
    }
}

export const FETCH_NEWEVENT_PENDING = 'FETCH_NEWEVENT_PENDING';
function fetchNewEventPending(){
    return { type: FETCH_NEWEVENT_PENDING}
}

export const FETCH_NEWEVENT_SUCCESS = 'FETCH_NEWEVENT_SUCCESS';
function fetchNewEventSuccess(newEvent) {
    return { type: FETCH_NEWEVENT_SUCCESS, payload: newEvent };
}

export const FETCH_NEWEVENT_FAILURE = 'FETCH_NEWEVENT_FAILURE';
function fetchNewEventFailure(error) {
    return { type: FETCH_NEWEVENT_FAILURE, payload: error};
}

// Fetch categories
export function fetchCategories(){
    return (dispatch) => {
        dispatch(fetchCategoriesPending());
        fetch(process.env.REACT_APP_API_URL + '/categories')
            .then(response => response.json())
            .then(data => dispatch(fetchCategoriesSuccess(data['hydra:member'])))
            .catch(err => dispatch(fetchCategoriesFailure(err)))
    }
}

export const FETCH_CATEGORIES_PENDING = 'FETCH_CATEGORIES_PENDING';
function fetchCategoriesPending(){
    return { type: FETCH_CATEGORIES_PENDING}
}

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
function fetchCategoriesSuccess(categories) {
    return { type: FETCH_CATEGORIES_SUCCESS, payload: categories };
}

export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
function fetchCategoriesFailure(error) {
    return { type: FETCH_CATEGORIES_FAILURE, payload: error};
}


//Small actions

export const CHANGE_EVENT_ID = 'CHANGE_EVENT_ID';
export function changeEventId(value) {
    return {type: CHANGE_EVENT_ID, payload: value};
}

export const CHANGE_INPUT_EVENT = 'CHANGE_INPUT_EVENT';
export function changeInputEvent(value) {
    return {type: CHANGE_INPUT_EVENT, payload: value};
}

export const CLOSE_EVENT = 'CLOSE_EVENT';
export function closeEvent() {
    return {type: CLOSE_EVENT}
}

//Form actions

export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export function selectCategory(category){
    return {type: SELECT_CATEGORY, payload: category}
}

export const SELECT_PAID = 'SELECT_PAID';
export function selectPaid(paid){
    return {type: SELECT_PAID, payload: paid}
}

export const CHANGE_INPUT_TITLE = 'CHANGE_INPUT_TITLE';
export function changeInputTitle(value){
    return {type: CHANGE_INPUT_TITLE, payload: value};
}

export const CHANGE_INPUT_USER = 'CHANGE_INPUT_USER';
export function changeInputUser(value){
    return {type: CHANGE_INPUT_USER, payload: value};
}

export const CHANGE_INPUT_AMOUNT = 'CHANGE_INPUT_AMOUNT';
export function changeInputAmount(value){
    return {type: CHANGE_INPUT_AMOUNT, payload: value};
}

export const CHANGE_INPUT_DATE = 'CHANGE_INPUT_DATE';
export function changeInputDate(value){
    return {type: CHANGE_INPUT_DATE, payload: value};
}

// Fetch new expense
export function fetchNewExpense(){
    return (dispatch, getState) => {
        console.log('fetchExpense')
        const state = getState();
        const title = state.front.newExpense.title;
        const user = state.front.newExpense.user;
        const amount = state.front.newExpense.amount;
        const paid = state.front.newExpense.paid;
        const date = state.front.newExpense.date;
        const category = state.front.newExpense.category;
        const event = state.front.event['@id'];
        dispatch(fetchNewExpensePending());
        fetch(process.env.REACT_APP_API_URL + '/expenses', {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                user: user,
                amount: amount,
                paid: paid,
                createdAt: date,
                category: category,
                event: event})
        })
            .then(response => response.json())
            .then(data => dispatch(fetchNewExpenseSuccess(data)))
            .catch(err => dispatch(fetchNewExpenseFailure(err)))
    }
}

export const FETCH_NEW_EXPENSE_PENDING = 'FETCH_NEW_EXPENSE_PENDING';
function fetchNewExpensePending(){
    return { type: FETCH_NEW_EXPENSE_PENDING}
}

export const FETCH_NEW_EXPENSE_SUCCESS = 'FETCH_NEW_EXPENSE_SUCCESS';
function fetchNewExpenseSuccess(newExpense) {
    return { type: FETCH_NEW_EXPENSE_SUCCESS, payload: newExpense };
}

export const FETCH_NEW_EXPENSE_FAILURE = 'FETCH_NEW_EXPENSE_FAILURE';
function fetchNewExpenseFailure(error) {
    return { type: FETCH_NEW_EXPENSE_FAILURE, payload: error};
}