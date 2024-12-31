import ClientBase from '../../shared/client-base.js';

class BrowserApiClient extends ClientBase {
    constructor() {
        super(new URL('https://production.cloudbrowser.ai/api/v1/browser/'));
    }

    async open(token, rq = null, timeout = null, ct = null) {
        return this.post(token, 'Open', rq, timeout, ct);
    }

    async close(token, rq = null, timeout = null, ct = null) {
        return this.post(token, 'Close', rq, timeout, ct);
    }

    async get(token, timeout = null, ct = null) {
        return this.get(token, 'Get', timeout, ct);
    }

    async startRemoteDesktop(token, rq, timeout = null, ct = null) {
        return this.post(token, 'StartRemoteDesktop', rq, timeout, ct);
    }

    async stopRemoteDesktop(token, rq, timeout = null, ct = null) {
        return this.post(token, 'StopRemoteDesktop', rq, timeout, ct);
    }
}

export default BrowserApiClient;