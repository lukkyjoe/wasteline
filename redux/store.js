import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { reducer } from './reducers';

const logger = createLogger();

const finalCreateStore = compose(
  applyMiddleware(logger)
)(createStore);

const configure = (initialState = {items: [], currentProfile: {}, listedItemNum: 0, showItemList: false, upvotes: 0}) => {
  return finalCreateStore(reducer, initialState); 
};
export default configure;
