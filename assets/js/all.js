var App;
(function (App) {
    var Components;
    (function (Components) {
        var Controllers;
        (function (Controllers) {
            var MonolithicController = (function () {
                function MonolithicController($scope, $cacheFactory, $interval) {
                    this.$scope = $scope;
                    this.$cacheFactory = $cacheFactory;
                    this.$interval = $interval;
                    $scope.vm = $scope.vm || {
                        pageTitle: "Countdown Timer Demo"
                    };
                    $interval(function () {
                        if ($scope.vm.selectedDate) {
                            $scope.vm.timespan = countdown($scope.vm.selectedDate);
                        }
                    }, 1000);
                }
                MonolithicController.factory = function () {
                    var controller = function ($scope, $cacheFactory, $interval) {
                        return new MonolithicController($scope, $cacheFactory, $interval);
                    };
                    controller.$inject = ["$scope", "$cacheFactory", "$interval"];
                    return controller;
                };
                return MonolithicController;
            }());
            Controllers.MonolithicController = MonolithicController;
        })(Controllers = Components.Controllers || (Components.Controllers = {}));
    })(Components = App.Components || (App.Components = {}));
})(App || (App = {}));
/// <reference path="../../app.module.ts" />
var App;
(function (App) {
    var Shared;
    (function (Shared) {
        var Filters;
        (function (Filters) {
            function momentFormatFilter() {
                return function (input, format) {
                    if (!input)
                        return null;
                    var dateFormat = format || "M/D/YYYY";
                    var date = moment(input);
                    var dateString = date.format(dateFormat);
                    return dateString;
                };
            }
            Filters.momentFormatFilter = momentFormatFilter;
        })(Filters = Shared.Filters || (Shared.Filters = {}));
    })(Shared = App.Shared || (App.Shared = {}));
})(App || (App = {}));
/// <reference path="components/monolithic/monolithiccontroller.ts" />
/// <reference path="shared/filters/momentfilter.ts" />
/// <reference path="_references.ts" />
var App;
(function (App) {
    App.app = angular.module("app", ["ui.bootstrap.datetimepicker"]);
    App.app.controller("monolithicCtrl", App.Components.Controllers.MonolithicController.factory());
    App.app.filter("momentformat", App.Shared.Filters.momentFormatFilter);
    angular.module("ui.bootstrap.datetimepicker").run([
        "$templateCache", function ($templateCache) {
            $templateCache.put("templates/datetimepicker.html", '<div class="datetimepicker table-responsive"><table class="table u-full-width {{ data.currentView }}-view"><thead><tr><th class="left" data-ng-click="changeView(data.currentView, data.leftDate, $event)" data-ng-show="data.leftDate.selectable"><i class="glyphicon glyphicon-arrow-left"><span class="sr-only">{{ screenReader.previous }}</span></i>\n            </th>\n            <th class="switch" colspan="5" data-ng-show="data.previousViewDate.selectable" data-ng-click="changeView(data.previousView, data.previousViewDate, $event)">{{ data.previousViewDate.display }}</th>\n            <th class="right" data-ng-click="changeView(data.currentView, data.rightDate, $event)" data-ng-show="data.rightDate.selectable"><i class="glyphicon glyphicon-arrow-right"><span class="sr-only">{{ screenReader.next }}</span></i>\n            </th>\n        </tr>\n        <tr>\n            <th class="dow" data-ng-repeat="day in data.dayNames">{{ day }}</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr data-ng-if="data.currentView !== \'day\'">\n            <td colspan="7">\n                          <span class="{{ data.currentView }}" data-ng-repeat="dateObject in data.dates" data-ng-class="{active: dateObject.active, past: dateObject.past, future: dateObject.future, disabled: !dateObject.selectable}" data-ng-click="changeView(data.nextView, dateObject, $event)">{{ dateObject.display }}</span></td>\n        </tr>\n        <tr data-ng-if="data.currentView === \'day\'" data-ng-repeat="week in data.weeks">\n            <td data-ng-repeat="dateObject in week.dates" data-ng-click="changeView(data.nextView, dateObject, $event)" class="day" data-ng-class="{active: dateObject.active, past: dateObject.past, future: dateObject.future, disabled: !dateObject.selectable}">{{ dateObject.display }}</td></tr></tbody></table></div>');
        }
    ]);
})(App || (App = {}));
//# sourceMappingURL=all.js.map