const expect = require('chai').expect;
const adaptRouter = require('../dist');

describe('기본 시험', () => {
  it('checkRouter 시험', async () => {
    const result = await adaptRouter.default.checkRouter(['71cc20']);
    console.log('result:', result.data);
  });

  it('setDataLimit 시험', async () => {
    const result = await adaptRouter.default.setDataLimit({
      model: 'CNR-M100',
      serial: '601288',
      limit: '10000',
    });
    console.log('result:', result.data);
  });
});
