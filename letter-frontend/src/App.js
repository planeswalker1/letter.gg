import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Register from './container/Register/Register';
import Login from './container/Login/Login';

import Build from './container/Build/Build';
import DisplayBuild from './container/DisplayBuild/DisplayBuild';
import Home from './container/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>
          Letter.gg
        </h1>
      </div>
      <Link to='/'>home</Link>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
      <Link to='/build'>Build</Link>
      <Route path='/' exact component={Home} />
      <Route path='/register' exact component={Register} />
      <Route path='/login' exact component={Login} />
      <Route path='/build/:id' exact component={DisplayBuild} />
      <Route path='/build' exact component={Build} />
    </BrowserRouter>
  );
}

export default App;
