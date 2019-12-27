import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import counter from './modules/counter'
import formRedux from './modules/formaRedux'

let middleWares = [thunk]


const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error
})

middleWares.push(logger)


const store = createStore(
  combineReducers({
    counter,
    formRedux
  }),
  applyMiddleware(...middleWares)
)

export default () => store;
