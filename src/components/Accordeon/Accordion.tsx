
type AccordeonPropsType = {
  title: string
  collapsed: boolean
  onChange: () => void
}
type AccordeonTitlePropsType = {
  title: string
  onChange: () => void
}


function Accordion(props: AccordeonPropsType) {

  return (
    <div>
      <AccordionTitle 
      title={props.title} 
      onChange = {props.onChange}
      />

      { props.collapsed === false && <AccordionBody />}  {/*если props.collapsed == false, то false == false И отрисовыавется компонента AccordionBody */}
      {/* { !props.collapsed  && <AccordionBody />} // !props.collapsed если в пропс false - отрисовать компоненту */}
    </div>
  )

}

function AccordionTitle(props: AccordeonTitlePropsType) {
  return (
    <div>
      <h3 onClick={props.onChange}>---{props.title}---</h3>
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

export default Accordion;