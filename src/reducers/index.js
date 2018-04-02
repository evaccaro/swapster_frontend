import { combineReducers } from "redux";

import users_reducer from "./users_reducer";
// import events_reducer from "./events_reducer";

const rootReducer = combineReducers({
  user: users_reducer
  // user_events: events_reducer
});

export default rootReducer;

