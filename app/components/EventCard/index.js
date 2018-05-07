/**
*
* EventCard
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Countdown from 'react-countdown-now';
import { Icon } from 'react-icons-kit';
import { cw, paus, play, thinRight, thinLeft } from 'react-icons-kit/entypo';

const CardContainer = styled.div`
	font-family: 'Raleway', sans-serif;
	letter-spacing: 2px;
	color: #f0f0f0;
	margin-top: 45px;
	display:flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	height: 800px;
`;

const Card = styled.span`
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

const Section = styled.span`
	font-size: ${props=>props.size}px;
	text-align: center;
	color: white;
	display: flex;
	justify-content: space-between;

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
	      <CardContainer>
  		      <span style={{ color: getBackground(title) }}>
			    <Icon size={42} icon={thinLeft} />
			  </span>
		      <Card backgroundColor={getBackground(title)} >
		      	<Section size={64}> { title } </Section>
		      	<Section size={24}> { description } </Section>
		      	<Countdown 
		      		date={Date.now() + time*60*1000} 
		      		renderer={renderer}
		      		onComplete={nextEvent}
		      	/>
		      	<Section>
			      	<Icon icon={paus} />
		      		<Icon icon={play} />
			      	<Icon icon={cw} />
			    </Section>
		      </Card>
		      <span style={{ color: getBackground(title) }}>
			    <Icon size={42} icon={thinRight} />
			  </span>
		  </CardContainer>
	    );
  	}
  }
}

EventCard.propTypes = {

};

export default EventCard;
