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
        restrict: 'AE',
        template: `
<ul> <span>{{ text.title }}</span><span> 
    <button ng-click="selectAll()">{{ text.all }}</button></span><span> 
    <button ng-click="selectReverse()">{{ text.reverse }}</button></span>
  <li ng-repeat="item in input" style="list-style-type: none">
    <div class="checkbox">
      <label><span>
          <input type="checkbox" ng-model="selects[$index]" ng-change="update()" checked="checked"/>{{ item }}</span></label>
    </div>
  </li>
</ul>`,
        scope: {
            input: '=',
            output: '=',
            title: '='
        }
    }
})
