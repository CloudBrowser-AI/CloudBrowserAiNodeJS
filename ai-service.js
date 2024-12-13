const AIApiClient = require('./ai/client/ai-api-client');
const QueryRequest = require('./shared/data/ai/request/query-request');
const SummarizeRequest = require('./shared/data/ai/request/summarize-request');
const OptimizeRequest = require('./shared/data/ai/request/optimize-request');
const TranslateRequest = require('./shared/data/ai/request/translate-request');
const DescribeRequest = require('./shared/data/ai/request/describe-request');
const ToJSONRequest = require('./shared/data/ai/request/to-json-request');
const ToCSVRequest = require('./shared/data/ai/request/to-csv-request');
const ToMarkdownRequest = require('./shared/data/ai/request/to-markdown-request');

class AIService {
    constructor(apiToken, defaultAIOptions = null) {
        this._apiToken = apiToken;
        this._defaultAIOptions = defaultAIOptions;
        this._client = new AIApiClient();
    }

    get baseAddress() {
        return this._client.baseAddress;
    }

    set baseAddress(value) {
        this._client.baseAddress = value;
    }

    async query(rq, aiOptions = null, timeout = null, ct = null) {
        return this._client.query(this._apiToken, new QueryRequest(rq, aiOptions || this._defaultAIOptions), timeout, ct);
    }

    async summarize(rq, aiOptions = null, timeout = null, ct = null) {
        return this._client.summarize(this._apiToken, new SummarizeRequest(rq, aiOptions || this._defaultAIOptions), timeout, ct);
    }

    async optimize(rq, aiOptions = null, timeout = null, ct = null) {
        return this._client.optimize(this._apiToken, new OptimizeRequest(rq, aiOptions || this._defaultAIOptions), timeout, ct);
    }

    async translate(rq, aiOptions = null, timeout = null, ct = null) {
        return this._client.translate(this._apiToken, new TranslateRequest(rq, aiOptions || this._defaultAIOptions), timeout, ct);
    }

    async describe(rq, aiOptions = null, timeout = null, ct = null) {
        return this._client.describe(this._apiToken, new DescribeRequestC(rq, aiOptions || this._defaultAIOptions), timeout, ct);
    }

    async toJSON(rq, aiOptions = null, timeout = null, ct = null) {
        return this._client.toJSON(this._apiToken, new ToJSONRequest(rq, aiOptions || this._defaultAIOptions), timeout, ct);
    }

    async toCSV(rq, aiOptions = null, timeout = null, ct = null) {
        return this._client.toCSV(this._apiToken, new ToCSVRequest(rq, aiOptions || this._defaultAIOptions), timeout, ct);
    }

    async toMarkdown(rq, aiOptions = null, timeout = null, ct = null) {
        return this._client.toMarkdown(this._apiToken, new ToMarkdownRequest(rq, aiOptions || this._defaultAIOptions), timeout, ct);
    }

    async to(html, aiOptions = null, timeout = null, ct = null) {
        return Serializer.toObject(await this._client.toJSON(this._apiToken, new ToJSONRequest({ html, responseFormat: Serializer.toResponseFormat() }, aiOptions || this._defaultAIOptions), timeout, ct));
    }
}

module.exports = AIService;
