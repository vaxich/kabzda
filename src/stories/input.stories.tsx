import { ChangeEvent, useState } from "react"
import action from "../components/OnOff/OnOff.stories"


export default {
    title: 'input'
}

export const UncontroledInput = () => <input />

export const CcontroledInputWithTrackValue = () => {

    const [value, setValue] = useState("")

    const ChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }

    return (
        <>
            <input onChange={(event) => { ChangeValue(event) }} />{value}
        </>
    )
}

export const CcontroledInputWithFixedValue = () => <input value="incubator" />

export const ControledInput = () => {
    const [parentValue, setParentValue] = useState("")

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChangeInput} />
}

export const ControledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.checked)
    }

    return <input type="checkbox" checked={parentValue} onChange={onChangeInput} />
}

export const ControledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)

    const onChangeInput = (event: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(event.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChangeInput}>
        <option >none</option>
        <option value={"1"}>minsk</option>
        <option value={"2"}>moscow</option>
        <option value={"3"}>krasnodar</option>
    </select>
}