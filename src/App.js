import React from 'react';
import Header from './common/header';
import { IndexStyle } from './style';
import { IconfontStyle } from './static/iconfont/iconfont'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <IndexStyle />
      <IconfontStyle />
      <Header />
    </Provider>
  );
}

export default App;
