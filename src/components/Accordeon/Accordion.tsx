
type AccordeonPropsType = {
  title: string
  collapsed: boolean
  onChange: () => void
  items: ItemType[]
  onClick: (value:any) => void
}
type AccordeonBodyPropsType = {
  onClick: (value:any) => void
  items: ItemType[]
}
type AccordeonTitlePropsType = {
  title: string
  onChange: () => void
}

type ItemType = {
  title: string
  value: number
}

function Accordion(props: AccordeonPropsType) {

  return (
    <div>
      <AccordionTitle 
      title={props.title} 
      onChange = {props.onChange}
      />

      { props.collapsed === false && <AccordionBody items={props.items}  onClick={props.onClick}/>}  {/*если props.collapsed == false, то false == false И отрисовыавется компонента AccordionBody */}
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

function AccordionBody(props: AccordeonBodyPropsType) {
  return (
    <div>


      <ul>
        { props.items.map( (item, index) =>   <li onClick={ () => { props.onClick(item.value)}} key={index}>{item.title}</li>    )}
        
      </ul>
    </div>
  )
}

export default Accordion;