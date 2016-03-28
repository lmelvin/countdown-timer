module App.Components.Controllers {
    export interface IMonolithicScope extends ng.IScope {
        vm: IMonolithicViewModel;
    }

    export interface IMonolithicViewModel {
        pageTitle: string;
        selectedDate?: Date;
    }

    export class MonolithicController {
        constructor(
            protected $scope: IMonolithicScope,
            protected $cacheFactory: ng.ICacheFactoryService,
            protected $interval: ng.IIntervalService) {

            $scope.vm = $scope.vm || {
                pageTitle: "Countdown Timer Demo"
            };
        }

        static factory(): Function {
            var controller = (
                $scope: IMonolithicScope,
                $cacheFactory: ng.ICacheFactoryService,
                $interval: ng.IIntervalService) =>
                new MonolithicController($scope, $cacheFactory, $interval);
            controller.$inject = ["$scope", "$cacheFactory", "$interval"];
            return controller;
        }
    }
}