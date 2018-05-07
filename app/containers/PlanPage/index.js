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
import styled, { keyframes } from 'styled-components';

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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 800px;
  justify-content: space-evenly;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`;

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 500px;
`;

const StyledLink = styled(Link)`
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

const Text = styled.span`
    font-size: ${props=>props.size}px;
    text-align: center;
    color: white;
    display: flex;
    flex-direction:row;
    justify-content: space-evenly;
    width:100%;
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
      planName: "10x",
      eventOptions: [],
      schedule: [],
    };
  }

  componentDidMount() {
    this.props.getPlanData(this.props.match.params.key);
  }

  render() {
    return (
      <PageContainer>
        <Text size={64}> {this.state.planName} </Text>
        <ContentContainer>
          <OptionsContainer>

            <Text size={48}> Add Events </Text>
            <EventOptions
              eventOptions={this.state.eventOptions}
              handleAddScheduleItem={this.props.addScheduleItem}
            />
            <StyledLink to={"/run/"+this.state.planKey}> Run </StyledLink>

          </OptionsContainer>
          <ScheduleContainer>
            <Text size={48}> Schedule </Text>
            <Schedule 
              schedule={this.state.schedule} 
              handleDeleteScheduleItem={this.props.deleteScheduleItem}
            />
          </ScheduleContainer>
        </ContentContainer>
      </PageContainer>
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
