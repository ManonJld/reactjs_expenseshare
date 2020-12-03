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

} from "../action/action"


const initialState = {
    loading: {
        event: false,
        expenses: false,
        newEvent: false
    },
    error: {
        event: null,
        expenses: null,
        newEvent: null
    },
    eventId: '',
    event: null,
    expenses: [],
    users: [],
    newEvent: ''
};

function front(state = initialState, action) {
    switch (action.type) {
        case FETCH_EVENT_PENDING:
            return { ...state,
                loading: { ...state.loading, event: true
                }};
        case FETCH_EVENT_SUCCESS:
            return { ...state, event: action.payload,
                loading: { ...state.loading, event: false
                }};
        case FETCH_EVENT_FAILURE:
            return { ...state, error:{...state.error, event: action.payload},
                loading: { ...state.loading, event: false
                }};
        case CHANGE_EVENT_ID:
            return { ...state, eventId: action.payload};
        case CHANGE_INPUT_EVENT:
            return { ...state, newEvent: action.payload};
        case CLOSE_EVENT:
            return { ...state, error:{...state.error, event: null}}
        case FETCH_EXPENSES_PENDING:
            return { ...state,
                loading: { ...state.loading, expenses: true
                }};
        case FETCH_EXPENSES_SUCCESS:
            return { ...state, expenses: action.payload,
                loading: { ...state.loading, expenses: false
                }};
        case FETCH_EXPENSES_FAILURE:
            return { ...state, error:{...state.error, expenses: action.payload},
                loading: { ...state.loading, expenses: false
                }};
        case FETCH_NEWEVENT_PENDING:
            return { ...state,
                loading: { ...state.loading, newEvent: true
                }};
        case FETCH_NEWEVENT_SUCCESS:
            return { ...state, loading: { ...state.loading, newEvent: false
                }};
        case FETCH_NEWEVENT_FAILURE:
            return { ...state, error:{...state.error, newEvent: action.payload},
                loading: { ...state.loading, newEvent: false
                }};
        default:
            return state;
    }
}

export default front;