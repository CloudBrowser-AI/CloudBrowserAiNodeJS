import AIOptions from './ai/types/ai-options.js';

class QueryRequest {
    constructor() {
        this.html = null;
        this.promt = null;
        this.responseFormat = null;
    }
}

class QueryRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.html = rq.html;
        this.promt = rq.promt;
        this.responseFormat = rq.responseFormat;
    }
}

export { QueryRequest, QueryRequestI };