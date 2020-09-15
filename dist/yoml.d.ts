import Redis from "./yoml.redis";
import Slack from "./yoml.slack";

export = Logger;

interface Options {
    logLevel?: 'error'| 'warn'| 'info'| 'slow'| 'time'| 'debug';
}

interface SlackOptions extends Options {
    webhook: string;
    token: string;
    channel: string;
    format: string;
    topics: Record<string, string>;
}

interface RedisOptions extends Options {
    url: string;
    cap: number;
    channel: string;
}

interface ConsoleOptions extends Options {

}

interface MultiTrasportOptions {
    transports: Record<string, ConsoleOptions | RedisOptions | SlackOptions >
}  

declare class Timer {
    _start: number;
    duration: number;
    constructor(name: string);
    toString(): string;
    isSlow(slow: number): boolean;
}

declare class Operation extends Timer {
    _operation: [string, string][];
    
    constructor(name:string);

    add(level: string, message: string): void;
    logs(): string[];
}

interface MessageOptions {
    attachments: any;
    repeat: any;
    topic: string;

}


/**
  * Represents the Logger library.
  * @constructor
  * @param {MultiTrasportOptions | ConsoleOptions} options - A configuration object to set up each transport.
  */
declare class Logger {
    static get levels(): string[];
    _times: Record<string, Timer>;
    _operations: Record<string, Operation>;
    _transports: (Console | Slack | Redis)[];
    
    constructor(options?: MultiTrasportOptions | ConsoleOptions);

    // logger functions
    error(message: string, options?: MessageOptions):void;
    warn(message: string, options?: MessageOptions):void;
    info(message: string, options?: MessageOptions):void;
    slow(message: string, options?: MessageOptions):void;
    time(message: string, options?: MessageOptions):void;
    debug(message: string, options?: MessageOptions):void;


    configureTransports(options: MultiTrasportOptions | ConsoleOptions): any[];
    initLogLevelFunctions(): void;
    log(level: string, message: string, options: any): void;
    startTimer(label: string): void;
    time(label: string): void;
    durationTimer(label: string): any;
    timeEnd(label: string, options: any): void;
    op(label: string): void;
    opEnd(label: string, options: any): void;
}
