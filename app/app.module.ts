/// <reference path="_references.ts" />

module App {
    export var app = angular.module("app", ["ui.bootstrap.datetimepicker"]);

    app.controller("monolithicCtrl", Components.Controllers.MonolithicController.factory());

    app.filter("momentformat", Shared.Filters.momentFormatFilter);
}