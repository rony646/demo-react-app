import React, {useEffect, useRef, useContext} from 'react'
import styled from 'styled-components'
import AuthContext from '../../../context/auth-context'
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
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext)

    useEffect(() => {
      console.log('[Cockpit.js] useEffect')
      toggleBtnRef.current.click(); // Button referenced clicked!
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
            <StyledButton ref={toggleBtnRef} alt={props.state} onClick={props.clicked}>
            Show / Hide Persons
            </StyledButton>
            <StyledButton onClick={authContext.login} >Log in</StyledButton>
        </div>
    )
};

export default Cockpit;