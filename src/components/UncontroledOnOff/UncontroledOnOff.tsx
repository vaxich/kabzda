import { useState } from "react"


export type PropsUnControledOnOff = {
    onChange: (on: boolean) => void
}


export const UncontroledOnOff = (props: PropsUnControledOnOff) => {

    const [on, setOn] = useState(false)

    const styled = {

        display: "flex",
        padding: "5px",
        backgroundColor: "white"
    }

    const onStyle = {
        width: "90px",
        height: "60px",
        border: "5px solid black",
        display: "inline-block",
        padding: "5px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "90px",
        height: "60px",
        border: "5px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "5px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "60px",
        height: "60px",
        borderRadius: "50px",
        border: "5px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "5px",
        backgroundColor: on ? "green" : "red"
    }

    const onClicked = () => {
        setOn(true);
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false);
        props.onChange(false)
    }

    return (
        <div style={styled}>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>

        </div>
    )
}


