import React from 'react';
import NavTool from './components/NavTool';
import Home from './components/Home';
import './App.css';
import Carditem from './components/Carditem';
import '../src/components/WelcomeSection.css';

class App extends React.Component{
  render(){
    return (
      <div className="App">
          <NavTool />
          <Home />
        <header className="App-header">
          <div className="mt-2">
            <Carditem />
          </div>
        </header>
      </div>
    );
  };
}

export default App;
