type ActionType = {
  type: string
}

export const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED";

export type StateType = {
  collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case TOGGLE_CONSTANT :
      //const stateCopy = {...state}
      //stateCopy.collapsed = !state.collapsed;
      return {...state, 
        collapsed: !state.collapsed};
    default:
      throw new Error("Bad action type")  
  }
}