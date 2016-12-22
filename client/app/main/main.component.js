import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  $http;

  products = [];

  /*@ngInject*/
  constructor($http, $log, $scope) {
    this.$http = $http;
    this.displayGrid = true;
    $scope.byRange = function (product) {
      var price = parseFloat(product.price);
      var min = parseFloat($scope.maxPrice);
      var max = 0;

      if (!price) {
        return false;
      }

      if(min && price < min) {
        return false;
      }

      if(max && price > max) {
        return false;
      }

      return true;
    };
  }

  $onInit() {
    this.$http.get('/api/products')
      .then(response => {
        this.products = response.data[0].hotels;
      });
  }
}

export default angular.module('almundoFullApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
