import ErrorSession from "../session/types/error-session.js";

declare interface RemoveResponse {
    success: boolean;
    error: keyof typeof ErrorSession;
}

declare interface StoredSession {
    label?: string | null;
    createdOn?: Date | null;
    lastUpdate?: Date | null;
}

declare interface ListResponse {
    success: boolean;
    error: keyof typeof ErrorSession;
    sessions?: StoredSession[] | null;
}

declare class SessionService {
    constructor(apiToken: string);

    get baseAddress(): string;
    set baseAddress(value: string);

    list(timeout?: number, ct?: AbortSignal): Promise<ListResponse>;
    remove(
        label: string,
        timeout?: number,
        ct?: AbortSignal
    ): Promise<RemoveResponse>;

    dispose(): void;
}

export { SessionService, ListResponse, RemoveResponse, Session, ErrorSession };
