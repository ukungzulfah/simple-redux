import { Provider, connect } from "react-redux";
import { applyMiddleware, combineReducers, createStore as cs } from "redux";
import thunk from "redux-thunk";

function connects(defaultState: any, App: any) {
    return connect((state: { [key: string]: any }) => {
        return Object.assign({}, defaultState, state.HomeReducer);
    }, {
        updateState: (state: any) => {
            return (dispatch: any) => {
                dispatch({ type: 'UPDATE_STATE', state });
            };
        }
    })(App);
}

function creteStore(defaultState: any, App: any) {
    function HomeReducer(state = defaultState, action: { state: Object, type: string }) {
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
        <Provider store={store} >
            <App />
        </Provider>
    );
}

export {
    connects,
    creteStore
}
