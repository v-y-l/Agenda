/**
*
* EventCard
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Countdown from 'react-countdown-now';

const Card = styled.div`
	font-family: 'Raleway', sans-serif;
	letter-spacing: 2px;
	color: #f0f0f0;
	margin-top: 45px;
	display:flex;
	flex-direction:column;
	justify-content: space-evenly;
	align-items: center;
	background: ${props=>props.backgroundColor};
	width: 50%;
	height: 500px;
	border-radius: 3px;
`;

const Section = styled.div`
	font-size: ${props=>props.size}px;
	text-align: center;
	color: white;
`;

const backgroundColor = {
	judge: "#10A296",
	present: "#FA987D",
	leavefeedback: "rgb(234,96,99)",
	default: "#10A296", //TODO: add celebration animation
};

const getBackground = (title) => {
	return backgroundColor[title.replace(/\s+/g,'').toLowerCase()];
}

const renderer = ({ hours, minutes, seconds, completed }) => {
    // Render a countdown
    return <Section size={76}> {minutes}:{seconds} </Section>
};

class EventCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
  	const { isLast, time, title, nextEvent, description } = this.props;
  	if (isLast) {
	    return (
	      <Card backgroundColor={getBackground("default")} >
	      	<Section size={64}> { title } </Section>
	      </Card>
	    );
  	} else {
	    return (
	      <Card backgroundColor={getBackground(title)} >
	      	<Section size={64}> { title } </Section>
	      	<div> { description } </div>
	      	<Countdown 
	      		date={Date.now() + time*60*1000} 
	      		renderer={renderer}
	      		onComplete={nextEvent}
	      	/>
	      </Card>
	    );
  	}
  }
}

EventCard.propTypes = {

};

export default EventCard;
