import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import contactsReducer from '../reducers/contacts'
import userReducer from '../reducers/user'
import singleContactReducer from '../reducers/singleContact'
const configureStore=()=> {
    const store=createStore(combineReducers({
        contacts:contactsReducer,
        singleContact:singleContactReducer,
        user:userReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore