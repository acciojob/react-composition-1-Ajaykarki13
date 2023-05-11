
import React from "react";
import './../styles/App.css';
import Tabs from './Tabs'

let tabs = [{title: 'Tabs 1', content: 'Tabs 1'}, {title: 'Tabs 2', content: 'Tabs 2'}, {title: 'Tabs 3', content: 'Tabs 3'}]

const App = () => {
  return (
    <div>
      <Tabs tabs={tabs}/>
    </div>
  )
}

export default App

