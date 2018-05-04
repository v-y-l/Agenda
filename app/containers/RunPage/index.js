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

import EventCard from 'components/EventCard';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRunPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import {
  getPlanAction,
} from './actions';

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
  }

  componentDidMount() {
    this.props.getPlanData(this.props.match.params.key);
  }

  render() {
    return (
      <div>
        <EventCard time={3} title={"Judge"} isComplete={false} />
      </div>
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
