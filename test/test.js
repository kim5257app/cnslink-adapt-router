const expect = require('chai').expect;
const adaptRouter = require('../dist');

describe('기본 시험', () => {
  it('checkRouter 시험', async () => {
    const result = await adaptRouter.default.checkRouter(['71cc1d','71cc21']);
    console.log('result:', result.data);
  });

  it('setDataLimit 시험', async () => {
    const result = await adaptRouter.default.setDataLimit({
      model: 'CNR-M100C',
      serial: '601288',
      limit: '10000',
    });
    console.log('result:', result.data);
  });

  it('rebootRouter 시험', async () => {
    const result = await adaptRouter.default.rebootRouter({
      model: 'CNR-M100C',
      serial: '601289',
    });
    console.log('result:', result.data);
  });
});
