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
/// <reference path="../app.module.ts" />
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
/// <reference path="shared/momentfilter.ts" />
/// <reference path="_references.ts" />
var App;
(function (App) {
    App.app = angular.module("app", ["ui.bootstrap.datetimepicker"]);
    App.app.controller("monolithicCtrl", App.Components.Controllers.MonolithicController.factory());
    App.app.filter("momentformat", App.Shared.Filters.momentFormatFilter);
})(App || (App = {}));
//# sourceMappingURL=all.js.map