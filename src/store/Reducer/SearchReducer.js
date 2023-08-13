const INTIAL_STATE = {
  loader :""
}
  export default function changeSearch(state = INTIAL_STATE, action) {
    switch (action.type) {
      case "Search":
        return { ...state, loader: action.payload };
  
      default:
        return state;
    }
  }
  