import { IAppState } from '../app/app.store';
const initialState:IAppState = {
    count: 0
};
export const rootReducer = function(state = initialState, action){
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}