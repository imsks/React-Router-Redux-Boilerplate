import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Footer from './components/Footer';

const App = ({ route }) => {
  return (
    <div>
      <Header />
      <div className="container">{renderRoutes(route.routes)}</div>
      <Footer />
    </div>
  );
};

App.propTypes = {
  route: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
  route: null,
};

export default {
  component: App,
};
