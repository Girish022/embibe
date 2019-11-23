import React from 'react';
import {Link, BrowserRouter, Switch,Route}   from 'react-router-dom'
import Student from './Student';




class App extends React.Component {

  render() {
  return (
    <BrowserRouter>
    <div>
      <h2> Hello React</h2>
      <Link to='/student'> Student</Link>
      <Switch>
      <Route path='/student' component={Student}></Route>
      </Switch>
      
    </div>

    </BrowserRouter>
  );
  }
}

export default App;