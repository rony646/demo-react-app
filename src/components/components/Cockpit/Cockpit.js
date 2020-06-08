import React, {useEffect} from 'react'
import styled from 'styled-components'
import './Cockpit.css'

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


const Cockpit = (props) => {

    useEffect(() => {
      console.log('[Cockpit.js] useEffect')
      setTimeout(() => {
        alert('Saved to the cloud!');
      }, 1000)
    }, []);

    const classes = [];
    if(props.persons <= 2) {
      classes.push('red')
    }
    if(props.persons <= 1) {
      classes.push('bold')
    }


    return(
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>WORKING!!</p>
            <StyledButton alt={props.state} onClick={props.clicked}>
            Show / Hide Persons
            </StyledButton>
        </div>
    )
};

export default Cockpit;