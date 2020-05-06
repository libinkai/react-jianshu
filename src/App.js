import React from 'react';
import Header from './common/header';
import { IndexStyle } from './style';
import { IconfontStyle } from './static/iconfont/iconfont'
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Home from './pages/home';
import Login from './pages/login';
import Write from './pages/write';
import Detail from './pages/detail/loadable';

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* 需要包裹全部元素哟 */}
        <BrowserRouter>
          <IndexStyle />
          <IconfontStyle />
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/write' exact component={Write}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
