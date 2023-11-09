import { useState } from "react"

type UnControledAccordeonPropsType = {
  title: string
  //collapsed: boolean
}
type AccordeonTitlePropsType = {
  title: string
  onClick: () => void
}


function UnControledAccordion(props: UnControledAccordeonPropsType) {

  const [collapsed, setCollapsed] = useState(false)

  return (
    <div>
      <AccordionTitle title={props.title} onClick={() => { setCollapsed(!collapsed) } }/>
      {/* <button onClick={() => { setCollapsed(!collapsed) }}>TOGGLE</button> */}
      {collapsed === false && <AccordionBody />}  {/*если props.collapsed == false, то false == false И отрисовыавется компонента AccordionBody */}
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

export default UnControledAccordion;