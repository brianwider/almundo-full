'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var productsCtrlStub = {
  index: 'productsCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var productsIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './products.controller': productsCtrlStub
});

describe('Products API Router:', function() {
  it('should return an express router instance', function() {
    expect(productsIndex).to.equal(routerStub);
  });

  describe('GET /api/products', function() {
    it('should route to products.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'productsCtrl.index')
        ).to.have.been.calledOnce;
    });
  });
});
