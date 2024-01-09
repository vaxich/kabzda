import { useReducer, useState } from "react"
import { TOGGLE_CONSTANT, reduser } from "./reducer"

type UnControledAccordeonPropsType = {
  title: string
  //collapsed: boolean
}
type AccordeonTitlePropsType = {
  title: string
  onClick: () => void
}

// type ActionType = {
//   type: string
// }

// const reduser = (state: boolean, action: ActionType) => {
//   if (action.type === "TOGGLE-COLLAPSED") {
// return !state
//   }
//   return state;
// }


export function UnControledAccordion(props: UnControledAccordeonPropsType) {

  //const [collapsed, setCollapsed] = useState(false)
  const [state, dispatch] = useReducer(reduser, {collapsed: false})

  return (
    <div>
      {/* <AccordionTitle title={props.title} onClick={() => { setCollapsed(!collapsed) } }/> */}
      <AccordionTitle title={props.title} onClick={() => { dispatch({type: TOGGLE_CONSTANT})  } }/>
      {/* <button onClick={() => { setCollapsed(!collapsed) }}>TOGGLE</button> */}
      {!state.collapsed === false && <AccordionBody />}  {/*если props.collapsed == false, то false == false И отрисовыавется компонента AccordionBody */}
      {/* { !props.collapsed  && <AccordionBody />} // !props.collapsed если в пропс false - отрисовать компоненту */}
    </div>
  )

}

function AccordionTitle(props: AccordeonTitlePropsType) {
  return (
    <div>
      <h3 onClick={ () => {props.onClick()}}>---{props.title}---</h3>
    </div>
  )
}

function AccordionBody() {
  return (
    <div>


      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

