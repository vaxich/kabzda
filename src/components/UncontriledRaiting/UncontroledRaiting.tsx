import { useState } from "react"
import { RaitingValueType } from "../../App"


type RaitingPropsType = {
  defaultValue?: RaitingValueType
  //value: 0 | 1 | 2 | 3 | 4 | 5
}

function UncontroledRating(props: RaitingPropsType) {

  const [value, setValue] = useState(4)

  return (
    <div>
      <Star selected={value > 0} setValue={ () => {setValue(1)}} />
      <Star selected={value > 1} setValue={ () => {setValue(2)}} />
      <Star selected={value > 2} setValue={ () => {setValue(3)}} />
      <Star selected={value > 3} setValue={ () => {setValue(4)}} />
      <Star selected={value > 4} setValue={ () => {setValue(5)}} />
    </div>
  )

}

type StarPropsType = {
  selected: boolean
  
  setValue: (value:0 | 1 | 2 | 3 | 4 | 5) => void
}
function Star(props: StarPropsType) {

  //return props.selected ? <span> <b>Star</b> </span> : <span> Star </span>
return <span onClick={ () => props.setValue}> {props.selected ? <b>Star </b> : "Star "}</span>

}

export default UncontroledRating;