import {makeHTTPRequest} from '../service/Service';

export const FETCH_CHAMPION_DETAIL_STARTED = 'FETCH_CHAMPION_DETAIL_STARTED';
export const FETCH_CHAMPION_DETAIL_SUCCESS = 'FETCH_CHAMPION_DETAIL_SUCCESS';
export const FETCH_CHAMPION_DETAIL_FAILURE = 'FETCH_CHAMPION_DETAIL_FAILURE';

export function fetchChampionDetails(url, request, dispatch) {
    const success = res => dispatch(fetchChampionDetailsSuccess(res));
    const failure = err => dispatch(fetchChampionDetailsFailure(err.message));
    makeHTTPRequest(url, request, success, failure);
}

export function fetchChampionDetailsStarted() {
    return {
        type: FETCH_CHAMPION_DETAIL_STARTED,
    };
}

export function fetchChampionDetailsSuccess(championDetails) {
    return {
        type: FETCH_CHAMPION_DETAIL_SUCCESS,
        payload: {
            data: championDetails,
        },
    };
}

export function fetchChampionDetailsFailure(message) {
    return {
        type: FETCH_CHAMPION_DETAIL_FAILURE,
        payload: {
            error: message,
        },
    };
}