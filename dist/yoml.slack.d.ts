export = Slack;
declare const Slack_base: typeof import("./yoml.transport");
declare class Slack extends Slack_base {
    static get icons(): {
        error: string;
        info: string;
    };
    constructor(options: any);
    set format(arg: any);
    get format(): any;
    _format_string: any;
    _format: any;
    hook: any;
    token: any;
    channel: any;
    topics: any;
    client: import("@slack/web-api").WebClient;
    getIcon(level: any): any;
    getChannels(level: any, topic: any): any;
    emitToChannels(message: any): void;
    levelIcon(message: any): ":no_entry:" | ":warning:" | ":space_invader:" | ":timer_clock:" | ":information_source:";
    formatPayload(message: any): {
        type: string;
        text: {
            type: string;
            text: any;
        };
    }[];
    formatSection(message: any, options: any): {
        type: string;
        text: {
            type: string;
            text: any;
        };
    };
    formatFieldsSection(message: any): {
        type: string;
        fields: any[];
    };
    formatTextSection(text: any, options: any): {
        type: string;
        text: {
            type: string;
            text: any;
        };
    };
    formatText(message: any, { code, addIcon }?: {
        code?: boolean;
        addIcon?: boolean;
    }): any;
    isMessage(item: any): boolean;
    sendMessage(channel: any, message: any): void;
    hasAttachmentStructure(data: any): any;
}
