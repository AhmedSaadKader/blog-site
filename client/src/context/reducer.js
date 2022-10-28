import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions";

const reducer = (state, action) => {
  //   throw new Error(`no such action: ${action.type}`);
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
};

export default reducer;
