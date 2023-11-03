import { useState } from "react"

type AccordeonPropsType = {
  title: string
  //collapsed: boolean
}
type AccordeonTitlePropsType = {
  title: string

}


function UnControledAccordion(props: AccordeonPropsType) {

  const [collapsed , setCollapsed]= useState(false) 

  return (
    <div>
      <AccordionTitle title={props.title} /><button onClick={ () => {setCollapsed(!collapsed)}}>TOGGLE</button>
      { collapsed === false && <AccordionBody />}  {/*если props.collapsed == false, то false == false И отрисовыавется компонента AccordionBody */}
      {/* { !props.collapsed  && <AccordionBody />} // !props.collapsed если в пропс false - отрисовать компоненту */}
    </div>
  )

}

function AccordionTitle(props: AccordeonTitlePropsType) {
  return (
    <div>
      <h3>---{props.title}---</h3>
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