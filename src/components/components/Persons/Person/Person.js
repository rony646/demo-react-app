import React from 'react';
import './Person.css';
import '../../hoc/Auxiliary'
import styled from 'styled-components'
import Auxiliary from '../../hoc/Auxiliary';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    text-align: center;
    padding: 16px;

    @media (min-width: 500px): {
        width: 450px;
    }

`;

const person = props => {
    return(
        <Auxiliary>
            <StyledDiv>
                <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed}  value={props.name}/>
            </StyledDiv>
        </Auxiliary>
    )
}

export default person;