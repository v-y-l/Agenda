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
} from './actions';

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
        PlanPage
        <EventOptions />
        <Schedule 
          schedule={this.state.schedule} 
          handleDeleteScheduleItem={this.props.deleteScheduleItem} />
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
