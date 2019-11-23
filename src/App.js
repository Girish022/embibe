import React from 'react';
import {Link, BrowserRouter, Switch,Route}   from 'react-router-dom'
import Student from './Student';
import Studentdetails from './Studentdetails'




class App extends React.Component {

  render() {
  return (
    <BrowserRouter>
    <div>
   
      <Link to='/student'> Student</Link>
      
      <Switch>
      <Route exact path='/student' component={Student}></Route>
      <Route path='/student/:id' component={Studentdetails}></Route>

      </Switch>
      
    </div>

    </BrowserRouter>
  );
  }
}

export default App;
