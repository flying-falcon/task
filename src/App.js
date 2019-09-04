import React from 'react';
import logo from './logo.svg';

import useWindowDimensions from './useWindowDimensions';

import Desktop from './Desktop';
import Mobile from './Mobile';

function App() {
  var { height, width } = useWindowDimensions();
  console.log(width)
  return (
    <div>
    { width > 855 ?  <Desktop/> : <Mobile/>

  }</div>
  );
}

export default App;
