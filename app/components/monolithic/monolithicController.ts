module App.Components.Controllers {
    export interface IMonolithicScope extends ng.IScope {
        vm: IMonolithicViewModel;
    }

    export interface IMonolithicViewModel {
        pageTitle: string;
        selectedDate?: Date;
        timespan?: ITimespan;
    }

    export class MonolithicController {
        constructor(
            protected $scope: IMonolithicScope,
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
                $interval: ng.IIntervalService) =>
                new MonolithicController($scope, $interval);
            controller.$inject = ["$scope", "$interval"];
            return controller;
        }
    }
}