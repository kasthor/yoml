export = Transport;
declare class Transport {
    static get levels(): string[];
    constructor(options?: {});
    logLevel: any;
    unfiltered: boolean;
    levelIndex(level: any): number;
    showLevel(level: any): boolean;
    loggable(func: any): (message: any) => any;
    repeatable(func: any): (message: any) => any;
    isRepeat(message: any): any;
    repeat: number;
    lastMessage: any;
    log(level: any, message: any, options: any): any;
    emitRepeat(level: any, times: any, options: any): void;
    emitLog(): void;
}
