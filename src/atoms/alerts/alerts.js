import React from 'react';

const divStyle = {border:'1px solid black'};

const Alerts = ({ children, policies = [] }) => (
    <div style={divStyle}>
      Alerts
  <ul>
          {policies.map(function(listValue){
            return <li>Alert for Policy Id : {listValue.id}</li>;
          })}
        </ul>
      </div>
);

Alerts.propTypes = {
  children: React.PropTypes.string.isRequired,
  policies: React.PropTypes.object.isRequired
};


export default Alerts;
