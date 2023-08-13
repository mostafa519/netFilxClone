const INTIAL_STATE =false
  export default function changeRoute(state = INTIAL_STATE, action) {
    switch (action.type) {
      case "Private_Routing":
        return [ ...state,  action.payload ];
  
      default:
        return state;
    }
  }
  