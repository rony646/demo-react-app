import React from 'react'
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


const cockpit = (props) => {
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
            {console.log(props.persons)}
            </StyledButton>
        </div>
    )
};

export default cockpit;