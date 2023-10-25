
type AccordeonPropsType = {
  title : string
  collapsed : boolean
}
type AccordeonTitlePropsType = {
  title : string
  
}


function Accordion(props : AccordeonPropsType) {

if(props.collapsed === true) {
  return (
    <div>
<AccordionTitle title={props.title}  />
    </div>
    
  )
}

  return (
    <div>

      <AccordionTitle title ={props.title} />
      <AccordionBody />
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

export default Accordion;