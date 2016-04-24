module App.Components.Controllers {
    export interface IMonolithicScope extends ng.IScope {
        vm: IMonolithicViewModel;
    }

    export interface IMonolithicViewModel {
        pageTitle: string;
        selectedDate?: Date;
        timespan?: ITimespan;
        startCountdown(): void;
        reset(): void;
        countdownStarted?: boolean;
    }

    export class MonolithicController {
        private interval: ng.IPromise<any>;

        constructor(
            private $scope: IMonolithicScope,
            private $interval: ng.IIntervalService) {

            $scope.vm = $scope.vm || {
                pageTitle: "Countdown Timer Demo",
                reset: this.reset,
                startCountdown: this.startCountdown
            };

            this.interval = $interval(() => {
                if ($scope.vm.selectedDate) {
                    $scope.vm.timespan = countdown($scope.vm.selectedDate);
                }
            }, 1000);
        }

        private startCountdown = (): void => {
            this.toggleCountdownStatus();
        }

        private reset = (): void => {
            this.toggleCountdownStatus();
            this.$scope.vm.selectedDate = null;
        }

        private toggleCountdownStatus = (): void => {
            this.$scope.vm.countdownStarted = !this.$scope.vm.countdownStarted;
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