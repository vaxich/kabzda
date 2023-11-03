import React from 'react';
//import App from './App.css'
import Accordion from './components/Accordeon/Accordion';
import Rating from './components/Raiting/Raiting';
import { OnOff } from './components/OnOff/OnOff';
import UnControledAccordion from './components/UnControledAccordeon/UnControledAccordion';
import UncontroledRating from './components/UncontriledRaiting/UncontroledRaiting';


function App() {

  return (
    <div className = {"App"}>
      {/* <PageTitle title={"this ia App"} />
      <Rating value={3} />
      <Rating value={5} /> */}
      {/* <Accordion title= {"меню"} collapsed = {true}/>
      <Accordion title= {"Users"} collapsed = {false}/> */}

      
      {/* <Rating value={5} /> */}

      {/* <OnOff/> */}

      <UnControledAccordion title='Menu' />
      <UncontroledRating />
      
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
