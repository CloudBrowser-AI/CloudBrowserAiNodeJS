const AIOptions = require('./ai/types/ai-options');

class SummarizeRequest {
    constructor() {
        this.html = null;
        this.isoLang = null;
        this.responseFormat = null;
    }
}

class SummarizeRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.html = rq.html;
        this.isoLang = rq.isoLang;
        this.responseFormat = rq.responseFormat;
    }
}

module.exports = { SummarizeRequest };
