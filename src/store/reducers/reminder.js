const initialState = {
  reminder: [],
};
const reminder = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        reminder: [...state.reminder, action.payload],
      };
    case "DEL":
      state.reminder = state.reminder.filter(e => e.id !== action.payload)
      return {
        ...state,
        reminder: [...state.reminder],
      };
      case "CLR":
      return {
        ...state,
        reminder: [],
      };
    default:
      return state;
  }
};
export default reminder;
// ,
