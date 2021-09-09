import React from 'react';
import Users from './user/Users'
import  './App.css';

const App:React.FunctionComponent = () =>  {
  return (
    <div className="App">
      <div>
      <div><h1>User Application </h1></div>
      <Users/>
      </div>
    </div>
  );
}

export default App;
