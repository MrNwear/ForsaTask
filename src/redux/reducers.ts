import {combineReducers} from '@reduxjs/toolkit';
import sectorsReducer from './Sectors/reducers';
export const reducers=combineReducers({
    sectors:sectorsReducer
})