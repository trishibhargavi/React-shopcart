import { createStore ,applyMiddleware} from "redux"
import rootReducers from "./reducer";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

const middlewares=[logger];

export const store=createStore(rootReducers, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
export default {store,persistor};

