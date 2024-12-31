import AIOptions from './ai/types/ai-options.js';

class TranslateRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.text = rq.text;
        this.isoLang = rq.isoLang;
        this.responseFormat = rq.responseFormat;
    }
}

export { TranslateRequestI };