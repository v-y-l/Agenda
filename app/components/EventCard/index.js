/**
*
* EventCard
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
	margin-top: 45px;
	display:flex;
	flex-direction:column;
	justify-content: space-around;
	align-items: center;
	background: ${props=>props.backgroundColor};
	width: 50%;
	height: 500px;
	border-radius: 3px;
`;

const Section = styled.div`
	color: green;
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

class EventCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
  	const { isComplete, time, title } = this.props;
    return (
      <Card backgroundColor={getBackground(title)} >
      	<Section> { title } </Section>
      	<Section> { time } </Section>
      </Card>
    );
  }
}

EventCard.propTypes = {

};

export default EventCard;
