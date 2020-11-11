import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { ServerStyleSheet } from 'styled-components';
import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';
import webConfig from '../../webConfig.json';

export default (req, store, context) => {
  const sheet = new ServerStyleSheet();

  const content = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>
    )
  );
  const helmet = Helmet.renderStatic();
  const styles = sheet.getStyleTags();

  return `<!DOCTYPE html>
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta charset="UTF-8">
              <meta name="robots" content="index, follow" />
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <meta
              name="googlebot"
              content="index, follow, max-snippet:-1, max-image-preview:large"
              />
              <meta
                name="bingbot"
                content="index, follow, max-snippet:-1, max-image-preview:large"
              />
              ${helmet.title.toString()}
              ${helmet.meta.toString()}
              ${helmet.link.toString()}
              ${styles}
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <link rel="stylesheet" href="${webConfig.siteURL}/assets/css/styles.min.css">
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${serialize(store.getState()).replace(
                      /</g,
                      '\\u003c'
                    )}
                </script>
                <script src="/bundle.js"></script>
            </body>
    </html>`;
};
