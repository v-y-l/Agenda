/**
 *
 * PlanPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPlanPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import EventOptions from 'components/EventOptions';
import Schedule from 'components/Schedule';

import {
  getPlanAction,
  deleteScheduleItemAction,
  addScheduleItemAction,
} from './actions';

const StyledLink = styled(Link)`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: palevioletred;
  color: white;
  border: 2px solid white;
  text-decoration: none;
  text-align: center;
`;

export class PlanPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...nextProps.planPage
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      planKey: "",
      eventOptions: [],
      schedule: [],
    }
  }

  componentDidMount() {
    this.props.getPlanData(this.props.match.params.key);
  }

  render() {
    return (
      <div>
        <EventOptions
          eventOptions={this.state.eventOptions}
          handleAddScheduleItem={this.props.addScheduleItem}
        />
        <StyledLink to={"/run/"+this.state.planKey}> Run </StyledLink>
        <Schedule 
          schedule={this.state.schedule} 
          handleDeleteScheduleItem={this.props.deleteScheduleItem}
        />
      </div>
    );
  }
}

PlanPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  planPage: makeSelectPlanPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getPlanData: (key) => dispatch(getPlanAction(key)),
    deleteScheduleItem: (key) => dispatch(deleteScheduleItemAction(key)),
    addScheduleItem: (time, title) => dispatch(addScheduleItemAction(time, title)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'planPage', reducer });
const withSaga = injectSaga({ key: 'planPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PlanPage);
