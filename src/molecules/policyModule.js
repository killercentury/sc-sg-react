import React from 'react';
import Alerts from '../atoms/alerts/alerts';
import PolicyList from '../atoms/policy-list/policy-list';
import _ from 'lodash';


// Container Component
const PolicyModule = React.createClass({
  getInitialState: function() {
    return {
      policiesFromServer: [
        {id:1, name:'Policy 1', verified:true},
        {id:2, name:'Policy 2', verified:true},
        {id:3, name:'Policy 3', verified:false},
        {id:4, name:'Policy 4', verified:false}
      ]
    }
  },

  render: function() {
    return (
      <div>
      <Alerts policies={this.state.policiesFromServer}>
      </Alerts>

      <PolicyList policies={this.state.policiesFromServer} verifyPolicy={this.verifyPolicy}>
      </PolicyList>

      </div>
    );
  },

  verifyPolicy: function(policyId) {
    var newState = Object.assign({}, this.state)
    var policy = _.find(newState.policiesFromServer, {id: policyId});
    policy.verified = !policy.verified
    this.setState(newState)
    console.log(newState);
  }
});


PolicyModule.propTypes = {
};

export default PolicyModule;
