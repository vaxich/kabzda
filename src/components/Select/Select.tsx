

export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}
type ItemType = {
    title: string
    value: number
}

export const Select = (props: SelectPropsType) => {
    return (
        <div>
            <div>{ }</div>
            {props.items.map( i => <div>{i.title}  </div>)}
        </div>
    )
}