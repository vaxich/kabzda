
import { action } from '@storybook/addon-actions'
import Accordion from './Accordion';
import { useState } from 'react';



export default {
  component: Accordion
};

let users = [
  {
    title: "Pavel",
    value: 1
  },
  {
    title: "Ivan",
    value: 2
  },
  {
    title: "Dmitriy",
    value: 3
  },
]



const onChangeHandler = action("onChange")

export const CollapsedAccordion = () => {
  return (
    <Accordion title={"collapsed accordion"} collapsed={true} onChange={onChangeHandler} items={users} onClick={onChangeHandler} />
  )
}
export const OpendAccordion = () => {
  return (
    <Accordion title={"open accordion"} collapsed={false} onChange={() => { }} items={users} onClick={onChangeHandler} />
  )
}

export const AccordionDemo = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Accordion title={"accordion"} collapsed={collapsed} onChange={() => { setCollapsed(!collapsed) }} items={users} onClick={onChangeHandler} />
  )
}