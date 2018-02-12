import { combineReducers } from 'redux';
import { responsiveStateReducer } from 'redux-responsive';
import appReducer from 'reducers/appReducer';
import storageReducer from 'reducers/storageReducer';
import navReducer from 'reducers/navReducer';

//add your reducers here
const rootReducer = combineReducers({
  browser: responsiveStateReducer,
  app: appReducer,
  storage: storageReducer,
  nav: navReducer
});

export default rootReducer;

