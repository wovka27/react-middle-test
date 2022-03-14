import axiosMiddleware from 'redux-axios-middleware';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import client from '../services/api';
import rootReducer from './reducers';

const middlewareConfig: any = {
  interceptors: {
    request: [
      function ({getState}: {getState: () => RootState}, req: any) {
        req.headers['content-type'] = 'application/json';
        return req;
      },
    ],
    response: [
      {
        error: function ({dispatch}: any, error: any) {

          return Promise.reject(error);
        },
      },
    ],
  },
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, axiosMiddleware(client, middlewareConfig), logger),
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
