const ClientBase = require('../../shared/client-base');

class AIApiClient extends ClientBase {
    constructor() {
        super('https://production.cloudbrowser.ai/api/v1/ai/');
    }

    async query(apiKey, rq, timeout = null, ct = null) {
        return this.post(apiKey, 'query', rq, timeout, ct);
    }

    async summarize(apiKey, rq, timeout = null, ct = null) {
        return this.post(apiKey, 'summarize', rq, timeout, ct);
    }

    async optimize(apiKey, rq, timeout = null, ct = null) {
        return this.post(apiKey, 'optimize', rq, timeout, ct);
    }

    async translate(apiKey, rq, timeout = null, ct = null) {
        return this.post(apiKey, 'translate', rq, timeout, ct);
    }

    async describe(apiKey, rq, timeout = null, ct = null) {
        return this.post(apiKey, 'describe', rq, timeout, ct);
    }

    async toJSON(apiKey, rq, timeout = null, ct = null) {
        return this.post(apiKey, 'toJSON', rq, timeout, ct);
    }

    async toCSV(apiKey, rq, timeout = null, ct = null) {
        return this.post(apiKey, 'toCSV', rq, timeout, ct);
    }

    async toMarkdown(apiKey, rq, timeout = null, ct = null) {
        return this.post(apiKey, 'toMarkdown', rq, timeout, ct);
    }
}
