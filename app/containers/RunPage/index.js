/**
 *
 * RunPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import EventCard from 'components/EventCard';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRunPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import {
  getPlanAction,
} from './actions';

const Container = styled.div`
  display:flex;
  justify-content:center;
`;

export class RunPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...nextProps.runPage
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      planKey: "",
      atEvent: 0,
      schedule: [],
    }

    this.nextEvent = this.nextEvent.bind(this);
  }

  componentDidMount() {
    this.props.getPlanData(this.props.match.params.key);
  }

  nextEvent() {
    this.setState({
      atEvent: this.state.atEvent + 1,
    });
  }

  render() {
    const { schedule } = this.state;
    //TODO: Add a feature to create events w/ descriptors
    const descriptions = {
      "Judge": "Greg Kunkel",
      "Present": "Victor presents on project" , 
      "Leave Feedback": "Please leave feedback for Victor Lin"
    };
    let events = schedule.map((evt, index)=>{
      return <EventCard
        key={index} 
        time={evt.time} 
        title={evt.title} 
        description={descriptions[evt.title]}
        isLast={false} 
        nextEvent={this.nextEvent} 
      />
    });
    events.push(<EventCard 
      key={schedule.length}
      time={0} 
      title={"10x Complete!"} 
      isLast={true} 
      nextEvent={()=>console.log("Plan complete")} 
    />);
    return (
      <Container>
        { events[this.state.atEvent] }
      </Container>
    );
  }
}

RunPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  runPage: makeSelectRunPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getPlanData: (key) => dispatch(getPlanAction(key)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'runPage', reducer });
const withSaga = injectSaga({ key: 'runPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RunPage);
