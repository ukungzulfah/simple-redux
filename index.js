import { Provider, connect } from "react-redux";
import { applyMiddleware, combineReducers, createStore as cs } from "redux";
import thunk from "redux-thunk";

function connects(defaultState, App) {
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

function creteStore(defaultState, App) {
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
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

export {
    connects,
    creteStore
}
