import SupportedBrowser from "../browser/types/supported-browser.js";
import ErrorRemoteDesktop from "../browser/types/error-remote-desktop.js";
import ResponseStatus from "../browser/types/response-status.js";

declare interface BrowserData {
    startedOn: Date;
    label: string;
    address: string;
    vncPass?: string | null;
}

declare interface GetResponse {
    error: (typeof ResponseStatus)[keyof typeof ResponseStatus];
    browsers: BrowserData[];
}

declare interface OpenResponse {
    status: (typeof ResponseStatus)[keyof typeof ResponseStatus];
    address?: string | null;
}

declare interface SimpleResponse {
    success: boolean;
    error: ErrorRemoteDesktop;
}

declare interface StartRemoteDesktopResponse {
    success: boolean;
    error: ErrorRemoteDesktop;
    password?: string | null;
}

declare interface StoptRemoteDesktopResponse {
    success: boolean;
    error: ErrorRemoteDesktop;
}

declare interface BrowserOptionsProxy {
    host?: string | null;
    port?: string | null;
    username?: string | null;
    password?: string | null;
}

declare interface BrowserOptions {
    args?: string[] | null;
    ignoredDefaultArgs?: string[] | null;
    headless?: boolean | null;
    extensions?: byte[] | null;
    stealth?: boolean | null;
    browser?: SupportedBrowser | null;
    proxy?: BrowserOptionsProxy | null;
    keepOpen?: number | null;
    label?: string | null;
    saveSession?: boolean;
    recoverSession?: boolean;
}

declare class BrowserService {
    constructor(apiToken: string);

    get baseAddress(): string;
    set baseAddress(value: string);

    open(
        options?: BrowserOptions,
        timeout?: number,
        ct?: AbortSignal
    ): Promise<OpenResponse>;
    get(timeout?: number, ct?: AbortSignal): Promise<GetResponse>;
    close(
        address: string,
        timeout?: number,
        ct?: AbortSignal
    ): Promise<SimpleResponse>;
    startRemoteDesktop(
        address: string,
        timeout?: number,
        ct?: AbortSignal
    ): Promise<StartRemoteDesktopResponse>;
    stopRemoteDesktop(
        address: string,
        timeout?: number,
        ct?: AbortSignal
    ): Promise<StoptRemoteDesktopResponse>;
}

export {
    BrowserService,
    GetResponse,
    OpenResponse,
    SimpleResponse,
    StartRemoteDesktopResponse,
    StoptRemoteDesktopResponse,
    BrowserOptionsProxy,
    BrowserOptions,
    SupportedBrowser,
    ErrorRemoteDesktop,
    ResponseStatus,
};
