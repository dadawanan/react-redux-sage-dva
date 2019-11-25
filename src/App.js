import React from 'react';
import HookRedux from './hooks'
import './App.css';
import ReduxSage from './redux'
import store from './redux/store/store'
import { Provider } from 'react-redux'
function App() {
  return (
    <div className="App">
      <HookRedux></HookRedux>
      <Provider store={store}>
        <ReduxSage></ReduxSage>
      </Provider>
    </div>
  );
}

export default App;
