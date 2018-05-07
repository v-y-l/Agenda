/**
*
* ScheduleItem
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
	color: #f0f0f0;
	display:flex;
	flex-direction:row;
	justify-content:space-between;
	border: 1px solid #f0f0f0;
	border-radius: 3px;
	margin-bottom: 2px;
    animation: 0.5s ${fadeInAnimation};
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
      	<span> <Button onClick={handleOnClick}>x</Button> </span>
      </Item>
    );
  }
}

ScheduleItem.propTypes = {

};

export default ScheduleItem;
