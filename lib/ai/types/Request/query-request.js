import AIOptions from './ai/types/ai-options.js';

class QueryRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.html = rq.html;
        this.promt = rq.promt;
        this.responseFormat = rq.responseFormat;
    }
}

export { QueryRequestI };