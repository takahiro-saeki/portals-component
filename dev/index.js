import React from 'react';
import { render } from 'react-dom';
import PortalsComponent from '../lib';

const App = () => (
  <div>
    <PortalsComponent el="#portals-test">
      <div>app</div>
    </PortalsComponent>
    <div>different</div>
  </div>
)

render(<App />, document.getElementById('app'))