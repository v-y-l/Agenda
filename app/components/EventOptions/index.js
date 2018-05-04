/**
*
* EventOptions 
* TODO: The signature is very similar to Schedule and can probably be refactored into one component.
*/

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import EventOptionsItem from 'components/EventOptionsItem';

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

class EventOptions extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
  	const { eventOptions, handleAddScheduleItem } = this.props;
  	const options = eventOptions.map((option)=> {
  		return <EventOptionsItem 
  			key={option.key} 
  			title={option.title} 
  			time={option.time} 
	        handleAddScheduleItem={handleAddScheduleItem}
  			background={getBackground(option.title)} 
      	/> 
  	});

    return (
      <Container>
      	{ options }
      </Container>
    );
  }
}

EventOptions.propTypes = {

};

export default EventOptions;
