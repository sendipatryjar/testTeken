import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer, persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import rootReducer from './../reducers'
import {combineReducers} from 'redux';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const appReducer = combineReducers({
    prodReducer: persistReducer(persistConfig, rootReducer),
});

export default appReducer;