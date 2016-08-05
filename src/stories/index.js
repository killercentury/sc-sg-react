import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PolicyModule from '../index';


storiesOf('PolicyModule', module)
  .add('default view', () => (
    <PolicyModule>Hello</PolicyModule>
  ))
  .add('some emojies as the text', () => (
    <PolicyModule>😀 😎 👍 💯</PolicyModule>
  ))
  .add('custom styles', () => {

    return (
      <PolicyModule>Hello</PolicyModule>
    );
  });

  //
  // storiesOf('Button2', module)
  //   .add('default view', () => (
  //     <Button2 onClick={ action('button clicked') }>Hello</Button2>
  //   ))
  //   .add('some emojies as the text', () => (
  //     <Button2>😀 😎 👍 💯</Button2>
  //   ))
  //   .add('custom styles', () => {
  //     const style = {
  //       fontSize: 20,
  //       textTransform: 'uppercase',
  //       color: '#FF8833',
  //     };
  //     return (
  //       <Button2>Hello</Button2>
  //     );
  //   });
