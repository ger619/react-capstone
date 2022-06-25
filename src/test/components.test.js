import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Home from '../components/Home';
import AllCrypto from '../components/AllCrypto';
import CryptoDetails from '../components/CryptoDetails';

describe('Test Components', () => {
  test('test Home', () => {
    const tree = renderer
      .create(<Provider store={store}><Home /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('test AllCrypto', () => {
    const tree = renderer
      .create(<Provider store={store}><AllCrypto /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('test CryptoDetails', () => {
    const tree = renderer
      .create(<Provider store={store}><CryptoDetails /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
