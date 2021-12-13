import { configureStore } from '@reduxjs/toolkit';
import getMiddleware from "./middleware/getMiddleware";
import rootReducer from '~store/reducer';

const configureAppStore = (history) => {
  const reducer = rootReducer(history);
  const middleware = getMiddleware(history);
  return configureStore({ reducer, middleware }); //configures Redux DevTools automatically
};

export default configureAppStore;