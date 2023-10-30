import React from 'react';

import Accordion from './components/Accordeon/Accordion';
import Rating from './components/Raiting/Raiting';
import { OnOff } from './components/OnOff/OnOff';


function App() {

  return (
    <div >
      {/* <PageTitle title={"this ia App"} />
      <Rating value={3} />
      <Rating value={5} /> */}
      <Accordion title= {"меню"} collapsed = {true}/>
      <Accordion title= {"Users"} collapsed = {false}/>

      
      <Rating value={5} />

      <OnOff on = {true}/>
      
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
