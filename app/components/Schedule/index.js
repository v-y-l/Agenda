/**
*
* Schedule
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import ScheduleItem from 'components/ScheduleItem';
 

class Schedule extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      	Schedule
      	<ScheduleItem />
      </div>
    );
  }
}

Schedule.propTypes = {

};

export default Schedule;
