import React from 'react';
import './App.css';
import RainbowList from "./RainbowList";
import * as ListItem from './ListItem'

const App = () => (
  <RainbowList
    numRows={500}
    rowHeight={ListItem.rowHeight}
    renderRowAtIndex={ListItem.renderRowAtIndex}
  />
)



export default App;
