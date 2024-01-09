import { StateType, TOGGLE_CONSTANT, reducer } from "./reducer"

test ("collapsed should bve true" , () => {
//data
const state: StateType = {
  collapsed: false
}
//action
 const newState = reducer(state, {type: TOGGLE_CONSTANT})
//expect
expect(newState.collapsed).tobe(true)


})

test ("collapsed should bve false" , () => {
  //data
  const state: StateType = {
    collapsed: true
  }
  //action
   const newState = reducer(state, {type: TOGGLE_CONSTANT})
  //expect
  expect(newState.collapsed).tobe(false)
  
  
  })