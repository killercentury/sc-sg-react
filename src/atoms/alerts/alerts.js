import React from 'react';

const divStyle = {border:'1px solid black'};

const Alerts = ({policies = [] }) => (
    <div style={divStyle}>
      Alerts
  <ul>
          {policies.map(function(listValue){
            return !listValue.verified ? <li key={listValue.id}>Please verify policy : {listValue.id}</li> : null;          })}
        </ul>
      </div>
);

Alerts.propTypes = {
  policies: React.PropTypes.array.isRequired
};


export default Alerts;
