
import {action} from '@storybook/addon-actions'
import  {UncontroledOnOff}  from './UncontroledOnOff';
import { useState } from 'react';



export default {
  title: "UncontroledOnOff",
  component: UncontroledOnOff
};

const callBack = action("on or off clicked")

export const OnMode = () => <UncontroledOnOff onChange={callBack}/>
export const OffMode = () => <UncontroledOnOff onChange={callBack}/>

export const DefaultInputValue = () => <input defaultValue ={"yo"} />


