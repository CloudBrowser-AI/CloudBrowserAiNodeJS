import BrowserApiClient from './browser/client/browser-api-client.js';

class BrowserService {
    constructor(apiToken) {
        this._apiToken = apiToken;
        this._client = new BrowserApiClient();
    }

    get baseAddress() {
        return this._client.baseAddress;
    }

    set baseAddress(value) {
        this._client.baseAddress = value;
    }

    async open(options = null, timeout = null, ct = null) {
        return this._client.open(this._apiToken, options, timeout, ct);
    }

    async get(timeout = null, ct = null) {
        return this._client.get(this._apiToken, timeout, ct);
    }

    async close(address, timeout = null, ct = null) {
        return this._client.close(this._apiToken, new CloseRequest(address), timeout, ct);
    }

    async startRemoteDesktop(address, timeout = null, ct = null) {
        return this._client.startRemoteDesktop(this._apiToken, new StartRemoteDesktopRequest(address), timeout, ct);
    }

    async stopRemoteDesktop(address, timeout = null, ct = null) {
        return this._client.stopRemoteDesktop(this._apiToken, new StopRemoteDesktopRequest(address), timeout, ct);
    }
}

export default BrowserService;
