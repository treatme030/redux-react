import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer';
import logger from 'redux-logger'
import thunk from 'redux-thunk' //비동기 작업을 처리하기 위해 
import { composeWithDevTools } from 'redux-devtools-extension';

//여러개의 middleware를 사용하기 위해 
const middleware = [logger, thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store;