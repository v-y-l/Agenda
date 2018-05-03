/**
*
* WorkingSection
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.div`
	padding-left: 15px;
	border: 1px solid black;
	margin-bottom: 10px;
`;

const Header = styled.h1`
	border-bottom: 1px dotted black;
`;

const List = styled.div`
	margin-bottom: 15px;
`;

const Item = styled.div`
	padding: 5px;
`;

const Input = styled.input`
  width: 90%;
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  border: 1px solid black;
  border-radius: 3px;
`;

const Button = styled.button`
  border: 1px solid black;
`;

class WorkingSection extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
  	super(props);
  	this.state = {
  		inputValue: "",
  	};

  	this.handleInputChange = this.handleInputChange.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
  	this.setState({inputValue: event.target.value})
  }

  handleSubmit() {
    this.props.handleSubmit(this.state.inputValue);
  }

  render() {
	  const items = this.props.items.map( (item) => <Item key={item['key']}> {item['comment']} </Item>);
    const placeholder = `Add a new ${this.props.title} item`;
    return (
      <div>
        <div>
          <Input 
           value={this.state.inputValue}
           onChange={this.handleInputChange}
           placeholder={placeholder}
           type="text" 
          />
          <Button onClick={this.handleSubmit}> + </Button>
        </div>
        <Section>
        	<Header> {this.props.title} </Header>
        	<List> 
        		{items}
        	</List>
        </Section>
      </div>
    );
  }
}

WorkingSection.propTypes = {
	title: PropTypes.string,
};

export default WorkingSection;
