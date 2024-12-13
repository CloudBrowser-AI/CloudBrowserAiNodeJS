const AIOptions = require('./ai/types/ai-options');

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

module.exports = { QueryRequest };
