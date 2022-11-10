import {createReducer} from "../StoreUtils";

const initState = {
    modal: false
}

const reducers = {

    updateState(state, {payload}) {
        return {
            ...state,
            ...payload,
        };
    },
};

export default createReducer(initState, reducers);
