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
    background: ${props=> props.backgroundColor};
    width: 50%;
    height: 500px;
    border-radius: 3px;
`;

const Section = styled.span`
    font-size: ${props=>props.size}px;
    text-align: center;
    color: white;
    display: flex;
    flex-direction:row;
    justify-content: space-evenly;
    width:100%;
`;

const Button = styled.button`
    color: ${props => props.color ? props.color : "white"};
    &:focus {
        outline: none;
    };
    transition: all .2s ease-in-out;
    &:hover {
        transform: scale(1.3);
    };
    &:active {
        opacity: 0.5;
    }
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

const padNumber = (number) => {
    if (number < 10) {
        return "0"+number;
    } else {
        return number;
    }
}

const renderer = ({ hours, minutes, seconds, completed }) => {
    // Render a countdown
    return <Section size={76}> {minutes}:{seconds} </Section>
};

class EventCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  static getDerivedStateFromProps(nextProps, prevState) {
    const { time } = nextProps;
    return {
        isPaused: false,
        time: time*60*1000, //in minutes
    }
  }

  constructor(props) {
    super(props);
    this.state = {
        isPaused: false,
    };
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
    this.handleTick = this.handleTick.bind(this);
  }

  pause() {
    this.setState({isPaused: !this.state.isPaused});
  }

  reset() {
    this.setState({
        isPaused: false,
        time: this.props.time*60*1000,
    });
  }

  handleTick() {
    this.setState({
        time: this.state.time - 1000,
    });
  }

  render() {
    const { isLast, time, title, nextEvent, description } = this.props;

    const activityIcon = this.state.isPaused ? <Icon icon={play} /> : <Icon icon={paus} />;
    let countdown;
    if (this.state.isPaused) {
        let minutes = parseInt(this.state.time/1000/60);
        let seconds = parseInt(this.state.time/1000%60);
        countdown = renderer({
            hours: null,
            minutes: padNumber(minutes),
            seconds: padNumber(seconds),
            completed: null,
        });
    } else {
        countdown = (<Countdown 
            date={Date.now() + this.state.time} 
            renderer={renderer}
            onTick={this.handleTick}
            onComplete={nextEvent}
        />);
    }

    if (isLast) {
        return (
          <Card backgroundColor={getBackground("default")} >
            <Section size={64}> { title } </Section>
          </Card>
        );
    } else {
        return (
          <CardContainer>
              <Button color={getBackground(title)}>
                <Icon size={42} icon={thinLeft} />
              </Button>
              <Card backgroundColor={getBackground(title)} >
                <Section size={64}> { title } </Section>
                <Section size={24}> { description } </Section>
                {countdown}
                <Section>
                    <Button onClick={this.pause}>
                        {activityIcon}
                    </Button>
                    <Button onClick={this.reset}>
                        <Icon icon={cw} />
                    </Button>
                </Section>
              </Card>
              <Button color={getBackground(title)}>
                <Icon size={42} icon={thinRight} />
              </Button>
          </CardContainer>
        );
    }
  }
}

EventCard.propTypes = {

};

export default EventCard;
