import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './route';

const renderApp = (r: JSX.Element) => {
  ReactDOM.render(
    <BrowserRouter>
      {r}
    </BrowserRouter>,
    document.getElementById('app-root')
  );
}

renderApp(routes);

if (module.hot) {
  module.hot.accept('./route', async () => {
    const { routes } = await import('./route');

    renderApp(routes);
  });
}