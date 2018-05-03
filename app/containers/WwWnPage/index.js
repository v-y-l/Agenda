/**
 *
 * WwWnPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import WorkingSection from 'components/WorkingSection';
import makeSelectWwWnPage, { 
  makeSelectWwWnTitle, 
  makeSelectWwComments, 
  makeSelectWnComments 
} from './selectors';
import reducer from './reducer';
import { getWwWnDataAction, addWwDataAction } from './actions';
import saga from './saga';

const Header = styled.h1``;

export class WwWnPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...nextProps,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      wwwntitle: "",
      wwcomments: [],
      wncomments: [],
    };
  }

  handleSubmit = (data) => {
    this.props.addWwData(data);
    this.props.getWwWnData(this.props.match.params.key);
  }

  componentDidMount() {
    this.props.getWwWnData(this.props.match.params.key);
  }

  render() {
    return (
      <div>
        <Header> {this.state.wwwntitle} </Header>
        <WorkingSection 
          title="What's Working" 
          items={this.state.wwcomments} 
          handleSubmit={this.handleSubmit} 
        />
        <WorkingSection title="What's Not" items={this.state.wncomments} />
      </div>
    );
  }
}

WwWnPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

// lets you map selectors to keys
const mapStateToProps = createStructuredSelector({
  wwwnpage: makeSelectWwWnPage(),
  wwwntitle: makeSelectWwWnTitle(),
  wwcomments: makeSelectWwComments(),
  wncomments: makeSelectWnComments(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    addWwData: (data) => dispatch(addWwDataAction(data)),
    getWwWnData: (key) => dispatch(getWwWnDataAction(key)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'wwWnPage', reducer });
const withSaga = injectSaga({ key: 'wwWnPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(WwWnPage);
