const ClientBase = require('../../shared/client-base');

class BrowserApiClient extends ClientBase {
    constructor() {
        super(new URL('https://production.cloudbrowser.ai'));
    }

    async open(token, rq = null, timeout = null, ct = null) {
        return this.post('Open', token, rq, timeout, ct);
    }

    async close(token, rq = null, timeout = null, ct = null) {
        return this.post('Close', token, rq, timeout, ct);
    }

    async get(token, timeout = null, ct = null) {
        return this.get('Get', token, timeout, ct);
    }

    async startRemoteDesktop(token, rq, timeout = null, ct = null) {
        return this.post('StartRemoteDesktop', token, rq, timeout, ct);
    }

    async stopRemoteDesktop(token, rq, timeout = null, ct = null) {
        return this.post('StopRemoteDesktop', token, rq, timeout, ct);
    }
}
