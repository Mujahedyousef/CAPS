'use strict';
const eventEmitter = require('../lib/events')

let order = { store: '1-206-flowers', orderId: '951863c4-d313-4d44-9f6f-30653e35c69b', customer: 'yazan', address: 'albnyat' };

describe('test events', () => {
    let consoleSpy;

    beforeAll(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });
    afterAll(() => {
        consoleSpy.mockRestore();
    })

    it('check pickup event ', async () => {
        eventEmitter.emit('pickup', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });
    it('check delieverd event ', async () => {
        eventEmitter.emit('delieverd', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });
    it('check in-transit event ', async () => {
        eventEmitter.emit('in-transit', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });
})
