const AIOptions = require('./ai/types/ai-options');

class TranslateRequestT {
    constructor() {
        this.text = null;
        this.isoLang = null;
        this.responseFormat = null;
    }
}

class TranslateRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.text = rq.text;
        this.isoLang = rq.isoLang;
        this.responseFormat = rq.responseFormat;
    }
}

module.exports = { TranslateRequest };
