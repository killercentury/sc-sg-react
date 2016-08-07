
import React from 'react';

const divStyle = {border:'1px solid red'};


const PolicyList = ({policies= [], verifyPolicy}) => (
  <div style={divStyle}>
    Policy List
       <ul>
          {policies.map(function(listValue){
            return <li key={listValue.id}>Policy Id : {listValue.id}
            {!listValue.verified ? <button onClick={verifyPolicy.bind(null, listValue.id)}>Please Verify</button>: null }
            </li>;
          })}
        </ul>
      </div>
);

PolicyList.propTypes = {
  policies: React.PropTypes.array.isRequired,
  verifyPolicy: React.PropTypes.func
};


export default PolicyList;
