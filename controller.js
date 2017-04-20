(function() {
  'use strict';

  angular
    .module('reacttodolist', [])
    .controller('reacttodolistController', loadFunction);

  loadFunction.$inject = ['$scope', 'structureService', '$location'];

  function loadFunction($scope, structureService, $location) {
    // Register upper level modules
    structureService.registerModule($location, $scope, 'reacttodolist');
    // --- Start reacttodolistController content ---
    console.info('Hi! from reacttodolistController');
    // --- End reacttodolistController content ---
    structureService.registerModule($location, $scope, 'reacttodo');
    React.koapp = {
      'structureService' : structureService
    };
    ReactDOM.render(
    React.createElement(TodoApp, null),
    document.getElementById('todo-container'));
  }
}());
