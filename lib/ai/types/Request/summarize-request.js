import AIOptions from './ai/types/ai-options.js';


class SummarizeRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.html = rq.html;
        this.isoLang = rq.isoLang;
        this.responseFormat = rq.responseFormat;
    }
}

export { SummarizeRequestI };