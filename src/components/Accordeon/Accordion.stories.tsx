
import {action} from '@storybook/addon-actions'
import  Accordion  from './Accordion';
import { useState } from 'react';



export default {
  component: Accordion
};



const onChangeHandler = action("onChange")

export const CollapsedAccordion = () => {
  return (
      <Accordion title={"collapsed accordion"} collapsed={true} onChange={onChangeHandler} /> 
  )
}
export const OpendAccordion = () => {
  return (
    <Accordion title={"open accordion"} collapsed={false} onChange={() => {  }} /> 
  )
}

export const AccordionDemo = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Accordion title={"accordion"} collapsed={collapsed} onChange={() => { setCollapsed(!collapsed) }} /> 
  )
}