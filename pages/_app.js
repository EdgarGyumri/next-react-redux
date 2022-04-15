import React from 'react';
import { Provider } from 'react-redux';
import { store, wrapper } from './../src/store';

const App = ({Component, pageProps}) => <Component {...pageProps} />;

export default wrapper.withRedux(App);