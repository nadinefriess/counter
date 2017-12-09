import { Store, createStore } from 'redux';
import { rootReducer } from '../reducers/root-reducer';

export interface IAppState{
    count: any
};
export const store: Store<IAppState> = createStore(rootReducer);