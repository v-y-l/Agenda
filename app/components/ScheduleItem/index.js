/**
*
* ScheduleItem
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

class ScheduleItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
  	const { background, time, title, handleOnClick } = this.props;
    return (
      <Item background={background}>
      	<span> {time} min </span>
      	<span> {title} </span>
      	<span> <button onClick={handleOnClick}>x</button> </span>
      </Item>
    );
  }
}

ScheduleItem.propTypes = {

};

export default ScheduleItem;
