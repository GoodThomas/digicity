import React from 'react';

import Img1 from './images/demo1.jpg';
import Img2 from './images/demo2.jpg';
import Img3 from './images/demo3.jpg';
import Img4 from './images/demo1.jpg';
import Slide from './components/Slide.js';

let imgData=[Img1,Img2,Img3,Img4];

class App extends React.Component {
  render () {
    return(
      <div>
        <Slide items={imgData} />
      </div>
    )
  }
}

export default App;
