angular.module('app', ['checkboxList']).controller('testController', function ($scope) {
    $scope.names = ['John', 'Ada', 'Sam'];

    $scope.complexNames = [
        {
            label: 'John', 
            value: '001',
        },
        {
            label: 'Ada', 
            value: '003',
        }
    ]
    $scope.selectedNames1 = [];

    $scope.selectedNames2 = [];
})
