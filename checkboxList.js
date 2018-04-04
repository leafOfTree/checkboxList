angular.module('checkboxList', [])
.directive('checkboxList', function () {
    function link(scope, element, attr) {
        scope.selects = {}

        scope.update = function () {
            var output = [];
            for (var i in scope.selects) {
                if (scope.selects[i]) {
                    output.push(scope.input[i]);
                }
            }
            scope.output = output;
        }

        scope.selectAll = function () {
            scope.input.forEach(function (item, index) {
                scope.selects[index] = true;
            })

            scope.update();
        }

        scope.selectReverse = function () {
            scope.input.forEach(function (item, index) {
                scope.selects[index] = !scope.selects[index];
            })

            scope.update();
        }

        scope.localize = function () {
            var langElem = document.querySelector('[lang]');
            var lang = langElem && langElem.getAttribute('lang');
            if (lang && lang === 'zh_CN') {
                scope.text = {
                    all: '全选',
                    reverse: '反选'
                }
            } else {
                scope.text = {
                    all: 'All',
                    reverse: 'Reverse'
                }
            }
        }
        scope.localize();
    }
    return {
        link: link,
        replace: true, 
        restrict: 'AE',
        template: `{html}`,
        scope: {
            input: '=',
            output: '=',
            title: '='
        }
    }
})
