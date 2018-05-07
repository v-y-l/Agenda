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
  align-items: center;
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

const Button = styled.button`
  display: inline-block;
  padding: 0.5rem 0;
  margin-top: 15px;
  width: 11rem;
  background: palevioletred;
  color: white;
  border: 2px solid white;
  text-decoration: none;
  text-align: center;
  border-radius: 10px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Label = styled.label`
  width: 200px;
  padding-right: 10px;
  text-align: right;
  font-size: 24px;
`;

const Input = styled.input`
  width: 200px;
  font-size: 24px;
  text-align: left;
  text: white;
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
      <div>
        <PageContainer>
          <Text size={64}> Browse 10x Plans </Text>
          {plansList}
        </PageContainer>
        <PageContainer>
          <Text size={64}> New Plan </Text>
          <FormItem>
            <Label> Plan Name </Label>
            <Input type="text" placeholder="e.g. Fidelity 10x" />
          </FormItem>
          <FormItem>
            <Label> Number of Presentors </Label>
            <Input type="text" placeholder="e.g. 5" />
          </FormItem>
          <FormItem>
            <Label> Session Length in Mins </Label>
            <Input type="text" placeholder="e.g. 20" />
          </FormItem>
          <Button> Create New Plan </Button>
        </PageContainer>
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
