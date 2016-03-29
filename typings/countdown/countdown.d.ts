declare function countdown(start: Date | ITimespan | Function, end?: Date | ITimespan | Function, units?: number, max?: number, digits?: number): ITimespan;

interface ITimespan {
    days: number;
    hourse: number;
    minutes: number;
    months: number;
    seconds: number;
    units: number;
    value: number;
    years: number;
    end: Date;
    start: Date;
    addTo(date: Date): Date;
    toHTML(tag: string, emptyLabel: string): string;
    toString(emptyLabel: string): string;
}