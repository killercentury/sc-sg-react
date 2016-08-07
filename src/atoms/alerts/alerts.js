import React from 'react';

const divStyle = {border:'1px solid black'};

const Alerts = ({policies = [] }) => (
    <div style={divStyle}>
      Alerts
  <ul>
          {policies.map(function(listValue){
            return <li key={listValue.id}>Alert for Policy Id : {listValue.id}</li>;
          })}
        </ul>
      </div>
);

Alerts.propTypes = {
  policies: React.PropTypes.array.isRequired
};


export default Alerts;
