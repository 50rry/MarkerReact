import { FETCH_POSITIONS_SUCCESS } from "./actions";

const initialState = {
    markers: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSITIONS_SUCCESS:
            return {
                ...state,
                markers: action.payload
            };
        default:
            return state;
    }
}

export default reducer;
