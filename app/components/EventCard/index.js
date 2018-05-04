/**
*
* EventCard
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';


class EventCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
  	const { isComplete, time, title } = this.props;
    return (
      <div>
      	EventCard
      	{ time }
      	{ title }
      </div>
    );
  }
}

EventCard.propTypes = {

};

export default EventCard;
