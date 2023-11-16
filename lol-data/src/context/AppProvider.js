import React, {useContext, useReducer, useState} from 'react';
import PropTypes from 'prop-types';
import AppContext, {Provider} from './AppContext';
import reducer from './Reducer';

const initialState = {
    champions: {
        loading: true,
        error: null,
        data: [],
    },
    champion: {
        champion: "",
        loading: true,
        error: null,
        data: [],
    }
};

const AppProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Provider
            value={{
                state,
                dispatch,
            }}>
            {props.children}
        </Provider>
    );
};
AppProvider.propTypes = {
    children: PropTypes.node,
};

export default AppProvider;