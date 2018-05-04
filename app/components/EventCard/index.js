/**
*
* EventCard
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

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
	color: white;
`;

const backgroundColor = {
	judge: "#10A296",
	present: "#FA987D",
	leavefeedback: "rgb(234,96,99)",
};

const getBackground = (title) => {
	return backgroundColor[title.replace(/\s+/g,'').toLowerCase()];
}

class EventCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
  	const { isComplete, time, title } = this.props;
    return (
      <Card backgroundColor={getBackground(title)} >
      	<Section size={42}> { title } </Section>
      	<Section size={64}> { time } </Section>
      </Card>
    );
  }
}

EventCard.propTypes = {

};

export default EventCard;
