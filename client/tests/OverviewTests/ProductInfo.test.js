const productInfo = require('../../src/components/Overview/ProductInfo.jsx');

test('checks that Product Info feature gets star rating on page load', () => {
  expect(productInfo.state).not.toBeUndefined;
});

// test('checks that numberRatings state is not undefined', () => {
//   expect(productInfo.state.not.toBeUndefined);
// });
