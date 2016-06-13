import React from 'react';
import {render} from 'react-dom';
import I18nApp from './i18n_demo/app.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <I18nApp/>
      </div>
    );
  }
}

render(
    <App />,
    document.getElementById('app')
)