import { useState } from "react"


export type PropsOnOff = {
    on: boolean
    onChange: (on: boolean) => void
}


export const OnOff = (props: PropsOnOff) => {

    //const [on, setOn] = useState(false)

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
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        width: "90px",
        height: "60px",
        border: "5px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "5px",
        backgroundColor: props.on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "60px",
        height: "60px",
        borderRadius: "50px",
        border: "5px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "5px",
        backgroundColor: props.on ? "green" : "red"
    }


    return (
        <div style={styled}>
            <div style={onStyle} onClick={() => { props.onChange(true) }}>On</div>
            <div style={offStyle} onClick={() => { props.onChange(false) }}>Off</div>
            <div style={indicatorStyle}></div>

        </div>
    )
}


