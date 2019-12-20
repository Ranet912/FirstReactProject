import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import counter from './modules/counter'

let middleWares = [thunk]


const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error
})

middleWares.push(logger)


const store = createStore(
  combineReducers({
    counter
  }),
  applyMiddleware(...middleWares)
)

export default () => store;
