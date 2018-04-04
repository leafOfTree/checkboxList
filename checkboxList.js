angular.module('checkboxList', [])
.directive('checkboxList', function () {
    function link(scope, element, attr) {
        function init() {
            if (!scope.input || !scope.output) {
                throw new Error('input and output variable should be provided!');
            }
            if (scope.input) {
                scope.inputLabels = scope.input.map(function (_input) {
                    return _input.label || _input;
                })
            }
            scope.selects = {};

            if (scope.option && scope.option.initSelectAll) {
                scope.selectAll();
            }
            scope.localize();
        }

        scope.update = function () {
            scope.output.length = 0;
            for (var i in scope.selects) {
                if (scope.selects[i]) {
                    var select = scope.input[i];
                    scope.output.push(select.value || select);
                }
            }
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
        init();
    }
    return {
        link: link,
        replace: true, 
        restrict: 'AE',
        template: `{html}`,
        scope: {
            input: '=',
            output: '=',
            option: '=',
        }
    }
})
