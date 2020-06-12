import React, {Component} from 'react';
import styled from 'styled-components'
import './App.css';
import Persons from '../components/components/Persons/Persons'
import Cockpit from '../components/components/Cockpit/Cockpit'
import withClass from '../components/components/hoc/withClass'
import Auxiliary from '../components/components/hoc/Auxiliary'
import AuthContext from '../context/auth-context'

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green' };
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;


  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen' };
    color: black
  }
`

class App extends Component {
  constructor(props) {
    super(props);
    // console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id:'qsda1', name: 'Rony', age: 20},
      { id:'qsda2', name: 'Jhon', age: 43},
      { id:'qsda3', name: 'Jordan', age: 15}
    ],
    showPersons: false,
    counter: 0,
    auth: false
  }

  static getArrivedStateFromProps(props, state) {
      console.log('STATE:', props)
      return state;
  }

  componentWillMount() {
    console.log('Component will mount');
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  shouldComponentUpdate() {
    return true;
  }


  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = e.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {persons: persons, counter: prevState.counter + 1} // Right way to set state
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  loginHandler = () => {
    this.setState({auth: true});
  }



  render() {

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticaded={this.state.auth}
          />
        </div>
      )
    }
    
    const classes = [];
    if(this.state.persons <= 2) {
      classes.push('red')
    }
    if(this.state.persons <= 1) {
      classes.push('bold')
    }
    
    return(
      <Auxiliary>
        <AuthContext.Provider value={{
          auth: this.state.auth,
          login: this.loginHandler
        }}>
          <Cockpit 
          title={this.props.appTitle}
          state={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          />
          {persons}
        </AuthContext.Provider>
      </Auxiliary>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hello, react!"));
  }
}

export default withClass(App, "App");
