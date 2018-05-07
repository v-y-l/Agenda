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
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLandingPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getPlansAction } from './actions';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 820px;
  margin-top: 50px;
  background: #DDDDDD;
  border-radius: 3px;
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 40px;
`;

const StyledLink = styled(Link)`
    font-size: ${props=>props.size}px;
    text-align: center;
    color: white;
    display: flex;
    justify-content: space-evenly;
`;


const Text = styled.span`
    font-size: ${props=>props.size}px;
    text-align: center;
    color: white;
    display: flex;
    flex-direction:row;
    justify-content: space-evenly;
    width:100%;
`;

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
        plansList.push(
          <StyledLink 
            to={"/plan/"+plan.key}
            key={plan.key}
            size={32}>
              {plan.title}
          </StyledLink>
        );
      }
    }
    return (
      <PageContainer>
        <Text size={64}> Browse 10x Plans </Text>
        {plansList}
      </PageContainer>
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
