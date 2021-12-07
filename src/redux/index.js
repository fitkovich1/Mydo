import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers";
import { logInUserWatcher } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(logInUserWatcher);

export default store;
