
type OnOffPropsType = {
    on: boolean
}

export const OnOff = (props: OnOffPropsType) => {

    let styleGreen = {
        "backgroundColor": "green"
    }
    let styleRed = {
        "backgroundColor": "red"
    }

    if (props.on === true) {
        return (
            <div>
                <button style={styleGreen}>on</button>
                <button >off</button>
                <input style={styleGreen} type="color" />
            </div>
        )
    } else {
        return (
            <div>
                
                <button >on</button>
                <button style={styleRed}>off</button>
                <input style={styleRed} type="color" />
            </div>
        )
    }


}