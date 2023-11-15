
import {action} from '@storybook/addon-actions'
import  {UnControledAccordion}  from './UnControledAccordion';
import { useState } from 'react';



export default {
  title: "UnControledAccordion",
  component: UnControledAccordion
};

//const onChangeHandler = action("onChange")

export const ModeChanging = () => {
  return (
      <UnControledAccordion title={"collapsed accordion"} /> 
  )
}
