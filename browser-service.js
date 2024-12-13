const BrowserApiClient = require('./browser/client/browser-api-client');
const CloseRequest = require('./browser/types/request/close-request');
const StartRemoteDesktopRequest = require('./browser/types/request/start-remote-desktop-request');
const StopRemoteDesktopRequest = require('./browser/types/request/stop-remote-desktop-request');

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

module.exports = BrowserService;
