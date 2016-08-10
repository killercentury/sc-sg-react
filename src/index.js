import React from 'react';
import Alerts from './atoms/alerts/alerts';
import PolicyList from './atoms/policy-list/policy-list';
import PolicyModule from './molecules/policyModule';
import EventEmitter from 'fbemitter';
import CustomerDetailsModule from './molecules/customerDetailsModule';

window.globalEmitter = new EventEmitter.EventEmitter();

export {CustomerDetailsModule, PolicyModule};
