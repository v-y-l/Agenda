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

const backgroundColor = {
	judge: "#10A296",
	present: "#FA987D",
	leavefeedback: "rgb(234,96,99)",
	//run: "#72CCA7"
};

const getBackground = (title) => {
	return backgroundColor[title.replace(/\s+/g,'').toLowerCase()];
}

class Schedule extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {


    return (
      <Container>
      	<ScheduleItem title={"Judge"} time={3} background={getBackground("Judge")} />
      	<ScheduleItem title={"Judge"} time={3} background={getBackground("Judge")} />
      	<ScheduleItem title={"Judge"} time={3} background={getBackground("Judge")} />
      	<ScheduleItem title={"Present"} time={3} background={getBackground("Present")} />
      	<ScheduleItem title={"Leave Feedback"} time={3} background={getBackground("Leave Feedback")} />
      </Container>
    );
  }
}

Schedule.propTypes = {

};

export default Schedule;
