import AIApiClient from './ai/client/ai-api-client.js';

class AIService {
    constructor(apiToken, defaultAIOptions = null) {
        this._apiToken = apiToken;
        if (typeof defaultAIOptions === 'string') {
            this._defaultAIOptions = { openAIConfiguration: { apiKey: defaultAIOptions } };
        } else {
            this._defaultAIOptions = defaultAIOptions;
        }
        this._client = new AIApiClient();
    }

    get baseAddress() {
        return this._client.baseAddress;
    }

    set baseAddress(value) {
        this._client.baseAddress = value;
    }

    async query(rq, aiOptions = null, timeout = null, ct = null) {
        return this._client.query(this._apiToken, new QueryRequestI(rq, aiOptions || this._defaultAIOptions), timeout, ct);
    }

    async summarize(rq, aiOptions = null, timeout = null, ct = null) {
        return this._client.summarize(this._apiToken, new SummarizeRequestI(rq, aiOptions || this._defaultAIOptions), timeout, ct);
    }

    async optimize(rq, aiOptions = null, timeout = null, ct = null) {
        return this._client.optimize(this._apiToken, new OptimizeRequestI(rq, aiOptions || this._defaultAIOptions), timeout, ct);
    }

    async translate(rq, aiOptions = null, timeout = null, ct = null) {
        return this._client.translate(this._apiToken, new TranslateRequestI(rq, aiOptions || this._defaultAIOptions), timeout, ct);
    }

    async describe(rq, aiOptions = null, timeout = null, ct = null) {
        return this._client.describe(this._apiToken, new DescribeRequestI(rq, aiOptions || this._defaultAIOptions), timeout, ct);
    }

    async toJSON(rq, aiOptions = null, timeout = null, ct = null) {
        return this._client.toJSON(this._apiToken, new ToJSONRequestI(rq, aiOptions || this._defaultAIOptions), timeout, ct);
    }

    async toCSV(rq, aiOptions = null, timeout = null, ct = null) {
        return this._client.toCSV(this._apiToken, new ToCSVRequestI(rq, aiOptions || this._defaultAIOptions), timeout, ct);
    }

    async toMarkdown(rq, aiOptions = null, timeout = null, ct = null) {
        return this._client.toMarkdown(this._apiToken, new ToMarkdownRequestI(rq, aiOptions || this._defaultAIOptions), timeout, ct);
    }
}

export default AIService;
