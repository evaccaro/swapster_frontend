export default function events_reducer(
  state = { name: "", user_events: [] },
  action
) {
  switch (action.type) {
    case "NEW_EVENT":
      return {
        ...state,
        name: action.user.name,
        user_events: action.user.events
      };
    case "LOGOUT":
      return {
        ...state,
        current_user: {}
      };
    case "NOTUSER":
      return {
        ...state,
        current_user: {}
      };
    // case "ADD_USER":
    //   return {
    //     ...state,
    //     user_events: [...state.user_events, action.new_event]
    //   };
    default:
      return state;
  }
}

