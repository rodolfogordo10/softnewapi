import AuthControler from '../../../src/controllers/auth';
import sinon from 'sinon';

describe('Controller Authentication', () => {

    describe('get() products', () => {
        it('should return a list of products', () => {
            const request = {};
            const response = {
                send: sinon.spy()
            };

            const productController = new ProductsControler();
            productController.get(request, response);

            expect(response.send.called).to.be.true;
            expect(response.send.calledWith(defaultProduct)).to.be.true;
        });
    });
});