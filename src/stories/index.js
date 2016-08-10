import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import {CustomerDetailsModule, PolicyModule ,PolicyModuleFlux, CustomerDetailsModuleFlux} from '../index';


storiesOf('Home Page', module)
  .add('default view', () => (
  <div><PolicyModule>Hello</PolicyModule>
  <CustomerDetailsModule>Hello</CustomerDetailsModule>
  </div>
))
;
