import React from 'react';
import Alerts from '../atoms/alerts/alerts';
import PolicyList from '../atoms/policy-list/policy-list';


const policiesFromServer = [{
  id: 1
},
{
  id: 2
}];


const PolicyModule = ({ children }) => (


  <div>
    <Alerts policies={policiesFromServer}>
    {children}
  </Alerts>

  <PolicyList policies={policiesFromServer}>
    {children}
  </PolicyList>

  </div>
);

PolicyModule.propTypes = {
  children: React.PropTypes.string.isRequired
};


export default PolicyModule;
