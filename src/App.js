import React from 'react';
import Header from './common/header/header';
import { IndexStyle } from './style';
import {IconfontStyle} from './static/iconfont/iconfont'
function App() {
  return (
    <div>
      <IndexStyle />
      <IconfontStyle/>
      <Header/>
    </div>
  );
}

export default App;
