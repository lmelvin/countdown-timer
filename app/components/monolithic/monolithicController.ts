module App.Components.Controllers {
    export interface IMonolithicScope extends ng.IScope {
        vm: IMonolithicViewModel;
    }

    export interface IMonolithicViewModel {
        pageTitle: string;
        selectedDate?: Date;
        timespan?: ITimespan;
    }

    export interface IDateDifference {
        yearDiff: number;
        monthDiff: number;
        dayDiff: number;
        hourDiff: number;
        minuteDiff: number;
        secondDiff: number;
    }

    export class MonolithicController {
        constructor(
            protected $scope: IMonolithicScope,
            protected $cacheFactory: ng.ICacheFactoryService,
            protected $interval: ng.IIntervalService) {

            $scope.vm = $scope.vm || {
                pageTitle: "Countdown Timer Demo"
            };

            $interval(() => {
                if ($scope.vm.selectedDate) {
                    $scope.vm.timespan = countdown($scope.vm.selectedDate);
                }
            }, 1000);
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