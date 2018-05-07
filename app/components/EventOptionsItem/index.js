/**
*
* EventOptionsItem
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;


const Item = styled.div`
	font-family: 'Raleway', sans-serif;
	letter-spacing: 2px;
	background: ${props => props.background};
	padding-left: 15px;
	padding-right: 15px;
	padding-top: 25px;
	padding-bottom: 25px;
  width: 300px;
	color: #f0f0f0;
	display:flex;
	flex-direction:row;
	justify-content:space-between;
	border: 1px solid #f0f0f0;
  border-radius: 3px;
  margin-bottom: 2px;
  animation: 0.5s ${fadeInAnimation};
`;

const Section = styled.span`
	margin-left: 10x;
	margin-right: 10x;
`;

const Input = styled.input`
    background-color: transparent;
    width: ${props => props.time < 10 ? "12px" : "24px"};
`;

const InputBox = styled.div`
    border-bottom: 1px dotted white;
    &:focus {
        outline: none;
    };
    transition: all .2s ease-in-out;
    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    };
    &:active {
        opacity: 0.2;
    }
`;

const Button = styled.button`
    &:focus {
        outline: none;
    };
    transition: all .2s ease-in-out;
    &:hover {
        transform: scale(1.3);
        cursor: pointer;
    };
    &:active {
        opacity: 0.2;
    }
`;

const Label = styled.label`
    &:hover {
        cursor: pointer;
    };
`;

class EventOptionsItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props) {
  	super(props);
  	this.state = {
  		time: this.props.time,
  	}
  	this.handleChange = this.handleChange.bind(this);
  	this.handleFocus = this.handleFocus.bind(this);
  	this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(evt) {
  	let newTime = +evt.target.value;
  	if (!Number.isInteger(newTime) || newTime < 0 || newTime > 100) {
  		newTime = 5;
  	}
  	this.setState({time: newTime});
  }

  handleFocus(evt) {
  	evt.target.select();
  }

  handleBlur(evt) {
  	if (evt.target.value < 1) {
  		this.setState({
  			time: 5
  		});
  	}
  	if (evt.target.value > 60) {
  		this.setState({
  			time: 60
  		});
  	}
  }

  render() {
  	const { background, time, title, optionKey, handleAddScheduleItem } = this.props;
  	const handleOnClick = () => {
  		handleAddScheduleItem(this.state.time, title);
  	};
    return (
      <Item background={background}>
      	<InputBox> 
      		<Input type="text" 
            id={optionKey}
	      		onFocus={this.handleFocus} 
	      		value={this.state.time} 
	      		onChange={this.handleChange}
	      		onBlur={this.handleBlur}
	      		time={this.state.time}
	      	/> <Label htmlFor={optionKey}> min </Label>
	    </InputBox>
      	<span> {title} </span>
      	<span> <Button onClick={handleOnClick}>+</Button> </span>
      </Item>
    );
  }
}

EventOptionsItem.propTypes = {

};

export default EventOptionsItem;
