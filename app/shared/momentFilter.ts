/// <reference path="../app.module.ts" />
module App.Shared.Filters {
    export function momentFormatFilter() {
        return (input, format) => {
            if (!input) return null;
            var dateFormat = format || "M/D/YYYY";
            var date = moment(input);
            var dateString = date.format(dateFormat);
            return dateString;
        }
    }
}