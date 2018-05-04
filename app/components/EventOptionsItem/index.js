/**
*
* EventOptionsItem
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.div`
	font-family: 'Raleway', sans-serif;
	letter-spacing: 2px;
	background: ${props => props.background};
	padding-left: 15px;
	padding-right: 15px;
	padding-top: 25px;
	padding-bottom: 25px;
	color: #f0f0f0;
	display:flex;
	flex-direction:row;
	justify-content:space-between;
	border: 1px solid #f0f0f0;
`;

const Section = styled.span`
	margin-left: 10x;
	margin-right: 10x;
`;

const Input = styled.input`
    background-color:transparent;
    width: ${props => props.time < 10 ? "12px" : "24px"};
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
  	const { background, time, title, handleAddScheduleItem } = this.props;
  	const handleOnClick = () => {
  		handleAddScheduleItem(this.state.time, title);
  	}
    return (
      <Item background={background}>
      	<span> 
      		<Input type="text" 
	      		onFocus={this.handleFocus} 
	      		value={this.state.time} 
	      		onChange={this.handleChange}
	      		onBlur={this.handleBlur}
	      		time={this.state.time}
	      	/> min 
	    </span>
      	<span> {title} </span>
      	<span> <button onClick={handleOnClick}>+</button> </span>
      </Item>
    );
  }
}

EventOptionsItem.propTypes = {

};

export default EventOptionsItem;
