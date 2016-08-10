import React from 'react';

const divStyle = {border:'1px solid pink'};

const CustomerDetails = ({details = {} }) => (
    <div style={divStyle}>
      CustomerDetails
     <div>{details.name}</div>
     <div>Unverified Policy : {details.unverified}</div>
      </div>
);

CustomerDetails.propTypes = {
  details: React.PropTypes.object.isRequired
};


export default CustomerDetails;
