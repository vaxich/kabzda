import { useState } from 'react'
import styles from './Select.module.css'

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

    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

    const selectedItem = props.items.find(i => i.value == props.value)
    const HoveredItem = props.items.find(i => i.value == hoveredElementValue)

    const toggleItems = () => setActive(!active)
    const itemClicked = (value:number) => {
        props.onChange(value);
        toggleItems();
    }

    return (
        <div className={styles.select}>
            
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active &&
                <div className={styles.items}>
                    {props.items.map(i => <div
                    onMouseEnter={ () => {setHoveredElementValue(i.value)}}
                    className={styles.item + " " + (HoveredItem === i ? styles.selected : "")}
                    key={i.value}
                    onClick={ () => {itemClicked(i.value)}}
                    >{i.title}  </div>)}
                </div>
            }

        </div>
    )
}