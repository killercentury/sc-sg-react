
import React from 'react';

const divStyle = {border:'1px solid red'};


const PolicyList = ({ children, policies= [] }) => (
  <div style={divStyle}>
    Policy List
       <ul>
          {policies.map(function(listValue){
            return <li>Policy Id : {listValue.id}</li>;
          })}
        </ul>
      </div>
);

PolicyList.propTypes = {
  children: React.PropTypes.string.isRequired,
  policies: React.PropTypes.object.isRequired
};


export default PolicyList;
