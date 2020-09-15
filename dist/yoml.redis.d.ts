export = Redis;
declare const Redis_base: typeof import("./yoml.transport");
declare class Redis extends Redis_base {
    constructor(options: any);
    client: any;
    cap: any;
    channel: any;
}
