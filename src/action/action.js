export function fetchEvent(){
    return (dispatch, getState) => {
        const state = getState();
        dispatch(fetchEventPending());
        fetch(process.env.REACT_APP_API_URL + '/events/' + state.front.eventId )
            .then(response => response.json())
            .then(data => dispatch(fetchEventSuccess(data)))
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

export const CHANGE_EVENT_ID = 'CHANGE_EVENT_ID';
export function changeEventId(value) {
    return {type: CHANGE_EVENT_ID, payload: value};
}

export const CLOSE_EVENT = 'CLOSE_EVENT';
export function closeEvent() {
    return {type: CLOSE_EVENT}
}

export function fetchExpenses(){
    return (dispatch, getState) => {
        const state = getState();
        dispatch(fetchExpensesPending());
        fetch(process.env.REACT_APP_API_URL + '/events/' + state.front.eventId + '/expenses')
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