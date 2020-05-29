import React, {Component} from 'react';
import Radium from 'radium';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id:'qsda1', name: 'Rony', age: 20},
      { id:'qsda2', name: 'Jhon', age: 43},
      { id:'qsda3', name: 'Jordan', age: 15}
    ],
    showPersons: false
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

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(( (person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            changed={(e) => this.nameChangedHandler(e, person.id)}
            key={person.id} />
          }))}
          
        </div>
      )

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red')
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold')
    }
    return(
      <div className="App">
        <h1>Hello, world!</h1>
        <p className={classes.join(' ')}>WORKING!!</p>
        <button 
          onClick={this.togglePersonsHandler}
        
          style={style}>
          Show / Hide Persons
        </button>
        {persons}
      </div>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hello, react!"));
  }
}

// const App = props => {

//   const [ personsState, setPersonssate] = useState({
//           persons: [
//             { name: 'Rony', age: 20},
//             { name: 'Jhon', age: 43},
//             { name: 'Jordan', age: 15}
//           ]});

//     const switchNameHandler = () => {
//           setPersonssate({
//             persons: [
//               { name: 'Rony Silva', age: 20},
//               { name: 'Jhon', age: 43},
//               { name: 'Jordan', age: 55}
//             ]
//           })
//         }


//   return(
//         <div className="App">
//           <h1>Hello, world!</h1>
//           <p>This is really working!</p>
//           <button onClick={switchNameHandler}>Swtich Name</button>
//           <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//           <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Soccer</Person>
//           <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//         </div>
//         )
// }



export default Radium(App);
