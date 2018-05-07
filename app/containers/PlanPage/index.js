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

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 1000px;
  width: 100%;
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
  width: 400px;
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
  margin-left: 50px;
  width: 11rem;
  background: palevioletred;
  color: white;
  border: 2px solid white;
  text-decoration: none;
  text-align: center;
  border-radius: 10px;
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
    };
  }

  componentDidMount() {
    this.props.getPlanData(this.props.match.params.key);
  }

  render() {
    return (
      <PageContainer>
        <h1> 10x </h1>
        <ContentContainer>
          <OptionsContainer>

            <h3> Add an event </h3>
            <EventOptions
              eventOptions={this.state.eventOptions}
              handleAddScheduleItem={this.props.addScheduleItem}
            />
            <StyledLink to={"/run/"+this.state.planKey}> Run </StyledLink>

          </OptionsContainer>
          <ScheduleContainer>
            <h3> Your 10x schedule </h3>
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
