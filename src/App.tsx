import React, { useState } from 'react';
//import App from './App.css'
import Accordion from './components/Accordeon/Accordion';
import Rating from './components/Raiting/Raiting';
import { OnOff } from './components/OnOff/OnOff';

import UncontroledRating from './components/UncontriledRaiting/UncontroledRaiting';
import { UncontroledOnOff } from './components/UncontroledOnOff/UncontroledOnOff';
import { UnControledAccordion } from './components/UnControledAccordeon/UnControledAccordion';


export type RaitingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {

  let [ratingValue, setRatingValue] = useState<RaitingValueType>(0);
  let [accordioCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [switchOn, setSwitchOn] = useState<boolean>(false)

  return (
    <div className={"App"}>
      {/* <PageTitle title={"this ia App"} />
      <Rating value={3} />
      <Rating value={5} /> */}
      {/* <Accordion title={"меню"} collapsed={accordioCollapsed} onChange={() => { setAccordionCollapsed(!accordioCollapsed) }} /> */}
      {/* <Accordion title= {"Users"} collapsed = {false}/> */}


      {/* <Rating value={ratingValue} onClick = {setRatingValue}/> */}

      {/* <OnOff on = {switchOn} onChange = { setSwitchOn}/> */}
      <UncontroledOnOff onChange = {setSwitchOn}/> {switchOn.toString()}
      <UnControledAccordion title='Menu' />
      {/* <UncontroledRating /> */}

    </div>
  );
}






type PageTitlePropsType = {
  title: string
}


function PageTitle(props: PageTitlePropsType) {
  return (
    <div>
      <h1>{props.title}</h1>

    </div>

  )
}

export default App;
