import { Plugin } from "@hapi/hapi";

declare const requestId: Plugin<{}>;
export = requestId;

declare module "@hapi/hapi" {
    interface PluginsStates {
        requestid: string,
    }
}