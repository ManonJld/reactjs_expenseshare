import {
    FETCH_EVENT_PENDING,
    FETCH_EVENT_SUCCESS,
    FETCH_EVENT_FAILURE,
    CHANGE_EVENT_ID,
    CLOSE_EVENT,
    FETCH_EXPENSES_PENDING,
    FETCH_EXPENSES_SUCCESS,
    FETCH_EXPENSES_FAILURE,
    CHANGE_INPUT_EVENT,
    FETCH_NEWEVENT_PENDING,
    FETCH_NEWEVENT_SUCCESS,
    FETCH_NEWEVENT_FAILURE,
    FETCH_CATEGORIES_PENDING,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    SELECT_CATEGORY,
    SELECT_PAID,
    CHANGE_INPUT_TITLE,
    CHANGE_INPUT_USER,
    CHANGE_INPUT_AMOUNT,
    CHANGE_INPUT_DATE,
    FETCH_NEW_EXPENSE_PENDING,
    FETCH_NEW_EXPENSE_SUCCESS,
    FETCH_NEW_EXPENSE_FAILURE

} from "../action/action"


const initialState = {
    loading: {
        event: false,
        expenses: false,
        newEvent: false,
        categories:false,
        newExpense: false
    },
    error: {
        event: null,
        expenses: null,
        newEvent: null,
        categories: null,
        newExpense: null
    },
    eventId: '',
    event: null,
    expenses: [],
    newEvent: '',
    categories: [],
    newExpense: {
        title: '',
        user: '',
        amount: 0,
        paid: false,
        category: '/categories/1',
        date: ''
    }

};

function front(state = initialState, action) {
    switch (action.type) {
        //fetch event
        case FETCH_EVENT_PENDING:
            return {
                ...state,
                loading: { ...state.loading, event: true}
            };
        case FETCH_EVENT_SUCCESS:
            return {
                ...state,
                event: action.payload,
                loading: { ...state.loading, event: false},

            };
        case FETCH_EVENT_FAILURE:
            return {
                ...state,
                error:{...state.error, event: action.payload},
                loading: { ...state.loading, event: false}
            };
        //    small actions
        case CHANGE_EVENT_ID:
            return {
                ...state,
                eventId: action.payload
            };
        case CHANGE_INPUT_EVENT:
            return {
                ...state,
                newEvent: action.payload
            };
        case CLOSE_EVENT:
            return {
                ...state,
                //remet l'eventId à '' si l'id saisi n'existe pas
                eventId: initialState.eventId,
                error:{...state.error, event: null}
            };
        //    fetch expenses
        case FETCH_EXPENSES_PENDING:
            return {
                ...state,
                loading: { ...state.loading, expenses: true}
            };
        case FETCH_EXPENSES_SUCCESS:
            return {
                ...state,
                expenses: action.payload,
                loading: { ...state.loading, expenses: false}
            };
        case FETCH_EXPENSES_FAILURE:
            return {
                ...state,
                error: {...state.error, expenses: action.payload},
                loading: { ...state.loading, expenses: false}
            };
        //    fetch new event
        case FETCH_NEWEVENT_PENDING:
            return {
                ...state,
                loading: { ...state.loading, newEvent: true}
            };
        case FETCH_NEWEVENT_SUCCESS:
            return {
                ...state,
                newEvent: initialState.newEvent,
                loading: { ...state.loading, newEvent: false}
            };
        case FETCH_NEWEVENT_FAILURE:
            return {
                ...state,
                error: {...state.error, newEvent: action.payload},
                loading: { ...state.loading, newEvent: false}
            };
        //    fetch new expense
        case FETCH_NEW_EXPENSE_PENDING:
            return {
                ...state,
                loading: { ...state.loading, newExpense: true}
            };
        case FETCH_NEW_EXPENSE_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                //todo: demander à Pierre comment il est possible de gérer ça
                // expenses: {...state.expenses, ...action.payload},
                newExpense: initialState.newExpense,
                loading: { ...state.loading, newExpense: false}
            };
        case FETCH_NEW_EXPENSE_FAILURE:
            return {
                ...state,
                error: {...state.error, newExpense: action.payload},
                loading: { ...state.loading, newExpense: false}
            };
        //    fetch categories
        case FETCH_CATEGORIES_PENDING:
            return {
                ...state,
                loading: { ...state.loading, categories: true}
            };
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state, categories: action.payload,
                loading: { ...state.loading, categories: false}
            };
        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state, error:{...state.error, categories: action.payload},
                loading: { ...state.loading, categories: false}
            };
        //    form actions
        case SELECT_CATEGORY:
            return {...state, newExpense: {...state.newExpense, category: action.payload}};
        case SELECT_PAID:

            return {...state, newExpense: {...state.newExpense, paid: action.payload}};
        case CHANGE_INPUT_TITLE:
            return {...state, newExpense: {...state.newExpense, title: action.payload}};
        case CHANGE_INPUT_USER:
            return {...state, newExpense: {...state.newExpense, user: action.payload}};
        case CHANGE_INPUT_AMOUNT:
            return {...state, newExpense: {...state.newExpense, amount: action.payload}};
        case CHANGE_INPUT_DATE:
            return {...state, newExpense: {...state.newExpense, date: action.payload}}

        default:
            return state;
    }
}

export default front;