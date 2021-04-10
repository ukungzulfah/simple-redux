import { Provider, connect } from "react-redux";
import { applyMiddleware, combineReducers, createStore as cs } from "redux";
import thunk from "redux-thunk";
import defaultState from '../../src/state.json';

function connects(App) {
    return connect((state) => {
        return Object.assign({}, defaultState, state.HomeReducer);
    }, {
        updateState: (state) => {
            return (dispatch) => {
                dispatch({ type: 'UPDATE_STATE', state });
            };
        }
    })(App);
}

function creteStore() {
    function HomeReducer(state = defaultState, action) {
        switch (action.type) {
            case 'UPDATE_STATE':
                return Object.assign({}, state, action.state);
            default:
                return state;
        }
    }
    const reducers = combineReducers({
        HomeReducer
    });
    const store = cs(reducers, applyMiddleware(thunk));
    return store;
}

export {
    connects,
    creteStore,
    Provider
}
