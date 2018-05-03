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
	background:  #72CCA7;
	padding-left: 10px;
	padding-right: 10px;
	padding-top: 25px;
	padding-bottom: 25px;
	color: #f0f0f0;
	text-align: center;
`;

const Text = styled.span`
	justify-content: center;
`;

class ScheduleItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Item>
      	ScheduleItem 
      </Item>
    );
  }
}

ScheduleItem.propTypes = {

};

export default ScheduleItem;
