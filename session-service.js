const SessionApiClient = require('./SessionApiClient');

class SessionService {
    constructor(apiToken) {
        this._apiToken = apiToken;
        this._client = new SessionApiClient();
    }

    get baseAddress() {
        return this._client.baseAddress;
    }
    set baseAddress(value) {
        this._client.baseAddress = value;
    }

    async list(timeout = null, ct = null) {
        return this._client.list(this._apiToken, timeout, ct);
    }

    async remove(label, timeout = null, ct = null) {
        return this._client.remove(this._apiToken, new RemoveRequest(label), timeout, ct);
    }
}

module.exports = SessionService;
