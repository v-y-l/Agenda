/**
*
* ScheduleItem
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.div`
	padding-left: 10px;
	padding-right: 10px;
	background: blue;
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
