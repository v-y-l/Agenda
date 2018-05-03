/**
*
* Schedule
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScheduleItem from 'components/ScheduleItem';
 
const Container = styled.div`
	padding-top: 10px;
	width: 70%;
`;

class Schedule extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
      	<ScheduleItem title={"Judge"} time={3} background={"#72CCA7"} />
      	<ScheduleItem title={"Judge"} time={3} background={"#72CCA7"} />
      	<ScheduleItem title={"Judge"} time={3} background={"#10A296"} />
      	<ScheduleItem title={"Judge"} time={3} background={"#FA987D"} />
      	<ScheduleItem title={"Judge"} time={3} background={"rgb(234,96,99)"} />
      </Container>
    );
  }
}

Schedule.propTypes = {

};

export default Schedule;
