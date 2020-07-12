import React , {Component} from 'react';
import Contacts from './components/contacts'
import logo from './logo.svg';
import './App.css';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends Component{
  render(){
    return(
      <Contacts contacts={this.state.contacts}/>
    )
  }

  state = {
    contacts: []
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
}

export default App;
