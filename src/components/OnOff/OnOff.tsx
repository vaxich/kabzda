import { useState } from "react"





export const OnOff = () => {

    const [on, setOn] = useState(false)

    const styled = {

        display: "flex",
        padding: "5px",
        backgroundColor: on ? "green" : "white"
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


    return (
        <div style={styled}>
            <div style={onStyle} onClick={() => { setOn(true) }}>On</div>
            <div style={offStyle} onClick={() => { setOn(false) }}>Off</div>
            <div style={indicatorStyle}></div>

        </div>
    )
}


