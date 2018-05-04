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
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPlanData(this.props.match.params.key);
  }

  render() {
    return (
      <div>
        Run page
        <EventCard />
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
