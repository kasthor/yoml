export = Message;
declare class Message {
    constructor(item: any, { attachments, level, repeat, topic }?: {
        attachments: any;
        level: any;
        repeat: any;
        topic: any;
    });
    level: any;
    set item(arg: any);
    repeat: any;
    topic: any;
    date: Date;
    hostname: string;
    attachments: any;
    get stack(): string;
    _item: any;
    _message: string;
    _stack: string;
    get isObject(): any;
    get isSimpleObject(): any;
    get length(): any;
    processAttachments(items: any): any;
    isEqual(message: any): boolean;
    formatedMessage(format: any): string;
    toString({ format, includeStack, includeAttachments }?: {
        format?: string;
        includeStack?: boolean;
        includeAttachments?: boolean;
    }): string;
    toJson({ format }: {
        format?: string;
    }): {
        message: any;
        level: any;
        date: string;
        attachments: any;
    };
}
