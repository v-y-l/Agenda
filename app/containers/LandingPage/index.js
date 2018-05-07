/**
 *
 * LandingPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLandingPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getPlansAction } from './actions';

export class LandingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...nextProps.landingPage,
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      plans: [],
    };
  }

  componentDidMount() {
    this.props.getPlans();
  }

  render() {
    let plansList = [];
    if (this.state.plans != null && this.state.plans.length > 0) {
      for (let plan of this.state.plans) {
        plansList.push(<div key={plan.key}>{plan.title}</div>);
      }
    }
    return (
      <div>
        LandingPage
        {plansList}
      </div>
    );
  }
}

LandingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  landingPage: makeSelectLandingPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getPlans: () => dispatch(getPlansAction()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'landingPage', reducer });
const withSaga = injectSaga({ key: 'landingPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LandingPage);
