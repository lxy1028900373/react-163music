import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';	//中间件
import reducer from './reducer';

//
const composeEnhancers= window.REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//createStore(第一个参数reducer，第二个参数中间件加强)
//applyMiddleware合并多个中间件
const store= createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
))

export default store;