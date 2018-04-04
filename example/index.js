angular.module('app', ['checkboxList']).controller('testController', function ($scope) {
    $scope.names = ['John', 'Ada', 'Sam'];
    $scope.selectedNames = [];
})
