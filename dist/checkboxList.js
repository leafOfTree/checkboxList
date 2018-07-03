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
            } else {
                initSelects();
            }
            scope.localize();
        }

        function initSelects() {
            scope.output.forEach(function (selected) {
                var outputIndex = scope.inputLabels.indexOf(selected);
                if (outputIndex !== -1) {
                    scope.selects[outputIndex] = true;
                }
            })
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
        template: `
<div class="checkbox-list"><span> <a class="btn btn-xs btn-all" ng-click="selectAll()">{{ text.all }}</a></span><span> <a class="btn btn-xs btn-reverse" ng-click="selectReverse()">{{ text.reverse }}</a></span>
  <li ng-repeat="item in inputLabels track by $index" style="list-style-type: none">
    <div class="checkbox checkbox-item">
      <label><span>
          <input type="checkbox" ng-model="selects[$index]" ng-change="update()" checked="checked"/>{{ item }}</span></label>
    </div>
  </li>
  <style type="text/css">
    .checkbox-list .checkbox-item label, input { cursor: pointer; }
    .checkbox-list a { cursor: pointer; }
    .checkbox-list li { list-style-type: none; }
  </style>
</div>`,
        scope: {
            input: '=',
            output: '=',
            option: '=',
        }
    }
})
