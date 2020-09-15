export = Console;
declare const Console_base: typeof import("./yoml.transport");
declare class Console extends Console_base {
    static get colors(): {
        error: string;
        warn: string;
        info: string;
    };
    constructor(options?: {});
    color(message: any): any;
}
