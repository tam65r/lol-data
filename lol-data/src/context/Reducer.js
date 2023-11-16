import {
    FETCH_CHAMPION_DETAIL_STARTED,
    FETCH_CHAMPION_DETAIL_SUCCESS,
    FETCH_CHAMPION_DETAIL_FAILURE
} from './Actions';


function reducer(state, action) {
    switch (action.type) {
        case FETCH_CHAMPION_DETAIL_STARTED:
            return {
                ...state,
                champion: {
                    loading: true,
                    error: null,
                    data: [],
                },
            };
        case FETCH_CHAMPION_DETAIL_SUCCESS:
            return {
                ...state,
                champion: {
                    loading: false,
                    error: null,
                    data: action.payload.data,
                },
            };
        case FETCH_CHAMPION_DETAIL_FAILURE:
            return {
                ...state,
                champion: {
                    loading: false,
                    error: action.payload.error,
                    data: [],
                },
            }
        default:
            return state;
    }
}

export default reducer;