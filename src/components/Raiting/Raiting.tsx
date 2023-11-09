import { RaitingValueType } from "../../App"


type RaitingPropsType = {
  value: RaitingValueType
  onClick: (value: RaitingValueType) => void
}

function Rating(props: RaitingPropsType) {

  return (
    <div>
      <Star selected={props.value > 0} onClick = {props.onClick} value = {1}/>
      <Star selected={props.value > 1} onClick = {props.onClick} value = {2}/>
      <Star selected={props.value > 2} onClick = {props.onClick} value = {3}/>
      <Star selected={props.value > 3} onClick = {props.onClick} value = {4}/>
      <Star selected={props.value > 4} onClick = {props.onClick} value = {5}/>

    </div>
  )


}

type StarPropsType = {
  selected: boolean
  onClick: (value: RaitingValueType) => void
  value: RaitingValueType
}
function Star(props: StarPropsType) {

  return <span onClick={ () => props.onClick(props.value)}>{props.selected ? <b>Star </b> : "Star "}</span>

}

export default Rating;