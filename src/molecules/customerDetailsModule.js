import React from 'react';
import CustomerDetails from '../atoms/customerDetails/customerDetails';
import _ from 'lodash';

// Container Component
const CustomerDetailsModule = React.createClass({
  getInitialState: function() {
    return {
      details: {
        name:'test',
        unverified: 2
      }
    }
  },

  componentDidMount: function () {
    window.globalEmitter.addListener('policyVerified', this.updatePolicyVerfied);
  },
  componentWillUnmount: function () {
    window.globalEmitter.removeListener('policyVerified', this.updatePolicyVerfied);
  },

  render: function() {
    return (
      <div>
       <CustomerDetails details={this.state.details} />
      </div>
    );
  },

  updatePolicyVerfied: function() {
    console.log('event occured');
    var newState = Object.assign({}, this.state);
    newState.details.unverified = newState.details.unverified - 1;
    this.setState(newState)
    console.log(newState);
  }
});


CustomerDetailsModule.propTypes = {
};

export default CustomerDetailsModule;
