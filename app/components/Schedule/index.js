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
  	const {schedule, handleDeleteScheduleItem} = this.props;
  	const items = schedule.map(datum => {
      const handleOnClick = () => {
        handleDeleteScheduleItem(datum.key);
      };
  		return <ScheduleItem 
  			key={datum.key} 
  			title={datum.title} 
  			time={datum.time} 
        handleOnClick={handleOnClick}
  			background={getBackground(datum.title)} 
  		/>
  	});
    return (
      <Container>
      	{items}
      </Container>
    );
  }
}

Schedule.propTypes = {

};

export default Schedule;
