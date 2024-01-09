import { action } from '@storybook/addon-actions';
import { Select } from "./Select";
import { useState } from 'react';


export default {
    title: "Select",
    component: Select
}

export const WithValue = () => {

    const [value, setValue] = useState(2);

    return <>
    <Select
     onChange={setValue} 
     value={value}
     items={[
        {value: 1, title:'minsk'},
        {value: 2, title:'moscow'},
        {value: 3, title:'kras'},
     ]}
     />
    </>
}
