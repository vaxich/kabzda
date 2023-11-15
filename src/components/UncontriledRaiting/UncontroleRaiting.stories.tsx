
import {action} from '@storybook/addon-actions'
import  UncontroledRaiting  from './UncontroledRaiting';
import { useState } from 'react';

export type RaitingPropsType = {
  defaultValue?: RaitingPropsType
}

export default {
  title: "UncontroledRaiting",
  component: UncontroledRaiting
};

//const callBack = action("on or off clicked")

export const EmptyStars = () => <UncontroledRaiting defaultValue={0} />
export const Rating1 = () => <UncontroledRaiting defaultValue={1} />
export const Rating2 = () => <UncontroledRaiting defaultValue={2} />
export const Rating3 = () => <UncontroledRaiting defaultValue={3} />
export const Rating4 = () => <UncontroledRaiting defaultValue={4} />
export const Rating5 = () => <UncontroledRaiting defaultValue={5} />



